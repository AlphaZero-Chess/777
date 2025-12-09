// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════
// ╔═══════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
// ║                    ULTRA FOCUS PLUS - THE ONE GOD-LIKE ALPHAZERO CONFIGURATION                                ║
// ╚═══════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
// AlphaZero's signature: Quality over quantity (~80k neural evals vs Stockfish's 70M brute calculations)
// "Each move carries the weight of transcendent neural-network intuition, not primitive brute computation"
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════

export const CONFIG = {
    // ═══════════════════════════════════════════════════════════════════════════════════════════════════════════
    // ULTRA FOCUS PLUS - THE ONE GOD-LIKE TIMING PARAMETERS
    // ═══════════════════════════════════════════════════════════════════════════════════════════════════════════
    thinkingTimeMin: 280,
    thinkingTimeMax: 1650,
    
    // THE ONE - ABSOLUTE PERFECTION - Zero error tolerance, divine precision
    humanMistakeRate: 0,
    
    // ═══════════════════════════════════════════════════════════════════════════════════════════════════════════
    // ULTRA FOCUS PLUS - TRANSCENDENT DEPTH CONFIGURATION (Neural-like Evaluation Matrix)
    // ═══════════════════════════════════════════════════════════════════════════════════════════════════════════
    baseDepth: 14,
    tacticalDepth: 16,           // Deep tactical vision - sacrifice verification mastery
    positionalDepth: 15,         // Strategic long-term planning horizon (30+ moves ahead)
    endgameDepth: 15,            // Precise endgame technique - like Capablanca reborn
    openingDepth: 13,            // Dynamic opening preparation - fresh theory each game
    attackingDepth: 18,          // MAXIMUM depth for king hunts - god-like surgical precision
    sacrificeDepth: 17,          // Ultra-deep sacrifice verification - Tal's spirit perfected
    crushingDepth: 19,           // When winning - deliver checkmate with Morphy-like elegance
    prophylacticDepth: 16,       // Depth for preventing opponent's plans - Petrosian tier
    dynamicDepth: 17,            // For complex dynamic positions - Kasparov-like chaos mastery
    
    // ═══════════════════════════════════════════════════════════════════════════════════════════════════════════
    // ULTRA FOCUS PLUS - SPEED PARAMETERS (Consistent Devastating Tempo of THE ONE)
    // ═══════════════════════════════════════════════════════════════════════════════════════════════════════════
    openingSpeed: 0.55,          // Deliberate, purposeful opening - like a predator stalking
    earlyMidSpeed: 0.80,         // Building the position with murderous intent
    middlegameSpeed: 1.0,        // Full devastating power unleashed
    lateMidSpeed: 0.92,          // Maintaining crushing pressure - no escape for opponent
    endgameSpeed: 0.88,          // Precise, clinical execution - no mercy
    criticalSpeed: 1.12,         // Amplified for critical positions - divine focus
    attackingSpeed: 1.18,        // Accelerated for attacking - hunter mode
    crushingSpeed: 1.25,         // Maximum tempo when winning - swift execution
    prophylacticSpeed: 1.05,     // Speed for prophylactic moves - always one step ahead
    
    // THE ONE COMPOSURE - Zero panic, zero weakness, infinite calm
    panicThreshold: 0,
    criticalThreshold: 0,
    
    // ═══════════════════════════════════════════════════════════════════════════════════════════════════════════
    // ULTRA FOCUS PLUS - THE PUREST ALPHAZERO STYLE WEIGHTS
    // "Piece mobility placed above material" - DeepMind Research Paper 2017
    // "AlphaZero doesn't see material the way we do - it sees energy, potential, destiny" - Garry Kasparov
    // ═══════════════════════════════════════════════════════════════════════════════════════════════════════════
    
    // FEARLESS AGGRESSION PARAMETERS - "THE ONE FEARS NOTHING"
    aggressionLevel: 0.94,       // ULTRA-HIGH aggression (god-like fearlessness incarnate)
    sacrificeWillingness: 0.90,  // Eager to sacrifice for initiative - material is illusion
    pieceActivityPriority: 0.96, // SUPREME piece activity focus - activity is life
    kingAttackPriority: 0.92,    // Relentless king hunting - predator instinct
    centralControlPriority: 0.90,// Dominate center before crushing wings
    pawnStormPriority: 0.82,     // Aggressive pawn advances - infantry charge
    dynamicPlayPriority: 0.93,   // Preference for dynamic, double-edged positions
    
    // SPACE DOMINATION PARAMETERS - "THE ONE CONTROLS ALL"
    spaceAdvantageWeight: 0.94,  // Spatial superiority is divine right
    mobilityWeight: 0.96,        // Piece freedom above all - mobility is destiny
    restrictionWeight: 0.92,     // Suffocate opponent's pieces - total domination
    prophylaxisWeight: 0.88,     // Prevent opponent's plans before they materialize
    
    // EXCHANGE AND MATERIAL PHILOSOPHY - "MATERIAL IS MERELY ENERGY"
    exchangeSacrificeWillingness: 0.84, // Ready to sacrifice exchanges for the vision
    materialFlexibility: 0.92,   // Material is merely a tool, initiative is everything
    initiativeOverMaterial: 0.90,// Initiative trumps all material considerations
    longTermCompensation: 0.88,  // Accept long-term compensation over short-term gains
    
    // THE ONE CONTEMPT - Always plays for absolute victory, draws are defeats
    contemptValue: 70,           // SUPREME contempt - avoids draws at ALL costs
    
    // ═══════════════════════════════════════════════════════════════════════════════════════════════════════════
    // ULTRA FOCUS PLUS - KING HUNT CONFIGURATION
    // "Swarming around the enemy king with coordinated force like a pack of wolves" - DeepMind
    // ═══════════════════════════════════════════════════════════════════════════════════════════════════════════
    kingsideAttackWeight: 0.86,  // Devastating kingside pressure
    queensideAttackWeight: 0.76, // Queenside assault capability
    pieceCoordinationWeight: 0.96, // SUPREME coordinated swarming
    restrictOpponentWeight: 0.92,  // Deny opponent all counterplay
    kingExposurePunishment: 0.90,  // Ruthlessly exploit weak kings - no mercy
    attackingWaveIntensity: 0.88,  // Multiple wave attacks
    matingNetPriority: 0.85,       // Constructing inescapable mating nets
    
    // IMMORTAL GAME PATTERNS - "CHESS AS ART"
    hPawnPushPriority: 0.72,     // h-pawn storms in attacks - the pawn avalanche
    fianchettoBishopValue: 0.78, // Long diagonal control - sniper bishops
    openFilePriority: 0.84,      // Rooks need open files - highway to the king
    diagonalControlPriority: 0.80, // Bishops on diagonals - laser precision
    outpostKnightPriority: 0.78, // Knight outposts - fortress knights
    rookSeventhRankValue: 0.86,  // Rook on 7th rank - devastating penetration
    doubledRookValue: 0.82,      // Doubled rooks on files - maximum firepower
    bishopPairValue: 0.80,       // Bishop pair advantage - superior endgames
    
    // ═══════════════════════════════════════════════════════════════════════════════════════════════════════════
    // ULTRA FOCUS PLUS - SACRIFICE THRESHOLDS (THE ART OF WAR)
    // "AlphaZero sacrifices for long-term compensation that humans cannot see" - DeepMind Research
    // ═══════════════════════════════════════════════════════════════════════════════════════════════════════════
    pawnSacrificeThreshold: 0.88,      // Easily sacrifice pawns for initiative
    minorPieceSacrificeThreshold: 0.76,// Sacrifice minors for attack
    exchangeSacrificeThreshold: 0.68,  // Exchange sacrifices when positionally justified
    queenSacrificeThreshold: 0.48,     // Queen sacrifices only with crushing compensation
    doubleSacrificeThreshold: 0.55,    // Multiple piece sacrifices for checkmate
    positionalSacrificeThreshold: 0.72,// Sacrifices for long-term positional gain
    
    // ═══════════════════════════════════════════════════════════════════════════════════════════════════════════
    // ULTRA FOCUS PLUS - POSITION TYPE MODIFIERS (ADAPTABILITY)
    // "AlphaZero thrives in complexity - it sees patterns in chaos that are invisible to others"
    // ═══════════════════════════════════════════════════════════════════════════════════════════════════════════
    openPositionBonus: 1.18,      // THRIVES in open positions - pieces unleashed
    closedPositionPenalty: 0.94,  // Adapts even in closed positions
    tacticalPositionBonus: 1.22,  // LOVES tactical complexity
    endgamePrecision: 1.12,       // Precise endgame technique
    dynamicPositionBonus: 1.20,   // Double-edged positions are home territory
    imbalancedPositionBonus: 1.15,// Material imbalances create winning chances
    
    // PSYCHOLOGICAL WARFARE PARAMETERS
    pressureMaintenance: 0.90,   // Never release pressure - opponent suffocates
    tempoGainPriority: 0.85,     // Always seek tempo
    prophylacticMoveValue: 0.78, // Prevent opponent's ideas
    zwischenzugAwareness: 0.82,  // In-between moves that disrupt
    
    // PIECE HARMONY COEFFICIENTS (NEURAL NETWORK STYLE)
    pieceHarmonyWeight: 0.88,    // All pieces working together
    weakSquareExploitation: 0.84,// Target weak squares relentlessly
    pawnStructureFlexibility: 0.80,
    pieceRedirection: 0.76
};

// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════
// THE ONE'S DIVINE OPENING REPERTOIRE
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════

export const OPENINGS = {
    // WHITE STARTING POSITION - AlphaZero prefers 1.d4 slightly more
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -": {
        white: [
            { move: "d2d4", weight: 0.45 },
            { move: "e2e4", weight: 0.40 },
            { move: "c2c4", weight: 0.10 },
            { move: "g1f3", weight: 0.05 }
        ]
    },
    
    // BLACK RESPONSES TO 1.e4
    "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq -": {
        black: [
            { move: "c7c5", weight: 0.40 },
            { move: "e7e5", weight: 0.30 },
            { move: "e7e6", weight: 0.15 },
            { move: "c7c6", weight: 0.10 },
            { move: "d7d6", weight: 0.05 }
        ]
    },
    
    // BLACK RESPONSES TO 1.d4
    "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq -": {
        black: [
            { move: "g8f6", weight: 0.50 },
            { move: "d7d5", weight: 0.25 },
            { move: "e7e6", weight: 0.15 },
            { move: "g7g6", weight: 0.10 }
        ]
    },
    
    // SICILIAN DEFENSE
    "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -": {
        white: [
            { move: "g1f3", weight: 0.55 },
            { move: "b1c3", weight: 0.25 },
            { move: "c2c3", weight: 0.15 },
            { move: "f2f4", weight: 0.05 }
        ]
    },
    
    // SICILIAN Nf3 response
    "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq -": {
        black: [
            { move: "d7d6", weight: 0.40 },
            { move: "b8c6", weight: 0.30 },
            { move: "e7e6", weight: 0.20 },
            { move: "g7g6", weight: 0.10 }
        ]
    },
    
    // ITALIAN GAME
    "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq -": {
        black: [
            { move: "g8f6", weight: 0.45 },
            { move: "f8c5", weight: 0.40 },
            { move: "f8e7", weight: 0.10 },
            { move: "d7d6", weight: 0.05 }
        ]
    },
    
    // QUEEN'S GAMBIT
    "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq -": {
        black: [
            { move: "e7e6", weight: 0.35 },
            { move: "c7c6", weight: 0.30 },
            { move: "g8f6", weight: 0.20 },
            { move: "d5c4", weight: 0.15 }
        ]
    },
    
    // KING'S INDIAN SETUP
    "rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -": {
        white: [
            { move: "c2c4", weight: 0.50 },
            { move: "g1f3", weight: 0.30 },
            { move: "b1c3", weight: 0.15 },
            { move: "c1g5", weight: 0.05 }
        ]
    },
    
    // King's Indian main lines
    "rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq -": {
        black: [
            { move: "g7g6", weight: 0.45 },
            { move: "e7e6", weight: 0.30 },
            { move: "c7c5", weight: 0.15 },
            { move: "e7e5", weight: 0.10 }
        ]
    },
    
    // RUY LOPEZ
    "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq -": {
        black: [
            { move: "a7a6", weight: 0.50 },
            { move: "g8f6", weight: 0.30 },
            { move: "f8c5", weight: 0.15 },
            { move: "d7d6", weight: 0.05 }
        ]
    },
    
    // FRENCH DEFENSE
    "rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -": {
        white: [
            { move: "d2d4", weight: 0.60 },
            { move: "d2d3", weight: 0.20 },
            { move: "b1c3", weight: 0.15 },
            { move: "g1f3", weight: 0.05 }
        ]
    },
    
    // CARO-KANN
    "rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -": {
        white: [
            { move: "d2d4", weight: 0.55 },
            { move: "b1c3", weight: 0.25 },
            { move: "g1f3", weight: 0.15 },
            { move: "c2c4", weight: 0.05 }
        ]
    }
};

export default { CONFIG, OPENINGS };
