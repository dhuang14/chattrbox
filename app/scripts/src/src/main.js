import ChatApp from './app';
new ChatApp();

class ChatMessage {
    constructor({ message: m, user: u='batman', timestamp: t=(new Date()).getTime()}) {
        this.message = m;
        this.user = u;
        this.timestamp = t;
    }

    serialize() {
        return { user: this.user, message: this.message, timestamp: this.timestamp };
    }
}