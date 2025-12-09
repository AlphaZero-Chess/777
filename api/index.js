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
// 
// ULTRA FOCUS PLUS v7.0.0 - SERVERLESS POLLING ARCHITECTURE
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════
// - Replaces streaming with polling (Vercel serverless compatible)
// - State persistence between invocations
// - Short-interval polling with efficient caching
// - Backward compatible with all existing endpoints
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

// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════
// ULTRA FOCUS PLUS - SERVERLESS STATE MANAGEMENT
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════
// In-memory state (persists during warm starts, resets on cold starts)
// For production, use Vercel KV, Redis, or external database

// Active games tracking with full state
const activeGames = new Map();

// Processed event/move tracking to prevent duplicates
const processedMoves = new Map(); // gameId -> lastMoveCount
const processedChallenges = new Set();

// Bot running state
let botRunning = false;
let lastEventTime = Date.now();
let lastPollTime = 0;
let pollCycleCount = 0;

// Statistics for monitoring
const stats = {
    totalPolls: 0,
    gamesProcessed: 0,
    challengesAccepted: 0,
    movesMade: 0,
    errors: 0,
    lastError: null,
    uptime: Date.now()
};

// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════
// STOCKFISH WASM INTEGRATION - THE ONE'S BRAIN
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════

let stockfishEngine = null;
let engineReady = false;
let engineOutput = '';
let engineInitializing = false;

async function initStockfish() {
    if (stockfishEngine && engineReady) return stockfishEngine;
    if (engineInitializing) {
        // Wait for initialization to complete
        let waitCount = 0;
        while (engineInitializing && waitCount < 50) {
            await new Promise(r => setTimeout(r, 100));
            waitCount++;
        }
        return stockfishEngine;
    }
    
    engineInitializing = true;
    
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
        engineInitializing = false;
        console.log('🔱 THE ONE\'s Stockfish WASM brain initialized');
        return stockfishEngine;
    } catch (error) {
        console.error('Failed to initialize Stockfish:', error);
        engineInitializing = false;
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
// ULTRA FOCUS PLUS - POLLING ARCHITECTURE FOR VERCEL SERVERLESS
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════

/**
 * ULTRA FOCUS PLUS - Poll for challenges (non-blocking, serverless-compatible)
 * Uses Lichess API endpoint that returns immediately with pending challenges
 */
async function pollChallenges() {
    try {
        const response = await fetch('https://lichess.org/api/challenge', {
            headers: {
                'Authorization': `Bearer ${LICHESS_BOT_TOKEN}`,
                'Accept': 'application/json'
            }
        });
        
        if (!response.ok) {
            console.log(`⚠️ Challenge poll failed: ${response.status}`);
            return [];
        }
        
        const data = await response.json();
        const challenges = data.in || [];
        
        console.log(`📨 Found ${challenges.length} pending challenge(s)`);
        return challenges;
    } catch (error) {
        console.error('Challenge poll error:', error.message);
        stats.errors++;
        stats.lastError = error.message;
        return [];
    }
}

/**
 * ULTRA FOCUS PLUS - Poll for ongoing games (non-blocking, serverless-compatible)
 * Uses Lichess API endpoint that returns list of current games
 */
async function pollOngoingGames() {
    try {
        const response = await fetch('https://lichess.org/api/account/playing', {
            headers: {
                'Authorization': `Bearer ${LICHESS_BOT_TOKEN}`,
                'Accept': 'application/json'
            }
        });
        
        if (!response.ok) {
            console.log(`⚠️ Games poll failed: ${response.status}`);
            return [];
        }
        
        const data = await response.json();
        const games = data.nowPlaying || [];
        
        console.log(`🎮 Found ${games.length} ongoing game(s)`);
        return games;
    } catch (error) {
        console.error('Games poll error:', error.message);
        stats.errors++;
        stats.lastError = error.message;
        return [];
    }
}

/**
 * ULTRA FOCUS PLUS - Get full game state for a specific game
 * Uses single-request endpoint (not streaming)
 */
async function getGameState(gameId) {
    try {
        const response = await fetch(`https://lichess.org/api/bot/game/stream/${gameId}`, {
            headers: {
                'Authorization': `Bearer ${LICHESS_BOT_TOKEN}`,
                'Accept': 'application/x-ndjson'
            },
            signal: AbortSignal.timeout(8000) // 8 second timeout for game state
        });
        
        if (!response.ok) {
            console.log(`⚠️ Game state fetch failed for ${gameId}: ${response.status}`);
            return null;
        }
        
        // Read only the first line (gameFull event) then abort
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';
        let fullState = null;
        
        try {
            const { done, value } = await reader.read();
            if (!done && value) {
                buffer += decoder.decode(value, { stream: true });
                const lines = buffer.split('\n').filter(l => l.trim());
                
                for (const line of lines) {
                    try {
                        const event = JSON.parse(line);
                        if (event.type === 'gameFull') {
                            fullState = event;
                            break;
                        } else if (event.type === 'gameState') {
                            // If we get gameState first, it means game already started
                            fullState = { type: 'gameState', state: event };
                            break;
                        }
                    } catch (e) {
                        // Skip invalid JSON
                    }
                }
            }
        } finally {
            try {
                await reader.cancel();
            } catch (e) {
                // Ignore cancel errors
            }
        }
        
        return fullState;
    } catch (error) {
        if (error.name === 'TimeoutError' || error.name === 'AbortError') {
            console.log(`⏰ Game state timeout for ${gameId} - normal for quick poll`);
        } else {
            console.error(`Game state error for ${gameId}:`, error.message);
        }
        return null;
    }
}

/**
 * ULTRA FOCUS PLUS - Process a single game state and make move if needed
 */
async function processGameState(gameInfo) {
    const gameId = gameInfo.gameId;
    const isMyTurn = gameInfo.isMyTurn;
    const lastMove = gameInfo.lastMove || '';
    const fen = gameInfo.fen;
    const myColor = gameInfo.color;
    
    // Get or create game tracking data
    let gameData = activeGames.get(gameId);
    if (!gameData) {
        gameData = {
            myColor,
            moveNum: 0,
            lastFen: fen || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
            lastProcessedMove: '',
            initialFen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
            movesPlayed: 0
        };
        activeGames.set(gameId, gameData);
        resetGameState();
        
        // Send greeting for new game
        try {
            await lichess.chat(gameId, 'player', '🔱 AlphaZero ULTRA FOCUS PLUS v7.0 activated. THE ONE is ready to dominate.');
        } catch (e) {
            console.log('Chat greeting failed (normal for some game types)');
        }
    }
    
    // Update game data from poll
    if (fen) {
        gameData.lastFen = fen;
    }
    
    // Calculate move number from FEN if available
    if (fen) {
        const fenParts = fen.split(' ');
        if (fenParts.length >= 6) {
            const fullMoves = parseInt(fenParts[5]) || 1;
            const isWhiteTurn = fenParts[1] === 'w';
            gameData.moveNum = (fullMoves - 1) * 2 + (isWhiteTurn ? 0 : 1);
        }
    }
    
    // Check if we already processed this move state
    const moveKey = `${gameId}:${lastMove}:${fen}`;
    if (processedMoves.get(gameId) === moveKey) {
        console.log(`⏭️ Already processed state for game ${gameId}`);
        return { processed: false, reason: 'already_processed' };
    }
    
    // Handle draw offers - THE ONE never accepts
    if (gameInfo.opponent?.offeringDraw) {
        try {
            await lichess.handleDrawOffer(gameId, false);
            await lichess.chat(gameId, 'player', '🔱 THE ONE never accepts draws. Victory or death.');
        } catch (e) {
            console.log('Draw decline failed');
        }
    }
    
    // Only make move if it's our turn
    if (!isMyTurn) {
        console.log(`⏳ Waiting for opponent in game ${gameId}`);
        return { processed: true, reason: 'opponent_turn' };
    }
    
    // Make our move
    console.log(`⚔️ Our turn in game ${gameId}! FEN: ${fen.substring(0, 30)}...`);
    
    try {
        const timeLeft = myColor === 'white' ? 
            (gameInfo.secondsLeft || 60) * 1000 : 
            (gameInfo.secondsLeft || 60) * 1000;
        
        const bestMove = await calculateBestMove(
            gameData.lastFen,
            gameData.myColor,
            Math.floor(gameData.moveNum / 2) + 1,
            timeLeft
        );
        
        if (bestMove) {
            console.log(`🎯 THE ONE plays: ${bestMove}`);
            const moveSuccess = await lichess.makeMove(gameId, bestMove);
            
            if (moveSuccess) {
                // Update processed state
                processedMoves.set(gameId, moveKey);
                
                // Update local game state
                gameData.moveNum++;
                gameData.lastProcessedMove = bestMove;
                try {
                    const chess = new Chess(gameData.lastFen);
                    chess.move(bestMove, { sloppy: true });
                    gameData.lastFen = chess.fen();
                } catch (e) {
                    console.log('FEN update after move failed');
                }
                activeGames.set(gameId, gameData);
                
                stats.movesMade++;
                return { processed: true, move: bestMove, success: true };
            } else {
                console.log(`⚠️ Move ${bestMove} failed for game ${gameId}`);
                return { processed: true, move: bestMove, success: false };
            }
        } else {
            console.log(`⚠️ No valid move found for game ${gameId}`);
            return { processed: true, reason: 'no_move_found' };
        }
    } catch (error) {
        console.error(`Move error in game ${gameId}:`, error.message);
        stats.errors++;
        stats.lastError = error.message;
        return { processed: false, error: error.message };
    }
}

/**
 * ULTRA FOCUS PLUS - Main bot polling cycle
 * Designed for Vercel serverless: polls, processes, returns within timeout
 */
async function runBot(maxRuntime = 55000) {
    if (botRunning) {
        console.log('🔱 Bot already running in this instance, skipping...');
        return { status: 'already_running', pollCycle: pollCycleCount };
    }
    
    botRunning = true;
    const startTime = Date.now();
    pollCycleCount++;
    stats.totalPolls++;
    
    console.log('═══════════════════════════════════════════════════════════════════════════════════════════════════════════════');
    console.log(`🔱 AlphaZero ULTRA FOCUS PLUS v7.0.0 - POLLING CYCLE #${pollCycleCount} 🔱`);
    console.log('═══════════════════════════════════════════════════════════════════════════════════════════════════════════════');
    
    const result = {
        status: 'completed',
        pollCycle: pollCycleCount,
        challengesProcessed: 0,
        gamesProcessed: 0,
        movesMade: 0,
        errors: [],
        account: null
    };
    
    // Get account info
    try {
        const accountInfo = await lichess.getAccount();
        result.account = accountInfo.username;
        console.log(`🎯 Bot account: ${accountInfo.username}`);
    } catch (error) {
        console.error('Failed to get account info:', error.message);
        result.errors.push(`Account error: ${error.message}`);
    }
    
    // PHASE 1: Poll and accept challenges
    try {
        const challenges = await pollChallenges();
        
        for (const challenge of challenges) {
            // Skip if already processed
            if (processedChallenges.has(challenge.id)) {
                continue;
            }
            
            console.log(`⚔️ Accepting challenge from ${challenge.challenger?.name || 'unknown'}`);
            
            try {
                const accepted = await lichess.acceptChallenge(challenge.id);
                if (accepted) {
                    processedChallenges.add(challenge.id);
                    result.challengesProcessed++;
                    stats.challengesAccepted++;
                    console.log(`✅ Challenge ${challenge.id} accepted`);
                }
            } catch (e) {
                console.log(`⚠️ Failed to accept challenge ${challenge.id}: ${e.message}`);
                result.errors.push(`Challenge ${challenge.id}: ${e.message}`);
            }
            
            // Check runtime
            if (Date.now() - startTime > maxRuntime - 10000) {
                console.log('⏰ Runtime limit approaching during challenges');
                break;
            }
        }
    } catch (error) {
        console.error('Challenge processing error:', error.message);
        result.errors.push(`Challenges: ${error.message}`);
    }
    
    // PHASE 2: Poll and process ongoing games
    try {
        const games = await pollOngoingGames();
        
        for (const gameInfo of games) {
            // Check runtime before each game
            if (Date.now() - startTime > maxRuntime - 15000) {
                console.log('⏰ Runtime limit approaching, stopping game processing');
                break;
            }
            
            console.log(`🎮 Processing game ${gameInfo.gameId} vs ${gameInfo.opponent?.username || 'unknown'}`);
            
            try {
                const gameResult = await processGameState(gameInfo);
                result.gamesProcessed++;
                stats.gamesProcessed++;
                
                if (gameResult.move) {
                    result.movesMade++;
                    console.log(`✅ Move made: ${gameResult.move}`);
                }
            } catch (e) {
                console.error(`Game ${gameInfo.gameId} error:`, e.message);
                result.errors.push(`Game ${gameInfo.gameId}: ${e.message}`);
            }
        }
        
        // Clean up finished games from tracking
        const activeGameIds = new Set(games.map(g => g.gameId));
        for (const [gameId] of activeGames) {
            if (!activeGameIds.has(gameId)) {
                console.log(`🏁 Cleaning up finished game ${gameId}`);
                activeGames.delete(gameId);
                processedMoves.delete(gameId);
            }
        }
        
    } catch (error) {
        console.error('Game processing error:', error.message);
        result.errors.push(`Games: ${error.message}`);
    }
    
    // Clean up old processed challenges (keep last 100)
    if (processedChallenges.size > 100) {
        const toDelete = Array.from(processedChallenges).slice(0, processedChallenges.size - 50);
        toDelete.forEach(id => processedChallenges.delete(id));
    }
    
    lastEventTime = Date.now();
    lastPollTime = Date.now();
    botRunning = false;
    
    result.runtime = Date.now() - startTime;
    result.stats = { ...stats };
    
    console.log('═══════════════════════════════════════════════════════════════════════════════════════════════════════════════');
    console.log(`🔱 Poll cycle #${pollCycleCount} completed in ${result.runtime}ms`);
    console.log(`   Challenges: ${result.challengesProcessed}, Games: ${result.gamesProcessed}, Moves: ${result.movesMade}`);
    console.log('═══════════════════════════════════════════════════════════════════════════════════════════════════════════════');
    
    return result;
}

/**
 * LEGACY: Handle game stream for a specific game (kept for backward compatibility)
 * Note: For serverless, prefer polling via processGameState
 */
async function handleGameStream(gameId, myColor) {
    console.log(`⚠️ handleGameStream called - using polling instead for serverless compatibility`);
    
    // Get current game state via poll
    const gameState = await getGameState(gameId);
    if (gameState) {
        // Process as if it came from polling
        const gameInfo = {
            gameId,
            isMyTurn: true, // Will be determined from FEN
            lastMove: '',
            fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
            color: myColor
        };
        
        if (gameState.type === 'gameFull') {
            // Extract info from gameFull
            const isWhite = gameState.white?.id?.toLowerCase() === (await lichess.getAccount()).username?.toLowerCase();
            gameInfo.color = isWhite ? 'white' : 'black';
            gameInfo.fen = gameState.initialFen || gameInfo.fen;
            
            if (gameState.state?.moves) {
                const chess = new Chess(gameInfo.fen);
                const moves = gameState.state.moves.split(' ').filter(m => m);
                for (const move of moves) {
                    try {
                        chess.move(move, { sloppy: true });
                    } catch (e) {}
                }
                gameInfo.fen = chess.fen();
                gameInfo.lastMove = moves[moves.length - 1] || '';
            }
            
            const isWhiteTurn = gameInfo.fen.includes(' w ');
            gameInfo.isMyTurn = (isWhiteTurn && gameInfo.color === 'white') || 
                              (!isWhiteTurn && gameInfo.color === 'black');
        }
        
        await processGameState(gameInfo);
    }
}

// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════
// VERCEL SERVERLESS HANDLER - ULTRA FOCUS PLUS POLLING ARCHITECTURE
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════

export default async function handler(req, res) {
    const { method } = req;
    const url = req.url?.split('?')[0] || '/'; // Strip query params for routing
    
    // Health check endpoint
    if (url === '/' || url === '/health') {
        return res.status(200).json({
            status: 'online',
            name: 'AlphaZero ULTRA FOCUS PLUS',
            version: '7.0.0-POLLING-SERVERLESS',
            architecture: 'ULTRA FOCUS PLUS - Polling-based for Vercel Serverless',
            personality: 'THE ONE - Purest True AlphaZero God-like',
            botRunning,
            lastEventTime: new Date(lastEventTime).toISOString(),
            lastPollTime: new Date(lastPollTime).toISOString(),
            pollCycleCount,
            activeGames: activeGames.size,
            stats: {
                totalPolls: stats.totalPolls,
                gamesProcessed: stats.gamesProcessed,
                challengesAccepted: stats.challengesAccepted,
                movesMade: stats.movesMade,
                errors: stats.errors,
                lastError: stats.lastError,
                uptimeMs: Date.now() - stats.uptime
            },
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
            instructions: {
                primary: 'Set up cron-job.org to call GET /keepalive every 1 minute to keep bot online',
                alternative: 'Call POST /start manually to run a single poll cycle (~55 seconds max)',
                polling: 'This version uses polling instead of streaming for Vercel serverless compatibility'
            }
        });
    }
    
    // Start bot endpoint - THE MAIN KEEP-ALIVE MECHANISM
    if (url === '/start' && method === 'POST') {
        try {
            const result = await runBot(55000); // Run for up to 55 seconds
            return res.status(200).json({
                status: 'completed',
                message: '🔱 THE ONE poll cycle completed',
                ...result,
                nextAction: 'Call /start again or set up cron for /keepalive to keep bot online'
            });
        } catch (error) {
            stats.errors++;
            stats.lastError = error.message;
            return res.status(500).json({
                status: 'error',
                message: error.message
            });
        }
    }
    
    // Keep-alive endpoint for cron jobs (GET version of start)
    // This is the PRIMARY endpoint for cron-job.org
    if ((url === '/keepalive' || url === '/ping' || url === '/cron') && (method === 'GET' || method === 'POST')) {
        try {
            const result = await runBot(55000);
            return res.status(200).json({
                status: 'alive',
                message: '🔱 THE ONE remains vigilant - poll cycle completed',
                ...result,
                nextPoll: 'Call again in ~60 seconds via cron'
            });
        } catch (error) {
            stats.errors++;
            stats.lastError = error.message;
            return res.status(500).json({
                status: 'error',
                message: error.message
            });
        }
    }
    
    // Quick poll - faster, lighter version for frequent polling (15 second max)
    if (url === '/quickpoll' && (method === 'GET' || method === 'POST')) {
        try {
            const result = await runBot(15000);
            return res.status(200).json({
                status: 'completed',
                message: '🔱 Quick poll completed',
                ...result
            });
        } catch (error) {
            return res.status(500).json({
                status: 'error',
                message: error.message
            });
        }
    }
    
    // Status endpoint - lightweight health check without starting bot
    if (url === '/status' && method === 'GET') {
        return res.status(200).json({
            status: 'online',
            botRunning,
            pollCycleCount,
            activeGames: activeGames.size,
            lastPollTime: new Date(lastPollTime).toISOString(),
            timeSinceLastPoll: Date.now() - lastPollTime,
            stats: { ...stats, uptimeMs: Date.now() - stats.uptime }
        });
    }
    
    // Force poll challenges only
    if (url === '/challenges' && method === 'GET') {
        try {
            const challenges = await pollChallenges();
            return res.status(200).json({
                status: 'success',
                challenges,
                count: challenges.length
            });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    
    // Force poll games only
    if (url === '/games' && method === 'GET') {
        try {
            const games = await pollOngoingGames();
            return res.status(200).json({
                status: 'success',
                games,
                count: games.length,
                activeTracked: activeGames.size
            });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    
    // Webhook for game events (if using webhooks instead of polling)
    if (url === '/webhook' && method === 'POST') {
        try {
            const event = req.body;
            console.log('Webhook event:', event);
            
            if (event.type === 'challenge') {
                await lichess.acceptChallenge(event.challenge.id);
                stats.challengesAccepted++;
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
            
            stats.movesMade++;
            
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
    
    // Reset stats endpoint
    if (url === '/reset-stats' && method === 'POST') {
        stats.totalPolls = 0;
        stats.gamesProcessed = 0;
        stats.challengesAccepted = 0;
        stats.movesMade = 0;
        stats.errors = 0;
        stats.lastError = null;
        stats.uptime = Date.now();
        pollCycleCount = 0;
        
        return res.status(200).json({
            status: 'success',
            message: 'Stats reset',
            stats
        });
    }
    
    // Debug endpoint - show internal state
    if (url === '/debug' && method === 'GET') {
        return res.status(200).json({
            activeGames: Array.from(activeGames.entries()).map(([id, data]) => ({
                gameId: id,
                myColor: data.myColor,
                moveNum: data.moveNum,
                lastFen: data.lastFen?.substring(0, 40) + '...'
            })),
            processedChallenges: Array.from(processedChallenges).slice(-10),
            processedMovesCount: processedMoves.size,
            engineReady,
            stockfishLoaded: !!stockfishEngine,
            memoryUsage: process.memoryUsage?.() || 'N/A'
        });
    }
    
    // 404 for unknown routes
    return res.status(404).json({
        error: 'Not found',
        availableEndpoints: [
            'GET / - Health check & full status',
            'GET /status - Quick status check',
            'POST /start - Start a poll cycle (~55s)',
            'GET /keepalive - Keep-alive for cron jobs (primary endpoint)',
            'GET /ping - Alias for keepalive',
            'GET /cron - Alias for keepalive',
            'GET /quickpoll - Quick 15-second poll cycle',
            'GET /challenges - Poll challenges only',
            'GET /games - Poll ongoing games only',
            'POST /webhook - Webhook for Lichess events',
            'POST /move - Calculate best move',
            'GET /account - Get account info',
            'POST /upgrade - Upgrade to BOT account',
            'POST /reset-stats - Reset statistics',
            'GET /debug - Debug internal state'
        ],
        setup: {
            recommended: 'Use cron-job.org to call /keepalive every 1 minute',
            architecture: 'Polling-based (no streaming) for Vercel serverless compatibility',
            note: 'Each call processes pending challenges and makes moves in ongoing games'
        }
    });
}

// Start bot if running directly (not as serverless function)
if (typeof window === 'undefined' && process.argv[1]?.includes('index.js')) {
    runBot().catch(console.error);
}
