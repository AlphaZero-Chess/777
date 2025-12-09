// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════
// ╔═══════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
// ║              ULTRA FOCUS PLUS - STOCKFISH WASM ENGINE - THE ONE'S BRAIN                                    ║
// ╚═══════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
// Uses Stockfish.js WASM for move generation with AlphaZero personality modulation
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════

import { CONFIG, OPENINGS } from './alphazero-config.js';

// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════
// THE ONE'S TRANSCENDENT STATE TRACKING
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════

let gameState = {
    attackingMode: false,
    crushingMode: false,
    matingAttackMode: false,
    kingsidePressure: 0,
    queensidePressure: 0,
    attackingPiecesCount: 0,
    attackWaveNumber: 0,
    centralControl: 0,
    pieceActivity: 0,
    spaceAdvantage: 0,
    mobilityScore: 0,
    coordinationScore: 0,
    pawnStructureScore: 0,
    kingDangerScore: 0,
    ownKingSafety: 100,
    enemyKingExposed: false,
    sacrificeOpportunity: false,
    positionAdvantage: 0,
    lastEvaluation: 0,
    initiativeScore: 50,
    tempoAdvantage: 0,
    threatLevel: 0,
    prophylacticNeeded: false,
    opponentCounterplay: 0,
    gameComplexity: 50,
    positionSharpness: 50,
    materialImbalance: false,
    dynamicTension: 0,
    isIntiativeCritical: false
};

// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS - THE ONE'S PERCEPTION
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════

/**
 * THE ONE - Fast piece counting (ultra-optimized)
 */
function countPieces(fen) {
    let count = 0;
    const board = fen.split(' ')[0];
    for (let i = 0; i < board.length; i++) {
        const char = board[i];
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            count++;
        }
    }
    return count;
}

/**
 * THE ONE - Count specific piece types
 */
function countPieceTypes(fen) {
    const board = fen.split(' ')[0];
    let counts = {
        whiteQueens: 0, blackQueens: 0,
        whiteRooks: 0, blackRooks: 0,
        whiteBishops: 0, blackBishops: 0,
        whiteKnights: 0, blackKnights: 0,
        whitePawns: 0, blackPawns: 0
    };
    
    for (let i = 0; i < board.length; i++) {
        const char = board[i];
        switch(char) {
            case 'Q': counts.whiteQueens++; break;
            case 'q': counts.blackQueens++; break;
            case 'R': counts.whiteRooks++; break;
            case 'r': counts.blackRooks++; break;
            case 'B': counts.whiteBishops++; break;
            case 'b': counts.blackBishops++; break;
            case 'N': counts.whiteKnights++; break;
            case 'n': counts.blackKnights++; break;
            case 'P': counts.whitePawns++; break;
            case 'p': counts.blackPawns++; break;
        }
    }
    return counts;
}

/**
 * THE ONE - Enhanced game phase detection
 */
function getGamePhase(moveNum, fen) {
    const pieces = countPieces(fen);
    const pieceCounts = countPieceTypes(fen);
    
    const totalQueens = pieceCounts.whiteQueens + pieceCounts.blackQueens;
    const totalRooks = pieceCounts.whiteRooks + pieceCounts.blackRooks;
    const totalMinors = pieceCounts.whiteBishops + pieceCounts.blackBishops + 
                       pieceCounts.whiteKnights + pieceCounts.blackKnights;
    
    if (moveNum <= 5) {
        gameState.gameComplexity = 30;
        return "early-opening";
    }
    
    if (moveNum <= 10 && pieces > 28) {
        gameState.gameComplexity = 40;
        return "opening";
    }
    
    if (moveNum <= 16 && pieces > 26) {
        gameState.gameComplexity = 60;
        gameState.positionSharpness = 50;
        return "early-middlegame";
    }
    
    if (pieces > 22) {
        gameState.gameComplexity = 85;
        gameState.positionSharpness = 70;
        return "middlegame";
    }
    
    if (pieces > 14) {
        gameState.gameComplexity = 70;
        gameState.positionSharpness = 60;
        return "late-middlegame";
    }
    
    if (totalQueens >= 1 && totalRooks <= 1 && totalMinors <= 1 && pieces <= 12) {
        gameState.gameComplexity = 65;
        return "queen-endgame";
    }
    
    if (totalQueens === 0 && totalRooks === 0 && totalMinors <= 2) {
        gameState.gameComplexity = 45;
        return "pure-endgame";
    }
    
    if (totalQueens === 0 && pieces <= 10) {
        gameState.gameComplexity = 50;
        return "technical-endgame";
    }
    
    gameState.gameComplexity = 55;
    return "endgame";
}

/**
 * THE ONE - Analyze position type
 */
function analyzePositionType(fen) {
    const board = fen.split(' ')[0];
    const pieceCounts = countPieceTypes(fen);
    const rows = board.split('/');
    
    let openFiles = 0;
    let semiOpenFiles = 0;
    
    // Check for check
    if (fen.indexOf("+") !== -1) {
        gameState.sacrificeOpportunity = true;
        gameState.positionSharpness = 95;
        gameState.threatLevel = 90;
        return "tactical";
    }
    
    // Analyze file structure
    for (let file = 0; file < 8; file++) {
        let whitePawn = false;
        let blackPawn = false;
        for (let rank = 0; rank < 8; rank++) {
            let col = 0;
            for (let i = 0; i < rows[rank].length && col <= file; i++) {
                const char = rows[rank][i];
                if (char >= '1' && char <= '8') {
                    col += parseInt(char);
                } else {
                    if (col === file) {
                        if (char === 'P') whitePawn = true;
                        if (char === 'p') blackPawn = true;
                    }
                    col++;
                }
            }
        }
        if (!whitePawn && !blackPawn) openFiles++;
        if ((whitePawn && !blackPawn) || (!whitePawn && blackPawn)) semiOpenFiles++;
    }
    
    gameState.spaceAdvantage = (openFiles + semiOpenFiles * 0.6) * CONFIG.spaceAdvantageWeight;
    
    if (openFiles >= 3 || (openFiles >= 2 && semiOpenFiles >= 2)) {
        gameState.attackingMode = true;
        gameState.mobilityScore = 92;
        gameState.positionSharpness = 80;
        return "attacking";
    }
    
    if (gameState.lastEvaluation > 320) {
        gameState.crushingMode = true;
        gameState.isIntiativeCritical = false;
        return "crushing";
    }
    
    if (gameState.kingDangerScore > 65 && gameState.attackingPiecesCount >= 3) {
        gameState.matingAttackMode = true;
        gameState.positionSharpness = 100;
        return "mating-attack";
    }
    
    const totalMinors = pieceCounts.whiteBishops + pieceCounts.blackBishops + 
                       pieceCounts.whiteKnights + pieceCounts.blackKnights;
    const totalMajors = pieceCounts.whiteQueens + pieceCounts.blackQueens + 
                       pieceCounts.whiteRooks + pieceCounts.blackRooks;
    
    if (totalMinors >= 6 && totalMajors >= 4) {
        gameState.coordinationScore = 88;
        gameState.gameComplexity = 90;
        return "complex";
    }
    
    if (gameState.dynamicTension > 60 || (openFiles >= 1 && totalMajors >= 3)) {
        gameState.dynamicTension = 75;
        gameState.positionSharpness = 70;
        return "dynamic";
    }
    
    if (openFiles >= 2 && totalMajors >= 3) {
        gameState.sacrificeOpportunity = Math.random() < CONFIG.sacrificeWillingness;
    }
    
    if (openFiles <= 1 && semiOpenFiles <= 2) {
        gameState.positionSharpness = 35;
        gameState.gameComplexity = 55;
        return "positional";
    }
    
    if (Math.random() < CONFIG.aggressionLevel * 0.20) {
        gameState.positionSharpness = 65;
        return "tactical";
    }
    
    return "normal";
}

/**
 * THE ONE - Get transcendent depth
 */
function getDepth(phase, posType, timeLeft) {
    let depth = CONFIG.baseDepth;
    
    switch(phase) {
        case "early-opening":
            depth = CONFIG.openingDepth - 1;
            break;
        case "opening":
            depth = CONFIG.openingDepth;
            break;
        case "early-middlegame":
            depth = CONFIG.baseDepth;
            break;
        case "middlegame":
            if (posType === "tactical" || posType === "attacking") {
                depth = CONFIG.tacticalDepth;
            } else if (posType === "positional") {
                depth = CONFIG.positionalDepth;
            } else if (posType === "complex" || posType === "dynamic") {
                depth = CONFIG.dynamicDepth;
            } else if (posType === "crushing" || posType === "mating-attack") {
                depth = CONFIG.crushingDepth;
            } else {
                depth = CONFIG.baseDepth;
            }
            break;
        case "late-middlegame":
            depth = posType === "tactical" ? CONFIG.tacticalDepth : CONFIG.positionalDepth;
            break;
        case "queen-endgame":
            depth = CONFIG.tacticalDepth;
            break;
        case "endgame":
        case "technical-endgame":
            depth = CONFIG.endgameDepth;
            break;
        case "pure-endgame":
            depth = CONFIG.endgameDepth + 3;
            break;
    }
    
    if (gameState.attackingMode && (posType === "attacking" || posType === "tactical" || posType === "mating-attack")) {
        depth = Math.max(depth, CONFIG.attackingDepth);
    }
    
    if (gameState.crushingMode || gameState.matingAttackMode) {
        depth = Math.max(depth, CONFIG.crushingDepth);
    }
    
    if (gameState.sacrificeOpportunity && posType !== "positional") {
        depth = Math.max(depth, CONFIG.sacrificeDepth);
    }
    
    if (gameState.kingDangerScore > 45) {
        depth = Math.max(depth, CONFIG.attackingDepth - 1);
    }
    
    if (gameState.enemyKingExposed && gameState.attackingPiecesCount >= 2) {
        depth = Math.max(depth, CONFIG.attackingDepth);
    }
    
    if (gameState.ownKingSafety < 40 && !gameState.attackingMode) {
        depth = Math.max(depth, CONFIG.prophylacticDepth);
    }
    
    if (gameState.gameComplexity > 80) {
        depth = Math.max(depth, CONFIG.dynamicDepth);
    }
    
    // Time management - THE ONE'S COMPOSURE
    if (timeLeft && timeLeft < 2000) {
        depth = Math.max(10, depth - 3);
    } else if (timeLeft && timeLeft < 3500) {
        depth = Math.max(11, depth - 2);
    } else if (timeLeft && timeLeft < 5500) {
        depth = Math.max(12, depth - 1);
    }
    
    return Math.min(depth, 20); // Cap for serverless timeout
}

/**
 * THE ONE - Opening book selection
 */
function getBookMove(fen, myColor) {
    // Normalize FEN for lookup
    const fenParts = fen.split(' ');
    const fenKey = fenParts.slice(0, 4).join(' ');
    
    // Try exact match first
    let position = OPENINGS[fenKey];
    
    // Try without en passant and castling for broader matches
    if (!position) {
        const simpleFen = fenParts[0] + ' ' + fenParts[1];
        for (const key of Object.keys(OPENINGS)) {
            if (key.startsWith(simpleFen)) {
                position = OPENINGS[key];
                break;
            }
        }
    }
    
    if (!position) return null;
    
    const moves = myColor === 'white' ? position.white : position.black;
    if (!moves || moves.length === 0) return null;
    
    // THE ONE - Transcendent opening selection
    const adjustedMoves = moves.map(m => {
        let weight = m.weight;
        
        if (m.move.includes('e4') || m.move.includes('d4')) {
            weight *= (1 + CONFIG.aggressionLevel * 0.14);
        }
        if (m.move.includes('c5') || m.move.includes('f6')) {
            weight *= (1 + CONFIG.aggressionLevel * 0.12);
        }
        if (m.move.includes('g6') || m.move.includes('g3')) {
            weight *= (1 + CONFIG.fianchettoBishopValue * 0.10);
        }
        if (m.move.includes('c5')) {
            weight *= 1.08;
        }
        if (m.move.includes('e5') || m.move.includes('d5')) {
            weight *= (1 + CONFIG.centralControlPriority * 0.08);
        }
        if (m.move.includes('f6') || m.move.includes('f3')) {
            weight *= (1 + CONFIG.dynamicPlayPriority * 0.06);
        }
        
        return { ...m, weight };
    });
    
    const totalWeight = adjustedMoves.reduce((sum, m) => sum + m.weight, 0);
    let random = Math.random() * totalWeight;
    
    for (let moveOption of adjustedMoves) {
        random -= moveOption.weight;
        if (random <= 0) return moveOption.move;
    }
    
    return moves[0].move;
}

/**
 * THE ONE - Parse multi-PV output
 */
function parseEngineOutput(output) {
    const lines = output.split('\n');
    const pvLines = [];
    let bestMove = null;
    
    for (const line of lines) {
        if (line.startsWith('bestmove')) {
            const parts = line.split(' ');
            bestMove = parts[1];
        } else if (line.includes('multipv') || line.includes(' pv ')) {
            const pvMatch = line.match(/pv\s+(\w+)/);
            const scoreMatch = line.match(/score\s+cp\s+(-?\d+)/);
            const mateMatch = line.match(/score\s+mate\s+(-?\d+)/);
            const depthMatch = line.match(/depth\s+(\d+)/);
            
            if (pvMatch) {
                let score = 0;
                let isMate = false;
                let mateIn = 0;
                
                if (mateMatch) {
                    mateIn = parseInt(mateMatch[1]);
                    score = mateIn > 0 ? 10000 - mateIn : -10000 + Math.abs(mateIn);
                    isMate = true;
                } else if (scoreMatch) {
                    score = parseInt(scoreMatch[1]);
                }
                
                pvLines.push({
                    move: pvMatch[1],
                    score,
                    isMate,
                    mateIn,
                    depth: depthMatch ? parseInt(depthMatch[1]) : 0
                });
            }
        }
    }
    
    // Update game state based on evaluation
    if (pvLines.length > 0) {
        gameState.lastEvaluation = pvLines[0].score;
        gameState.positionAdvantage = pvLines[0].score;
        
        if (gameState.lastEvaluation > 380) {
            gameState.crushingMode = true;
            gameState.attackingMode = true;
        } else if (gameState.lastEvaluation > 250) {
            gameState.crushingMode = false;
            gameState.attackingMode = true;
        } else if (gameState.lastEvaluation < 180) {
            gameState.crushingMode = false;
        }
        
        if (pvLines[0].isMate && pvLines[0].mateIn > 0 && pvLines[0].mateIn <= 10) {
            gameState.matingAttackMode = true;
            gameState.attackingMode = true;
        } else {
            gameState.matingAttackMode = false;
        }
    }
    
    return {
        bestMove: bestMove || (pvLines.length > 0 ? pvLines[0].move : null),
        pvLines: pvLines.sort((a, b) => b.score - a.score)
    };
}

/**
 * THE ONE - AlphaZero style move selection
 */
function applyAlphaZeroSelection(bestMove, alternatives, myColor, fen) {
    if (!alternatives || alternatives.length < 2) return bestMove;
    
    const best = alternatives[0];
    const second = alternatives[1];
    
    const scoreDiff = Math.abs((best.score || 0) - (second.score || 0));
    
    // Only consider alternatives within 15 centipawns
    if (scoreDiff < 15) {
        // Prefer center control in equal positions
        const secondTarget = second.move ? second.move.substring(2, 4) : '';
        const bestTarget = best.move ? best.move.substring(2, 4) : '';
        
        if (isCentralMove(secondTarget) && !isCentralMove(bestTarget) && 
            Math.random() < CONFIG.centralControlPriority) {
            gameState.centralControl += 5;
            return second.move;
        }
        
        // Prefer piece activity moves
        if (isActivityMove(second.move, myColor) && Math.random() < CONFIG.pieceActivityPriority * 0.55) {
            gameState.pieceActivity += 5;
            return second.move;
        }
        
        // Prefer aggressive pawn advances when attacking
        if (gameState.attackingMode && isPawnAdvance(second.move, myColor) && 
            Math.random() < CONFIG.pawnStormPriority) {
            return second.move;
        }
    }
    
    return bestMove;
}

function isCentralMove(targetSquare) {
    if (!targetSquare || targetSquare.length < 2) return false;
    const file = targetSquare[0];
    const rank = targetSquare[1];
    return (file >= 'c' && file <= 'f') && (rank >= '3' && rank <= '6');
}

function isActivityMove(move, myColor) {
    if (!move || move.length < 4) return false;
    const targetRank = parseInt(move[3]);
    const sourceRank = parseInt(move[1]);
    
    if (myColor === 'white') {
        return targetRank > sourceRank;
    } else {
        return targetRank < sourceRank;
    }
}

function isPawnAdvance(move, myColor) {
    if (!move || move.length < 4) return false;
    const targetRank = parseInt(move[3]);
    const sourceRank = parseInt(move[1]);
    
    return move[0] === move[2] && 
           ((myColor === 'white' && targetRank > sourceRank) || 
            (myColor === 'black' && targetRank < sourceRank));
}

/**
 * Reset game state for new game
 */
function resetGameState() {
    gameState = {
        attackingMode: false,
        crushingMode: false,
        matingAttackMode: false,
        kingsidePressure: 0,
        queensidePressure: 0,
        attackingPiecesCount: 0,
        attackWaveNumber: 0,
        centralControl: 0,
        pieceActivity: 0,
        spaceAdvantage: 0,
        mobilityScore: 0,
        coordinationScore: 0,
        pawnStructureScore: 0,
        kingDangerScore: 0,
        ownKingSafety: 100,
        enemyKingExposed: false,
        sacrificeOpportunity: false,
        positionAdvantage: 0,
        lastEvaluation: 0,
        initiativeScore: 50,
        tempoAdvantage: 0,
        threatLevel: 0,
        prophylacticNeeded: false,
        opponentCounterplay: 0,
        gameComplexity: 50,
        positionSharpness: 50,
        materialImbalance: false,
        dynamicTension: 0,
        isIntiativeCritical: false
    };
}

export {
    gameState,
    resetGameState,
    countPieces,
    countPieceTypes,
    getGamePhase,
    analyzePositionType,
    getDepth,
    getBookMove,
    parseEngineOutput,
    applyAlphaZeroSelection
};

export default {
    gameState,
    resetGameState,
    getGamePhase,
    analyzePositionType,
    getDepth,
    getBookMove,
    parseEngineOutput,
    applyAlphaZeroSelection
};
