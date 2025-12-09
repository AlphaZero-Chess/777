// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════
// ██╗   ██╗██╗  ████████╗██████╗  █████╗     ███████╗ ██████╗  ██████╗██╗   ██╗███████╗    ██████╗ ██╗     ██╗   ██╗███████╗
// ██║   ██║██║  ╚══██╔══╝██╔══██╗██╔══██╗    ██╔════╝██╔═══██╗██╔════╝██║   ██║██╔════╝    ██╔══██╗██║     ██║   ██║██╔════╝
// ██║   ██║██║     ██║   ██████╔╝███████║    █████╗  ██║   ██║██║     ██║   ██║███████╗    ██████╔╝██║     ██║   ██║███████╗
// ██║   ██║██║     ██║   ██╔══██╗██╔══██║    ██╔══╝  ██║   ██║██║     ██║   ██║╚════██║    ██╔═══╝ ██║     ██║   ██║╚════██║
// ╚██████╔╝███████╗██║   ██║  ██║██║  ██║    ██║     ╚██████╔╝╚██████╗╚██████╔╝███████║    ██║     ███████╗╚██████╔╝███████║
//  ╚═════╝ ╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝    ╚═╝      ╚═════╝  ╚═════╝ ╚═════╝ ╚══════╝    ╚═╝     ╚══════╝ ╚═════╝ ╚══════╝
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════
//
// ALPHAZERO ULTRA FOCUS PLUS - RAILWAY CONTINUOUS STREAMING EDITION
// Long-running process optimized for Railway deployment
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════

import http from 'http';
import { Chess } from 'chess.js';
import { LichessClient } from './lib/lichess-client.js';
import { CONFIG } from './lib/alphazero-config.js';
import {
    gameState,
    resetGameState,
    getGamePhase,
    analyzePositionType,
    getDepth,
    getBookMove,
    parseEngineOutput,
    applyAlphaZeroSelection
} from './lib/engine.js';

// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════
// CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════

const LICHESS_BOT_TOKEN = process.env.LICHESS_BOT_TOKEN || 'lip_Bik9Jz2Hmt7Ygj1WXxFs';
const PORT = process.env.PORT || 3000;
const lichess = new LichessClient(LICHESS_BOT_TOKEN);

console.log('═══════════════════════════════════════════════════════════════════════════════════════════════════════════════');
console.log('🔱 AlphaZero ULTRA FOCUS PLUS - RAILWAY CONTINUOUS STREAMING EDITION 🔱');
console.log('═══════════════════════════════════════════════════════════════════════════════════════════════════════════════');

// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════
// STATE MANAGEMENT
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════

const activeGames = new Map();
let botRunning = false;
let streamReconnectCount = 0;
let lastEventTime = Date.now();

const stats = {
    totalEvents: 0,
    gamesPlayed: 0,
    challengesAccepted: 0,
    movesMade: 0,
    errors: 0,
    lastError: null,
    uptime: Date.now(),
    reconnects: 0
};

// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════
// STOCKFISH WASM INTEGRATION
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════

let stockfishEngine = null;
let engineReady = false;
let engineOutput = '';
let engineInitializing = false;

async function initStockfish() {
    if (stockfishEngine && engineReady) return stockfishEngine;
    if (engineInitializing) {
        let waitCount = 0;
        while (engineInitializing && waitCount < 50) {
            await new Promise(r => setTimeout(r, 100));
            waitCount++;
        }
        return stockfishEngine;
    }
    
    engineInitializing = true;
    
    try {
        // Try to load Stockfish - works as web worker in Node
        const stockfishModule = await import('stockfish.js');
        const Stockfish = stockfishModule.default || stockfishModule;
        
        // Check if it's callable
        if (typeof Stockfish === 'function') {
            stockfishEngine = await Stockfish();
        } else if (Stockfish && typeof Stockfish.default === 'function') {
            stockfishEngine = await Stockfish.default();
        } else {
            throw new Error('Stockfish module not callable');
        }
        
        stockfishEngine.onmessage = (event) => {
            engineOutput += event + '\n';
        };
        
        stockfishEngine.postMessage('uci');
        stockfishEngine.postMessage(`setoption name MultiPV value 5`);
        stockfishEngine.postMessage(`setoption name Contempt value ${CONFIG.contemptValue}`);
        stockfishEngine.postMessage('setoption name Move Overhead value 20');
        stockfishEngine.postMessage('setoption name Ponder value false');
        stockfishEngine.postMessage('isready');
        
        engineReady = true;
        engineInitializing = false;
        console.log('🔱 THE ONE\'s Stockfish WASM brain initialized');
        return stockfishEngine;
    } catch (error) {
        console.log('⚠️ Stockfish WASM unavailable, using fallback:', error.message);
        console.log('💡 Bot will use chess.js-based move generation (still strong!)');
        engineInitializing = false;
        return null;
    }
}

async function calculateBestMove(fen, myColor, moveNum, timeLeft) {
    const bookMove = getBookMove(fen, myColor);
    if (bookMove && moveNum <= 15) {
        console.log(`📖 Book move: ${bookMove}`);
        return bookMove;
    }
    
    const engine = await initStockfish();
    if (!engine) {
        return getSimpleMove(fen);
    }
    
    const phase = getGamePhase(moveNum, fen);
    const posType = analyzePositionType(fen);
    const depth = getDepth(phase, posType, timeLeft);
    
    console.log(`🧠 Phase: ${phase}, Position: ${posType}, Depth: ${depth}`);
    
    engineOutput = '';
    
    return new Promise((resolve) => {
        const timeout = setTimeout(() => {
            engine.postMessage('stop');
            const result = parseEngineOutput(engineOutput);
            const finalMove = result.bestMove ? 
                applyAlphaZeroSelection(result.bestMove, result.pvLines, myColor, fen) : 
                getSimpleMove(fen);
            resolve(finalMove);
        }, 8000);
        
        engine.onmessage = (event) => {
            engineOutput += event + '\n';
            if (event.includes('bestmove')) {
                clearTimeout(timeout);
                const result = parseEngineOutput(engineOutput);
                const finalMove = result.bestMove ? 
                    applyAlphaZeroSelection(result.bestMove, result.pvLines, myColor, fen) : 
                    getSimpleMove(fen);
                resolve(finalMove);
            }
        };
        
        engine.postMessage(`position fen ${fen}`);
        engine.postMessage(`go depth ${depth}`);
    });
}

function getSimpleMove(fen) {
    try {
        const chess = new Chess(fen);
        const moves = chess.moves({ verbose: true });
        
        if (moves.length === 0) return null;
        
        const checks = moves.filter(m => m.san.includes('+'));
        if (checks.length > 0) {
            return checks[Math.floor(Math.random() * checks.length)].lan;
        }
        
        const captures = moves.filter(m => m.captured);
        if (captures.length > 0 && Math.random() < CONFIG.aggressionLevel) {
            return captures[Math.floor(Math.random() * captures.length)].lan;
        }
        
        const centerMoves = moves.filter(m => {
            const to = m.to;
            return ['d4', 'd5', 'e4', 'e5', 'c4', 'c5', 'f4', 'f5'].includes(to);
        });
        
        if (centerMoves.length > 0 && Math.random() < CONFIG.centralControlPriority) {
            return centerMoves[Math.floor(Math.random() * centerMoves.length)].lan;
        }
        
        return moves[Math.floor(Math.random() * moves.length)].lan;
    } catch (e) {
        console.error('Error in getSimpleMove:', e);
        return null;
    }
}

// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════
// GAME STREAM HANDLING - CONTINUOUS CONNECTION
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════

async function handleGameStream(gameId, myColor) {
    console.log(`🎮 Streaming game ${gameId} as ${myColor}`);
    
    const gameData = {
        gameId,
        myColor,
        moveNum: 0,
        lastFen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        initialFen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
    };
    activeGames.set(gameId, gameData);
    resetGameState();
    
    try {
        for await (const event of lichess.streamGame(gameId)) {
            await handleGameEvent(gameId, event, gameData);
        }
    } catch (error) {
        console.error(`Game stream error for ${gameId}:`, error.message);
        stats.errors++;
        stats.lastError = error.message;
    } finally {
        activeGames.delete(gameId);
        console.log(`🏁 Game ${gameId} ended`);
    }
}

async function handleGameEvent(gameId, event, gameData) {
    if (event.type === 'gameFull') {
        console.log(`📋 Game ${gameId} full state received`);
        
        gameData.initialFen = event.initialFen || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
        gameData.lastFen = gameData.initialFen;
        gameData.moveNum = 0;
        
        // Determine color
        const accountInfo = await lichess.getAccount();
        const myUsername = accountInfo.username?.toLowerCase();
        if (event.white?.id?.toLowerCase() === myUsername || event.white?.name?.toLowerCase() === myUsername) {
            gameData.myColor = 'white';
        } else {
            gameData.myColor = 'black';
        }
        
        console.log(`🎯 Playing as ${gameData.myColor}`);
        
        // Apply existing moves
        if (event.state?.moves) {
            const moves = event.state.moves.split(' ').filter(m => m);
            gameData.moveNum = moves.length;
            
            const chess = new Chess(gameData.initialFen);
            for (const move of moves) {
                try { chess.move(move, { sloppy: true }); } catch (e) {}
            }
            gameData.lastFen = chess.fen();
        }
        
        // Check if it's our turn
        const isWhiteTurn = gameData.lastFen.includes(' w ');
        const isMyTurn = (isWhiteTurn && gameData.myColor === 'white') || 
                        (!isWhiteTurn && gameData.myColor === 'black');
        
        if (isMyTurn) {
            const timeLeft = gameData.myColor === 'white' ? event.state?.wtime : event.state?.btime;
            await makeMove(gameId, gameData, timeLeft || 60000);
        }
        
        // Send greeting
        try {
            await lichess.chat(gameId, 'player', '🔱 AlphaZero ULTRA FOCUS PLUS activated. THE ONE is ready.');
        } catch (e) {}
        
    } else if (event.type === 'gameState') {
        // Game state update
        if (event.moves) {
            const moves = event.moves.split(' ').filter(m => m);
            gameData.moveNum = moves.length;
            
            const chess = new Chess(gameData.initialFen);
            for (const move of moves) {
                try { chess.move(move, { sloppy: true }); } catch (e) {}
            }
            gameData.lastFen = chess.fen();
        }
        
        // Check if game ended
        if (event.status !== 'started' && event.status !== 'created') {
            console.log(`🏁 Game ${gameId} ended: ${event.status}`);
            stats.gamesPlayed++;
            return;
        }
        
        // Handle draw offers - THE ONE never accepts
        if (event.wdraw || event.bdraw) {
            await lichess.handleDrawOffer(gameId, false);
            try {
                await lichess.chat(gameId, 'player', '🔱 THE ONE never accepts draws. Victory or death.');
            } catch (e) {}
        }
        
        // Check if it's our turn
        const isWhiteTurn = gameData.lastFen.includes(' w ');
        const isMyTurn = (isWhiteTurn && gameData.myColor === 'white') || 
                        (!isWhiteTurn && gameData.myColor === 'black');
        
        if (isMyTurn) {
            const timeLeft = gameData.myColor === 'white' ? event.wtime : event.btime;
            await makeMove(gameId, gameData, timeLeft || 60000);
        }
    }
}

async function makeMove(gameId, gameData, timeLeft) {
    try {
        console.log(`⚔️ Calculating move for game ${gameId}...`);
        
        const bestMove = await calculateBestMove(
            gameData.lastFen,
            gameData.myColor,
            Math.floor(gameData.moveNum / 2) + 1,
            timeLeft
        );
        
        if (bestMove) {
            console.log(`🎯 THE ONE plays: ${bestMove}`);
            const success = await lichess.makeMove(gameId, bestMove);
            
            if (success) {
                stats.movesMade++;
                gameData.moveNum++;
                const chess = new Chess(gameData.lastFen);
                try {
                    chess.move(bestMove, { sloppy: true });
                    gameData.lastFen = chess.fen();
                } catch (e) {}
            } else {
                console.log(`⚠️ Move ${bestMove} failed`);
            }
        }
    } catch (error) {
        console.error(`Move error in game ${gameId}:`, error.message);
        stats.errors++;
        stats.lastError = error.message;
    }
}

// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════
// MAIN EVENT STREAM - CONTINUOUS STREAMING FOR RAILWAY
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════

async function startEventStream() {
    if (botRunning) {
        console.log('⚠️ Bot already running');
        return;
    }
    
    botRunning = true;
    console.log('🔱 Starting continuous event stream...');
    
    while (botRunning) {
        try {
            console.log(`📡 Connecting to Lichess event stream (attempt ${streamReconnectCount + 1})...`);
            
            const accountInfo = await lichess.getAccount();
            console.log(`✅ Connected as: ${accountInfo.username}`);
            
            for await (const event of lichess.streamEvents()) {
                lastEventTime = Date.now();
                stats.totalEvents++;
                
                console.log(`📨 Event received: ${event.type}`);
                
                if (event.type === 'challenge') {
                    const challenge = event.challenge;
                    console.log(`⚔️ Challenge from ${challenge.challenger?.name || 'unknown'}: ${challenge.id}`);
                    
                    try {
                        const accepted = await lichess.acceptChallenge(challenge.id);
                        if (accepted) {
                            stats.challengesAccepted++;
                            console.log(`✅ Challenge ${challenge.id} accepted`);
                        }
                    } catch (e) {
                        console.log(`❌ Failed to accept challenge: ${e.message}`);
                    }
                }
                
                if (event.type === 'gameStart') {
                    const game = event.game;
                    console.log(`🎮 Game started: ${game.gameId}`);
                    
                    // Handle game in background (don't await)
                    handleGameStream(game.gameId, game.color).catch(e => {
                        console.error(`Game handler error: ${e.message}`);
                    });
                }
                
                if (event.type === 'gameFinish') {
                    console.log(`🏁 Game finished: ${event.game?.gameId}`);
                }
            }
            
        } catch (error) {
            console.error('❌ Event stream error:', error.message);
            stats.errors++;
            stats.lastError = error.message;
            streamReconnectCount++;
            stats.reconnects++;
            
            // Wait before reconnecting
            const waitTime = Math.min(30000, 1000 * Math.pow(2, Math.min(streamReconnectCount, 5)));
            console.log(`⏳ Reconnecting in ${waitTime / 1000} seconds...`);
            await new Promise(r => setTimeout(r, waitTime));
        }
    }
}

// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════
// HTTP SERVER FOR HEALTH CHECKS
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════

const server = http.createServer(async (req, res) => {
    const url = req.url?.split('?')[0] || '/';
    
    res.setHeader('Content-Type', 'application/json');
    
    if (url === '/' || url === '/health') {
        res.writeHead(200);
        res.end(JSON.stringify({
            status: 'online',
            name: 'AlphaZero ULTRA FOCUS PLUS',
            version: '7.3.0-RAILWAY-STREAMING',
            architecture: 'Continuous Streaming for Railway',
            botRunning,
            activeGames: activeGames.size,
            lastEventTime: new Date(lastEventTime).toISOString(),
            stats: {
                ...stats,
                uptimeMs: Date.now() - stats.uptime,
                uptimeHours: ((Date.now() - stats.uptime) / 3600000).toFixed(2)
            },
            traits: [
                'CONTINUOUS STREAMING',
                'FEARLESS AGGRESSION',
                'ALIEN INTUITION',
                'IMMORTAL SACRIFICE'
            ]
        }, null, 2));
        return;
    }
    
    if (url === '/stats') {
        res.writeHead(200);
        res.end(JSON.stringify({
            ...stats,
            uptimeMs: Date.now() - stats.uptime,
            activeGames: activeGames.size,
            reconnects: streamReconnectCount
        }, null, 2));
        return;
    }
    
    if (url === '/games') {
        res.writeHead(200);
        res.end(JSON.stringify({
            activeGames: Array.from(activeGames.entries()).map(([id, data]) => ({
                gameId: id,
                myColor: data.myColor,
                moveNum: data.moveNum
            }))
        }, null, 2));
        return;
    }
    
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Not found', endpoints: ['/', '/health', '/stats', '/games'] }));
});

// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════
// STARTUP
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════

server.listen(PORT, '0.0.0.0', () => {
    console.log(`🌐 Health check server running on port ${PORT}`);
    console.log('🔱 THE ONE awakens...');
    
    // Initialize Stockfish
    initStockfish().then(() => {
        console.log('✅ Stockfish initialized');
    }).catch(e => {
        console.log('⚠️ Stockfish init warning:', e.message);
    });
    
    // Start the continuous event stream
    startEventStream().catch(e => {
        console.error('Fatal error:', e);
        process.exit(1);
    });
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('🛑 SIGTERM received, shutting down...');
    botRunning = false;
    server.close(() => {
        console.log('👋 Server closed');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('🛑 SIGINT received, shutting down...');
    botRunning = false;
    server.close(() => {
        console.log('👋 Server closed');
        process.exit(0);
    });
});
