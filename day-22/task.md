# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. Pass a function to greet a user and then thank them

## 2. Implement a calculator function that accepts two numbers and a callback to perform operations like add, subtract

```js
function calculator(a, b, operationCallback) {
  // Complete this function
}

function add(x, y) {
  return x + y;
}

// Test calculator(5, 3, add);
```

Also test it with subtract, multiply, divide functions.

## 3. Create a delayedMessage function that prints a message after a delay using setTimeout

```js
function delayedMessage(message, delay, callback) {
  // Your code here
}

// delayedMessage("Task complete", 2000, () => console.log("Callback Fired!"))
```

## 4. Implement a function that filters numbers in an array based on a condition provided via callback

```js
function filterNumbers(arr, conditionCallback) {
  // Use loop and callback to return filtered array
}

// Example: filterNumbers([1, 2, 3, 4], n => n > 2) // should return [3, 4]
```

## 5. Execute a sequence of tasks one after another using callbacks

```js
function task1(callback) {
  console.log("Task 1 done");
  callback();
}

function task2(callback) {
  console.log("Task 2 done");
  callback();
}

function task3() {
  console.log("Task 3 done");
}

// Call them in sequence using nested callbacks
```
