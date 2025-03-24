console.log("Live 01");

/*
- [ ]  Create a `units` variable. Based on this value you will calculate the total electricity bill for a months.
- [ ]  If each day you consume the `units` and each unit cost 150 rupees, how much will you be charged per month?
- [ ]  If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?
*/

const unitsPerDay = 10;
const costPerUnit = 150;

const daysInMonth = 30;

const monthlyBill = daysInMonth * costPerUnit * unitsPerDay;

const annualBillWithoutDiscount = monthlyBill * 12;

const discount = annualBillWithoutDiscount * 0.2;

const annualBillWithDiscount = annualBillWithoutDiscount - discount;

const a = 10;
const b = 12;
const c = 5;

if (a === b && b === c) {
    return "Equilateral Triangle";
} else if (a === b || b === c || a === c) {
    return "Isosceles Triangle";
} else {
    return "Scalene Triangle";
}

let num = 6789;
let reversed = 0;

while (num > 0) {
    let eachDigit = num % 10; // 6
    reversed = reversed * 10 + eachDigit; // 9876
    num = Math.floor(num/10) // 0
}
reversed // 9876


function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
            console.log(`Count: ${count}`);
        },
        decrement: function() {
            count--;
            console.log(`Count: ${count}`);
        },
        reset: function() {
            count = 0;
            console.log(`Count reset to: ${count}`);
        }
    };
}

// Usage
const counter = createCounter();
counter.increment(); // Count: 1
counter.increment(); // Count: 2
counter.decrement(); // Count: 1
counter.reset();     // Count reset to: 0

