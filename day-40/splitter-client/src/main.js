class User {
    constructor(name) {
        this.name = name;
        this.balance = 0;
    }
}

class Expense {
    constructor(paidBy, amount, description) {
        this.paidBy = paidBy;
        this.amount = amount;
        this.description = description;
    }
}

const users = new Map();
const expenses = [];

document.getElementById("addUserForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("userInput").value.trim();
    if (name && !users.has(name)) {
        users.set(name, new User(name));
        console.log(`User ${name} added`);
        const userSelectBox = document.getElementById("expenseUserInput");
        const newOption = new Option(name, name);
        userSelectBox.add(newOption, undefined);
    }

    document.getElementById("addUserForm").reset();
});

document.getElementById("addExpenseForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const paidBy = document.getElementById("expenseUserInput").value.trim();
    const amount = document.getElementById("expenseAmountInput").valueAsNumber;

    if (paidBy && amount) {
        const desc = document.getElementById("expenseReasonInput").value.trim();
        console.log(paidBy, amount, desc);
        expenses.push(new Expense(paidBy, amount, desc || "No description"));
        console.log(`Expense added by ${paidBy}`);

        renderExpenses(paidBy, amount, desc);
    }

    document.getElementById("expenseAmountInput").value = 0;
    document.getElementById("expenseReasonInput").value = "";
});

document.getElementById("simplifyBtn").addEventListener("click", () => {
    const result = simplifyExpenses();
    const resultArea = document.getElementById("resultArea");
    resultArea.value = result.join("\n");

    if ("Notification" in window && Notification.permission === "granted") {
        result.forEach((msg) => new Notification(msg));
    }
});

document.getElementById("exportBtn").addEventListener("click", () => {
    const data = { users: [...users.values()], expenses };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: "application/json",
    });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "expenses.json";
    a.click();
});

document.getElementById("importFile").addEventListener("change", (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function (evt) {
        const data = JSON.parse(evt.target.result);
        data.users.forEach((u) => users.set(u.name, new User(u.name)));
        expenses.push(
            ...data.expenses.map(
                (e) => new Expense(e.paidBy, e.amount, e.description)
            )
        );
        console.log("Data imported!");
    };
    reader.readAsText(file);
});

function simplifyExpenses() {
    const net = {};
    expenses.forEach((exp) => {
        const share = exp.amount / users.size;
        users.forEach((user, name) => {
            if (name === exp.paidBy) {
                net[name] = (net[name] || 0) + (exp.amount - share);
            } else {
                net[name] = (net[name] || 0) - share;
            }
        });
    });

    const results = [];
    const names = Object.keys(net);
    names.sort((a, b) => net[a] - net[b]);

    let i = 0,
        j = names.length - 1;
    while (i < j) {
        const owe = Math.min(-net[names[i]], net[names[j]]);
        net[names[i]] += owe;
        net[names[j]] -= owe;
        results.push(`${names[i]} owes ${names[j]} ₹${owe.toFixed(2)}`);
        if (net[names[i]] === 0) i++;
        if (net[names[j]] === 0) j--;
    }

    return results;
}

function renderExpenses(user, amount, reason) {
    const renderExpenses = document.getElementById("renderExpenses");
    const paymentList = document.getElementById("payment-list");

    renderExpenses.classList.remove("hidden");
    renderExpenses.classList.add("flex");

    const paymentElem = document.createElement("LI");
    paymentElem.textContent = `${user} paid ${amount} INR for ${reason}`;

    paymentList.appendChild(paymentElem);
}

// Ask for notification permission
if ("Notification" in window && Notification.permission !== "granted") {
    Notification.requestPermission();
}
