

function calculateDiscount(total) {
    let discount = 0;
    if (total >= 500) {
        discount = 0.2;
    } else if (total >= 300) {
        discount = 0.15;
    } else if (total >= 100) {
        discount = 0.1;
    }

    return total - total * discount;
}

// Test Cases
console.log(calculateDiscount(50));    // Expected: 50 (no discount)
console.log(calculateDiscount(150));   // Expected: 135
console.log(calculateDiscount(350));   // Expected: 297.5
console.log(calculateDiscount(600));   // Expected: 480


/*

What Was the Issue?

- In the original code, the conditions might have been written in ascending order. This logic fails for higher totals like 500, because the first condition total >= 100 matches and short-circuits the rest — so 20% Discount is never reached.

TIPS:

- When using if...else if...else, always write conditions from the most specific/highest value to the least.
- Debugging tip: Use console.log() to inspect which condition block your input hits.

*/