export class StorageService {
    constructor(userService, expenseService) {
        this.userService = userService;
        this.expenseService = expenseService;
    }

    exportData() {
        const data = {
            users: this.userService.getAllUsers().map(user => user.toJSON()),
            expenses: this.expenseService.getAllExpenses().map(expense => expense.toJSON()),
            exportDate: new Date().toISOString()
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], {
            type: 'application/json'
        });

        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `expenses_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    importData(file) {
        return new Promise((resolve, reject) => {
            if (!file) {
                reject(new Error('No file selected'));
                return;
            }

            const reader = new FileReader();

            reader.onload = (event) => {
                try {
                    const data = JSON.parse(event.target.result);

                    if (!data.users || !data.expenses) {
                        throw new Error('Invalid file format');
                    }

                    this.userService.importUsers(data.users);
                    this.expenseService.importExpenses(data.expenses);

                    resolve(data);
                } catch (error) {
                    reject(new Error(`Failed to import data: ${error.message}`));
                }
            };

            reader.onerror = () => {
                reject(new Error('Failed to read file'));
            };

            reader.readAsText(file);
        });
    }
}