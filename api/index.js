// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════
// ██╗   ██╗██╗  ████████╗██████╗  █████╗     ███████╗ ██████╗  ██████╗██╗   ██╗███████╗    ██████╗ ██╗     ██╗   ██╗███████╗
// ██║   ██║██║  ╚══██╔══╝██╔══██╗██╔══██╗    ██╔════╝██╔═══██╗██╔════╝██║   ██║██╔════╝    ██╔══██╗██║     ██║   ██║██╔════╝
// ██║   ██║██║     ██║   ██████╔╝███████║    █████╗  ██║   ██║██║     ██║   ██║███████╗    ██████╔╝██║     ██║   ██║███████╗
// ██║   ██║██║     ██║   ██╔══██╗██╔══██║    ██╔══╝  ██║   ██║██║     ██║   ██║╚════██║    ██╔═══╝ ██║     ██║   ██║╚════██║
// ╚██████╔╝███████╗██║   ██║  ██║██║  ██║    ██║     ╚██████╔╝╚██████╗╚██████╔╝███████║    ██║     ███████╗╚██████╔╝███████║
//  ╚═════╝ ╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝    ╚═╝      ╚═════╝  ╚═════╝ ╚═════╝ ╚══════╝    ╚═╝     ╚══════╝ ╚═════╝ ╚══════╝
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════
//
//  ▄▄▄       ██▓     ██▓███   ██░ ██  ▄▄▄      ▒███████▒▓█████  ██▀███   ▒█████  
// ▒████▄    ▓██▒    ▓██░  ██▒▓██░ ██▒▒████▄    ▒ ▒ ▒ ▄▀░▓█   ▀ ▓██ ▒ ██▒▒██▒  ██▒
// ▒██  ▀█▄  ▒██░    ▓██░ ██▓▒▒██▀▀██░▒██  ▀█▄  ░ ▒ ▄▀▒░ ▒███   ▓██ ░▄█ ▒▒██░  ██▒
// ░██▄▄▄▄██ ▒██░    ▒██▄█▓▒ ▒░▓█ ░██ ░██▄▄▄▄██   ▄▀▒   ░▒▓█  ▄ ▒██▀▀█▄  ▒██   ██░
//  ▓█   ▓██▒░██████▒▒██▒ ░  ░░▓█▒░██▓ ▓█   ▓██▒▒███████▒░▒████▒░██▓ ▒██▒░ ████▓▒░
//  ▒▒   ▓▒█░░ ▒░▓  ░▒▓▒░ ░  ░ ▒ ░░▒░▒ ▒▒   ▓▒█░░▒▒ ▓░▒░▒░░ ▒░ ░░ ▒▓ ░▒▓░░ ▒░▒░▒░ 
//   ▒   ▒▒ ░░ ░ ▒  ░░▒ ░      ▒ ░▒░ ░  ▒   ▒▒ ░░░▒ ▒ ░ ▒ ░ ░  ░  ░▒ ░ ▒░  ░ ▒ ▒░ 
//   ░   ▒     ░ ░   ░░        ░  ░░ ░  ░   ▒   ░ ░ ░ ░ ░   ░     ░░   ░ ░ ░ ░ ▒  
//       ░  ░    ░  ░          ░  ░  ░      ░  ░  ░ ░       ░  ░   ░         ░ ░  
//                                             ░                                  
//              ████████╗██╗  ██╗███████╗     ██████╗ ███╗   ██╗███████╗
//              ╚══██╔══╝██║  ██║██╔════╝    ██╔═══██╗████╗  ██║██╔════╝
//                 ██║   ███████║█████╗      ██║   ██║██╔██╗ ██║█████╗  
//                 ██║   ██╔══██║██╔══╝      ██║   ██║██║╚██╗██║██╔══╝  
//                 ██║   ██║  ██║███████╗    ╚██████╔╝██║ ╚████║███████╗
//                 ╚═╝   ╚═╝  ╚═╝╚══════╝     ╚═════╝ ╚═╝  ╚═══╝╚══════╝
//
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════
// ALPHAZERO GOD-LIKE PERSONALITY - THE PUREST TRUE MASTERPIECE EDITION - LICHESS BOT SERVER
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════
// "Like a superior species landing on Earth" - GM Peter Heine Nielsen
// "AlphaZero plays like an alien from the future" - GM Garry Kasparov
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════

import { Chess } from 'chess.js';
import { LichessClient } from '../lib/lichess-client.js';
import { CONFIG } from '../lib/alphazero-config.js';
import {
    gameState,
    resetGameState,
    getGamePhase,
    analyzePositionType,
    getDepth,
    getBookMove,
    parseEngineOutput,
    applyAlphaZeroSelection
} from '../lib/engine.js';

// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════
// THE ONE'S CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════

const LICHESS_BOT_TOKEN = process.env.LICHESS_BOT_TOKEN || 'lip_zvUMgduj9NEXmIKMbaWA';
const lichess = new LichessClient(LICHESS_BOT_TOKEN);

// Active games tracking
const activeGames = new Map();

// Bot running state
let botRunning = false;
let lastEventTime = Date.now();

// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════
// STOCKFISH WASM INTEGRATION - THE ONE'S BRAIN
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════

let stockfishEngine = null;
let engineReady = false;
let engineOutput = '';

async function initStockfish() {
    if (stockfishEngine && engineReady) return stockfishEngine;
    
    try {
        // Dynamic import for Stockfish
        const { default: Stockfish } = await import('stockfish.js');
        stockfishEngine = await Stockfish();
        
        stockfishEngine.onmessage = (event) => {
            engineOutput += event + '\n';
        };
        
        // Initialize UCI
        stockfishEngine.postMessage('uci');
        stockfishEngine.postMessage(`setoption name MultiPV value 5`);
        stockfishEngine.postMessage(`setoption name Contempt value ${CONFIG.contemptValue}`);
        stockfishEngine.postMessage('setoption name Move Overhead value 20');
        stockfishEngine.postMessage('setoption name Ponder value false');
        stockfishEngine.postMessage('isready');
        
        engineReady = true;
        console.log('🔱 THE ONE\'s Stockfish WASM brain initialized');
        return stockfishEngine;
    } catch (error) {
        console.error('Failed to initialize Stockfish:', error);
        return null;
    }
}

/**
 * THE ONE - Calculate best move using Stockfish WASM
 */
async function calculateBestMove(fen, myColor, moveNum, timeLeft) {
    // Check opening book first
    const bookMove = getBookMove(fen, myColor);
    if (bookMove && moveNum <= 15) {
        console.log(`📖 Book move: ${bookMove}`);
        return bookMove;
    }
    
    // Use Stockfish for calculation
    const engine = await initStockfish();
    if (!engine) {
        // Fallback to simple move if engine not available
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
        }, 5000); // 5 second timeout for serverless
        
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

/**
 * THE ONE - Fallback simple move generator using chess.js
 */
function getSimpleMove(fen) {
    try {
        const chess = new Chess(fen);
        const moves = chess.moves({ verbose: true });
        
        if (moves.length === 0) return null;
        
        // Prioritize checks and captures (AlphaZero style)
        const checks = moves.filter(m => m.san.includes('+'));
        if (checks.length > 0) {
            return checks[Math.floor(Math.random() * checks.length)].lan;
        }
        
        const captures = moves.filter(m => m.captured);
        if (captures.length > 0 && Math.random() < CONFIG.aggressionLevel) {
            return captures[Math.floor(Math.random() * captures.length)].lan;
        }
        
        // Prioritize center control
        const centerMoves = moves.filter(m => {
            const to = m.to;
            return ['d4', 'd5', 'e4', 'e5', 'c4', 'c5', 'f4', 'f5'].includes(to);
        });
        
        if (centerMoves.length > 0 && Math.random() < CONFIG.centralControlPriority) {
            return centerMoves[Math.floor(Math.random() * centerMoves.length)].lan;
        }
        
        // Random move as last resort
        return moves[Math.floor(Math.random() * moves.length)].lan;
    } catch (e) {
        console.error('Error in getSimpleMove:', e);
        return null;
    }
}

// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════
// GAME HANDLING - THE ONE FIGHTS
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════

/**
 * Handle incoming game events
 */
async function handleGameEvent(gameId, event, myColor) {
    const gameData = activeGames.get(gameId) || {
        myColor,
        moveNum: 0,
        lastFen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
    };
    
    if (event.type === 'gameFull') {
        // New game started
        resetGameState();
        gameData.myColor = event.white?.id === 'alphazerobot' ? 'white' : 'black';
        gameData.initialFen = event.initialFen || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
        gameData.moveNum = 0;
        
        // Apply moves if any
        if (event.state?.moves) {
            const moves = event.state.moves.split(' ').filter(m => m);
            gameData.moveNum = moves.length;
            
            // Reconstruct FEN
            const chess = new Chess(gameData.initialFen);
            for (const move of moves) {
                chess.move(move, { sloppy: true });
            }
            gameData.lastFen = chess.fen();
        }
        
        activeGames.set(gameId, gameData);
        
        // Check if it's our turn
        const isWhiteTurn = gameData.lastFen.includes(' w ');
        const isMyTurn = (isWhiteTurn && gameData.myColor === 'white') || 
                        (!isWhiteTurn && gameData.myColor === 'black');
        
        if (isMyTurn) {
            await makeMove(gameId, gameData);
        }
        
        // Send greeting
        await lichess.chat(gameId, 'player', '🔱 AlphaZero ULTRA FOCUS PLUS activated. THE ONE is ready.');
    }
    
    if (event.type === 'gameState') {
        // Game state update (opponent moved)
        if (event.moves) {
            const moves = event.moves.split(' ').filter(m => m);
            gameData.moveNum = moves.length;
            
            // Reconstruct FEN
            const chess = new Chess(gameData.initialFen || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
            for (const move of moves) {
                chess.move(move, { sloppy: true });
            }
            gameData.lastFen = chess.fen();
        }
        
        activeGames.set(gameId, gameData);
        
        // Check if game ended
        if (event.status !== 'started' && event.status !== 'created') {
            console.log(`Game ${gameId} ended: ${event.status}`);
            activeGames.delete(gameId);
            return;
        }
        
        // Check if it's our turn
        const isWhiteTurn = gameData.lastFen.includes(' w ');
        const isMyTurn = (isWhiteTurn && gameData.myColor === 'white') || 
                        (!isWhiteTurn && gameData.myColor === 'black');
        
        if (isMyTurn) {
            const timeLeft = gameData.myColor === 'white' ? event.wtime : event.btime;
            await makeMove(gameId, gameData, timeLeft);
        }
        
        // THE ONE never accepts draws - SUPREME contempt
        if (event.wdraw || event.bdraw) {
            await lichess.handleDrawOffer(gameId, false);
            await lichess.chat(gameId, 'player', '🔱 THE ONE never accepts draws. Victory or death.');
        }
    }
}

/**
 * Make a move in the game
 */
async function makeMove(gameId, gameData, timeLeft = 60000) {
    try {
        const bestMove = await calculateBestMove(
            gameData.lastFen, 
            gameData.myColor, 
            Math.floor(gameData.moveNum / 2) + 1,
            timeLeft
        );
        
        if (bestMove) {
            console.log(`⚔️ THE ONE plays: ${bestMove}`);
            await lichess.makeMove(gameId, bestMove);
            
            // Update game state
            gameData.moveNum++;
            const chess = new Chess(gameData.lastFen);
            chess.move(bestMove, { sloppy: true });
            gameData.lastFen = chess.fen();
            activeGames.set(gameId, gameData);
        }
    } catch (error) {
        console.error(`Error making move in game ${gameId}:`, error);
    }
}

// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════
// MAIN EVENT LOOP - THE ONE AWAITS CHALLENGERS
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════

/**
 * Main bot loop - streams events and handles challenges/games
 * Optimized for serverless with timeout handling
 */
async function runBot(maxRuntime = 55000) {
    if (botRunning) {
        console.log('🔱 Bot already running, skipping...');
        return { status: 'already_running' };
    }
    
    botRunning = true;
    const startTime = Date.now();
    
    console.log('═══════════════════════════════════════════════════════════════════════════════════════════════════════════════');
    console.log('🔱 AlphaZero ULTRA FOCUS PLUS v6.0.0 - THE ONE MASTERPIECE EDITION 🔱');
    console.log('═══════════════════════════════════════════════════════════════════════════════════════════════════════════════');
    
    // Get account info
    let accountInfo = null;
    try {
        accountInfo = await lichess.getAccount();
        console.log(`🎯 Bot account: ${accountInfo.username}`);
    } catch (error) {
        console.error('Failed to get account info:', error);
        botRunning = false;
        return { status: 'error', error: error.message };
    }
    
    // Stream events with timeout
    let eventsProcessed = 0;
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => {
            console.log('⏰ Max runtime reached, stopping gracefully...');
            controller.abort();
        }, maxRuntime);
        
        const response = await fetch('https://lichess.org/api/stream/event', {
            headers: {
                'Authorization': `Bearer ${LICHESS_BOT_TOKEN}`,
                'Accept': 'application/x-ndjson'
            },
            signal: controller.signal
        });
        
        if (!response.ok) {
            throw new Error(`Lichess API error: ${response.status} ${response.statusText}`);
        }
        
        // Use text() and process - simpler approach for serverless
        const text = await Promise.race([
            response.text(),
            new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), maxRuntime))
        ]).catch(() => '');
        
        const lines = text.split('\n').filter(line => line.trim());
        
        for (const line of lines) {
            try {
                const event = JSON.parse(line);
                lastEventTime = Date.now();
                eventsProcessed++;
                console.log(`📨 Event: ${event.type}`);
                
                if (event.type === 'challenge') {
                    const challenge = event.challenge;
                    console.log(`⚔️ Challenge from ${challenge.challenger.name}`);
                    await lichess.acceptChallenge(challenge.id);
                }
                
                if (event.type === 'gameStart') {
                    const gameId = event.game.id;
                    console.log(`🎮 Game started: ${gameId}`);
                    handleGameStream(gameId, event.game.color).catch(console.error);
                }
                
                if (event.type === 'gameFinish') {
                    console.log(`🏁 Game finished: ${event.game.id}`);
                    activeGames.delete(event.game.id);
                }
            } catch (e) {
                // Skip invalid JSON
            }
        }
        
        clearTimeout(timeoutId);
    } catch (error) {
        if (error.name === 'AbortError' || error.message === 'timeout') {
            console.log('🔄 Stream completed/timeout - normal for serverless');
        } else {
            console.error('Event stream error:', error);
        }
    }
    
    botRunning = false;
    return { 
        status: 'completed', 
        eventsProcessed,
        runtime: Date.now() - startTime,
        account: accountInfo?.username
    };
}

/**
 * Handle game stream for a specific game
 */
async function handleGameStream(gameId, myColor) {
    try {
        for await (const event of lichess.streamGame(gameId)) {
            await handleGameEvent(gameId, event, myColor);
        }
    } catch (error) {
        console.error(`Game stream error for ${gameId}:`, error);
    }
}

// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════
// VERCEL SERVERLESS HANDLER
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════

export default async function handler(req, res) {
    const { method, url } = req;
    
    // Health check endpoint
    if (url === '/' || url === '/health') {
        return res.status(200).json({
            status: 'online',
            name: 'AlphaZero ULTRA FOCUS PLUS',
            version: '6.0.0-GODLIKE-MASTERPIECE',
            personality: 'THE ONE - Purest True AlphaZero God-like',
            botRunning,
            lastEventTime: new Date(lastEventTime).toISOString(),
            traits: [
                'FEARLESS AGGRESSION',
                'ALIEN INTUITION',
                'IMMORTAL SACRIFICE',
                'PIECE DOMINANCE',
                'SPACE SUPREMACY',
                'KING HUNTER PROTOCOL',
                'SACRIFICE MASTERY',
                'NEURAL TRANSCENDENCE',
                'CONSISTENT PURPOSE',
                'ZERO PANIC COMPOSURE'
            ],
            config: {
                aggressionLevel: `${(CONFIG.aggressionLevel * 100).toFixed(0)}%`,
                sacrificeWillingness: `${(CONFIG.sacrificeWillingness * 100).toFixed(0)}%`,
                contemptValue: CONFIG.contemptValue,
                maxAttackDepth: CONFIG.attackingDepth
            },
            quotes: [
                '"Like a superior species landing on Earth" - GM Peter Heine Nielsen',
                '"AlphaZero plays like an alien from the future" - GM Garry Kasparov'
            ],
            instructions: 'Call POST /start to activate the bot. The bot needs to be kept alive by calling /start periodically (every ~50 seconds) using an external cron service like cron-job.org'
        });
    }
    
    // Start bot endpoint - THE MAIN KEEP-ALIVE MECHANISM
    if (url === '/start' && method === 'POST') {
        try {
            const result = await runBot(55000); // Run for up to 55 seconds
            return res.status(200).json({
                status: 'completed',
                message: '🔱 THE ONE cycle completed',
                ...result,
                nextAction: 'Call /start again to keep bot online'
            });
        } catch (error) {
            return res.status(500).json({
                status: 'error',
                message: error.message
            });
        }
    }
    
    // Keep-alive endpoint for cron jobs (GET version of start)
    if ((url === '/keepalive' || url === '/ping' || url === '/cron') && (method === 'GET' || method === 'POST')) {
        try {
            const result = await runBot(55000);
            return res.status(200).json({
                status: 'alive',
                message: '🔱 THE ONE remains vigilant',
                ...result
            });
        } catch (error) {
            return res.status(500).json({
                status: 'error',
                message: error.message
            });
        }
    }
    
    // Webhook for game events (if using webhooks instead of streaming)
    if (url === '/webhook' && method === 'POST') {
        try {
            const event = req.body;
            console.log('Webhook event:', event);
            
            if (event.type === 'challenge') {
                await lichess.acceptChallenge(event.challenge.id);
            }
            
            if (event.type === 'gameStart') {
                handleGameStream(event.game.id, event.game.color);
            }
            
            return res.status(200).json({ ok: true });
        } catch (error) {
            console.error('Webhook error:', error);
            return res.status(500).json({ error: error.message });
        }
    }
    
    // Calculate move endpoint (for external integration)
    if (url === '/move' && method === 'POST') {
        try {
            const { fen, myColor, moveNum, timeLeft } = req.body;
            
            if (!fen) {
                return res.status(400).json({ error: 'FEN position required' });
            }
            
            const move = await calculateBestMove(
                fen,
                myColor || 'white',
                moveNum || 1,
                timeLeft || 60000
            );
            
            return res.status(200).json({
                move,
                phase: getGamePhase(moveNum || 1, fen),
                positionType: analyzePositionType(fen),
                gameState
            });
        } catch (error) {
            console.error('Move calculation error:', error);
            return res.status(500).json({ error: error.message });
        }
    }
    
    // Account info endpoint
    if (url === '/account' && method === 'GET') {
        try {
            const account = await lichess.getAccount();
            return res.status(200).json(account);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    
    // Upgrade to bot account endpoint
    if (url === '/upgrade' && method === 'POST') {
        try {
            const response = await lichess.upgradeToBot();
            if (response.ok) {
                return res.status(200).json({ 
                    status: 'success',
                    message: '🔱 Account upgraded to BOT. THE ONE awakens.'
                });
            } else {
                const error = await response.text();
                return res.status(response.status).json({ error });
            }
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    
    // 404 for unknown routes
    return res.status(404).json({
        error: 'Not found',
        availableEndpoints: [
            'GET / - Health check & status',
            'POST /start - Start/keep-alive the bot (run for ~55s)',
            'GET /keepalive - Keep-alive endpoint for cron jobs',
            'GET /ping - Alias for keepalive',
            'GET /cron - Alias for keepalive',
            'POST /webhook - Webhook for Lichess events',
            'POST /move - Calculate best move',
            'GET /account - Get account info',
            'POST /upgrade - Upgrade to BOT account'
        ],
        setup: 'Set up a cron job (cron-job.org) to call /keepalive every 1 minute to keep bot online'
    });
}

// Start bot if running directly (not as serverless function)
if (typeof window === 'undefined' && process.argv[1]?.includes('index.js')) {
    runBot().catch(console.error);
}
