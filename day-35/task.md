# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

How to Approach These Assignments

- Read the Code: Understand what it’s trying to do.
- Run the Code: See what’s printed in the console (and what’s not!).
- Debug: Use console.log(), DevTools, breakpoints, or visual stepping.
- Fix: Carefully apply knowledge of scope, async, closures, or object handling.
- Refactor: Bonus points for writing cleaner, modern code.

## 1. Closure Confusion

```js
function makeMultipliers() {
  const result = [];
  for (var i = 1; i <= 3; i++) {
    result.push(function (num) {
      return num * i;
    });
  }
  return result;
}

const [double, triple, quadruple] = makeMultipliers();

console.log(double(2));  // Expected: 2 * 1 = 2
console.log(triple(2));  // Expected: 2 * 2 = 4
console.log(quadruple(2)); // Expected: 2 * 3 = 6
```

## 2. Async Bug with setTimeout in Loop

```js
for (let i = 0; i <= 3; i++) {
  setTimeout(function () {
    console.log("Count:", i);
  }, 1000);
}
```

- Goal: This actually works fine because of let. But refactor it to use var instead, and now fix the broken version with var.

## 3. Object Mutation Trap

```js
const config = {
  appName: "CoolApp",
  version: "1.0",
};

function updateConfig(newConfig) {
  config = { ...config, ...newConfig };
}

updateConfig({ version: "2.0" });
```

- Error: Assignment to constant variable.
- Goal: Fix the error without changing const to let, and apply a clean way to update nested configs.

## 4. Promise Chain Gone Wrong

```js
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
}

async function start() {
  const data = fetchData()
    .then(res => {
      console.log("Then block:", res);
      throw new Error("Something went wrong!");
    });

  console.log("Data:", await data);
}

start();
```

- Issue: Error isn’t caught properly. Unhandled rejection occurs.
- Goal: Catch the error properly using try/catch with await pattern.
