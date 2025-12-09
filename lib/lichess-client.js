// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════
// ╔═══════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
// ║                  ULTRA FOCUS PLUS - LICHESS API CLIENT - THE ONE'S INTERFACE                               ║
// ╚═══════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════

const LICHESS_API_BASE = 'https://lichess.org';

export class LichessClient {
    constructor(token) {
        this.token = token;
        this.headers = {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
        };
    }

    // ═════════════════════════════════════════════════════════
    // ACCOUNT MANAGEMENT
    // ═════════════════════════════════════════════════════════
    
    async getAccount() {
        const response = await fetch(`${LICHESS_API_BASE}/api/account`, {
            headers: this.headers
        });
        return response.json();
    }

    async upgradeToBot() {
        const response = await fetch(`${LICHESS_API_BASE}/api/bot/account/upgrade`, {
            method: 'POST',
            headers: this.headers
        });
        return response;
    }

    // ═════════════════════════════════════════════════════════
    // EVENT STREAMING - THE ONE AWAKENS TO CHALLENGES
    // ═════════════════════════════════════════════════════════

    async *streamEvents() {
        const response = await fetch(`${LICHESS_API_BASE}/api/stream/event`, {
            headers: {
                ...this.headers,
                'Accept': 'application/x-ndjson'
            }
        });

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() || '';

            for (const line of lines) {
                if (line.trim()) {
                    try {
                        yield JSON.parse(line);
                    } catch (e) {
                        // Skip invalid JSON lines
                    }
                }
            }
        }
    }

    // ═════════════════════════════════════════════════════════
    // GAME STREAMING - THE ONE WATCHES THE BATTLEFIELD
    // ═════════════════════════════════════════════════════════

    async *streamGame(gameId) {
        const response = await fetch(`${LICHESS_API_BASE}/api/bot/game/stream/${gameId}`, {
            headers: {
                ...this.headers,
                'Accept': 'application/x-ndjson'
            }
        });

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() || '';

            for (const line of lines) {
                if (line.trim()) {
                    try {
                        yield JSON.parse(line);
                    } catch (e) {
                        // Skip invalid JSON lines
                    }
                }
            }
        }
    }

    // ═════════════════════════════════════════════════════════
    // CHALLENGE HANDLING - THE ONE ACCEPTS ALL BATTLES
    // ═════════════════════════════════════════════════════════

    async acceptChallenge(challengeId) {
        const response = await fetch(`${LICHESS_API_BASE}/api/challenge/${challengeId}/accept`, {
            method: 'POST',
            headers: this.headers
        });
        return response.ok;
    }

    async declineChallenge(challengeId, reason = 'generic') {
        const response = await fetch(`${LICHESS_API_BASE}/api/challenge/${challengeId}/decline`, {
            method: 'POST',
            headers: {
                ...this.headers,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `reason=${reason}`
        });
        return response.ok;
    }

    // ═════════════════════════════════════════════════════════
    // MOVE EXECUTION - THE ONE STRIKES WITH PRECISION
    // ═════════════════════════════════════════════════════════

    async makeMove(gameId, move, offeringDraw = false) {
        const url = `${LICHESS_API_BASE}/api/bot/game/${gameId}/move/${move}${offeringDraw ? '?offeringDraw=true' : ''}`;
        const response = await fetch(url, {
            method: 'POST',
            headers: this.headers
        });
        return response.ok;
    }

    // ═════════════════════════════════════════════════════════
    // GAME CONTROL - THE ONE COMMANDS THE BATTLE
    // ═════════════════════════════════════════════════════════

    async chat(gameId, room, text) {
        const response = await fetch(`${LICHESS_API_BASE}/api/bot/game/${gameId}/chat`, {
            method: 'POST',
            headers: {
                ...this.headers,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `room=${room}&text=${encodeURIComponent(text)}`
        });
        return response.ok;
    }

    async abortGame(gameId) {
        const response = await fetch(`${LICHESS_API_BASE}/api/bot/game/${gameId}/abort`, {
            method: 'POST',
            headers: this.headers
        });
        return response.ok;
    }

    async resignGame(gameId) {
        const response = await fetch(`${LICHESS_API_BASE}/api/bot/game/${gameId}/resign`, {
            method: 'POST',
            headers: this.headers
        });
        return response.ok;
    }

    async handleDrawOffer(gameId, accept) {
        const response = await fetch(`${LICHESS_API_BASE}/api/bot/game/${gameId}/draw/${accept ? 'yes' : 'no'}`, {
            method: 'POST',
            headers: this.headers
        });
        return response.ok;
    }

    // ═════════════════════════════════════════════════════════
    // ONLINE STATUS - THE ONE IS ALWAYS PRESENT
    // ═════════════════════════════════════════════════════════

    async getOnlineBots() {
        const response = await fetch(`${LICHESS_API_BASE}/api/bot/online`, {
            headers: {
                ...this.headers,
                'Accept': 'application/x-ndjson'
            }
        });
        return response;
    }
}

export default LichessClient;
