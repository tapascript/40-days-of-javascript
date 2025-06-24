/*

You are writing a function that calculates a discounted price based on the user’s cart total. But something is going wrong — customers are getting wrong discount values, especially when the cart has exact boundary values.

Your job is to debug and fix the logic so that the discount system works as intended.

Requirements:

- If total >= 500 → discount is 20%
- If total >= 300 → discount is 15%
- If total >= 100 → discount is 10%
- Otherwise, no discount.

*/

function calculateDiscount(total) {
  let discount = 0;

  if (total >= 100) {
    discount = 0.10;
  } else if (total >= 300) {
    discount = 0.15;
  } else if (total >= 500) {
    discount = 0.20;
  }

  return total - total * discount;
}

// Test Cases
console.log(calculateDiscount(50));    // Expected: 50 (no discount)
console.log(calculateDiscount(150));   // Expected: 135
console.log(calculateDiscount(350));   // Expected: 297.5
console.log(calculateDiscount(600));   // Expected: 480

/*

Your Task:

- Find the bug in the logic.
- Fix it so it calculates the correct discounted price.
- Make sure the discounts apply in correct order of priority.

*/

/*

HINT:

- Think about how if...else if...else blocks are evaluated.
- The first condition that returns true will be executed, and the rest will be ignored.
- Now look at the order of your conditions.
- What happens if the total is 500?
- Is it checking the most specific (highest) discount first?

*/

