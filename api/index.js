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

const LICHESS_BOT_TOKEN = process.env.LICHESS_BOT_TOKEN || 'lip_N8FtKKC3QOHrGveP43JQ';
const lichess = new LichessClient(LICHESS_BOT_TOKEN);

// Active games tracking
const activeGames = new Map();

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
 */
async function runBot() {
    console.log('═══════════════════════════════════════════════════════════════════════════════════════════════════════════════');
    console.log('🔱 AlphaZero ULTRA FOCUS PLUS v6.0.0 - THE ONE MASTERPIECE EDITION 🔱');
    console.log('═══════════════════════════════════════════════════════════════════════════════════════════════════════════════');
    console.log('"Like a superior species landing on Earth" - GM Peter Heine Nielsen');
    console.log('"AlphaZero plays like an alien from the future" - GM Garry Kasparov');
    console.log('═══════════════════════════════════════════════════════════════════════════════════════════════════════════════');
    
    // Initialize Stockfish
    await initStockfish();
    
    // Get account info
    try {
        const account = await lichess.getAccount();
        console.log(`🎯 Bot account: ${account.username}`);
        console.log(`⚡ THE ONE's Configuration:`);
        console.log(`   ├─ Aggression Level: ${(CONFIG.aggressionLevel * 100).toFixed(0)}%`);
        console.log(`   ├─ Sacrifice Willingness: ${(CONFIG.sacrificeWillingness * 100).toFixed(0)}%`);
        console.log(`   ├─ Contempt Value: ${CONFIG.contemptValue}`);
        console.log(`   └─ Max Attack Depth: ${CONFIG.attackingDepth}`);
    } catch (error) {
        console.error('Failed to get account info:', error);
    }
    
    // Stream events
    try {
        for await (const event of lichess.streamEvents()) {
            console.log(`📨 Event: ${event.type}`);
            
            if (event.type === 'challenge') {
                // THE ONE accepts ALL challenges
                const challenge = event.challenge;
                console.log(`⚔️ Challenge from ${challenge.challenger.name}: ${challenge.variant.name} ${challenge.timeControl?.show || 'unlimited'}`);
                
                const accepted = await lichess.acceptChallenge(challenge.id);
                if (accepted) {
                    console.log(`✅ Challenge accepted!`);
                } else {
                    console.log(`❌ Failed to accept challenge`);
                }
            }
            
            if (event.type === 'challengeCanceled') {
                console.log(`❌ Challenge cancelled: ${event.challenge?.id}`);
            }
            
            if (event.type === 'challengeDeclined') {
                console.log(`❌ Challenge declined: ${event.challenge?.id}`);
            }
            
            if (event.type === 'gameStart') {
                const gameId = event.game.id;
                console.log(`🎮 Game started: ${gameId}`);
                
                // Determine our color
                const myColor = event.game.color;
                
                // Start streaming this game
                handleGameStream(gameId, myColor);
            }
            
            if (event.type === 'gameFinish') {
                const gameId = event.game.id;
                console.log(`🏁 Game finished: ${gameId}`);
                activeGames.delete(gameId);
            }
        }
    } catch (error) {
        console.error('Event stream error:', error);
    }
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
            ]
        });
    }
    
    // Start bot endpoint
    if (url === '/start' && method === 'POST') {
        // Run bot in background (note: serverless functions have time limits)
        runBot().catch(console.error);
        
        return res.status(200).json({
            status: 'starting',
            message: '🔱 THE ONE is awakening...'
        });
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
            'GET / - Health check',
            'POST /start - Start the bot',
            'POST /webhook - Webhook for Lichess events',
            'POST /move - Calculate best move',
            'GET /account - Get account info',
            'POST /upgrade - Upgrade to BOT account'
        ]
    });
}

// Start bot if running directly (not as serverless function)
if (typeof window === 'undefined' && process.argv[1]?.includes('index.js')) {
    runBot().catch(console.error);
}
