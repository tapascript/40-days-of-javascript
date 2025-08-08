import { UserService } from "./services/userService";
import { ExpenseService } from "./services/expenseService";
import { StorageService } from "./services/storageService";
import { ExpenseUI } from "./ui/expenseUI";
import { showErrorToast } from "./utils/toastUtil";
class ExpenseApp {
    constructor() {
        this.userService = new UserService();
        this.expenseService = new ExpenseService(this.userService);
        this.storageService = new StorageService(this.userService, this.expenseService);
        this.ui = null;
    }

    init() {
        try {
            this.ui = new ExpenseUI(this.userService, this.expenseService, this.storageService);
            console.log('Expense Splitter App initialized successfully');
        } catch (error) {
            console.error('Failed to initialize app:', error);
            showErrorToast('Failed to initialize application');
        }
    }
}

// Global app instance
let expenseApp;

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    expenseApp = new ExpenseApp();
    expenseApp.init();
});

// Wait for Toastify to load if it's loaded asynchronously
window.addEventListener('load', () => {
    if (!expenseApp) {
        expenseApp = new ExpenseApp();
        expenseApp.init();
    }
});