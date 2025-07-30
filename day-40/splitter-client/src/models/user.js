export class User {
    constructor(name) {
        if (!name || typeof name !== 'string') {
            throw new Error('User name must be a non-empty string');
        }
        this.name = name.trim();
        this.id = this.generateId();
    }

    generateId() {
        return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name
        };
    }
}