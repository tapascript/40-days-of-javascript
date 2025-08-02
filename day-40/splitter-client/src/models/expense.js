export class Expense {
    constructor(paidBy, amount, description = 'No description') {
        if (!paidBy || typeof paidBy !== 'string') {
            throw new Error('PaidBy must be a non-empty string');
        }
        if (!amount || typeof amount !== 'number' || amount <= 0) {
            throw new Error('Amount must be a positive number');
        }

        this.id = this.generateId();
        this.paidBy = paidBy.trim();
        this.amount = parseFloat(amount.toFixed(2));
        this.description = description.trim();
        this.timestamp = new Date().toISOString();
    }

    generateId() {
        return crypto.randomUUID();
    }

    toJSON() {
        return {
            id: this.id,
            paidBy: this.paidBy,
            amount: this.amount,
            description: this.description,
            timestamp: this.timestamp
        };
    }
}