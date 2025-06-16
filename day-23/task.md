# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. Create Your First Promise

- Create a Promise that resolves with the string "Hello, Promises!" after 1 second.
- Log the result using .then().

## 2.  Reject a Promise

- Create a Promise that immediately rejects with the message "Something went wrong!".
- Handle the error using .catch().

## 3. Simulate Coin Toss

Return a Promise that randomly resolves to "Heads" or "Tails" after 1 second.

## 4. Promise with Condition

- Create a function checkAge(age) that returns a Promise.
- Resolve if age >= 18, reject otherwise.

## 5. Chain Promises Sequentially

- Create three Promises that log:
  - "Step 1 done"
  - "Step 2 done"
  - "Step 3 done"
- Chain them using .then().

## 6. Value Transformation in Chain

- Create a Promise that resolves with 5.
- Chain .then() handlers to double it, then square it.
- Final output should be 100.

## 7. Chain with Random Rejection

- First .then() resolves to "Start".
- Second .then() randomly throws an error or returns "Continue".
- Handle rejection gracefully.

## 8. Multiple then() calls on same Promise

- Create a single resolved Promise.
- Attach two different .then() handlers to it.
- Explain that both run independently.

## 9.  Return New Promises in .then()

- Chain multiple .then() where each returns a new Promise with a delay and logs a step like:
  - “First”
  - “Second”
  - “Third”

## 10. Implement fakeDBQuery()

- Create a function that simulates a DB query with a random delay and returns data (like a user object).
- Chain multiple fake queries.
