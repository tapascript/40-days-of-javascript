# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. Create a table of two columns, `situation` and `value`. Now add the rows for every situations and the value of `this` in that situation. Please cover the following situations

- At the Global
- Inside an Object Method
- Inside the Satandalone non-Arrow Function
- Inside an Arrow Function(standalone)
- Inside an Arrow Function(as object method)
- Inside an object created with the Constructor Function

Please add examples for each of the scenarios.

## 2. What is the problem here? Fix it to log the correct name and explain the fix

```js
const user = {
  name: "tapaScript",
  greet: () => {
    console.log(`Hello, ${this.name}!`);
  },
};

user.greet();
```

## 3. Can you explain what is the problem here and fix the issue to log the correct name?

```js
const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet;
greetFn();
```

## 4. What is the problem with the following code? Why isn't it logging the name correctly?

```js
const user = {
  name: "Alex",
  greet: function () {
    function inner() {
      console.log(`Hello, ${this.name}!`);
    }
    inner();
  },
};

user.greet();
```

## 5. Create a `Sports` constructor function that takes `name` and `number of players` as arguments and assigns them using `this` keyword. Then, create two sports instances and log their details

## 6. Can you attach the car1's `describe()` method to car2 object? Give all possible solutions that you can think of

```js
const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};
```

## 7. What will be the output of the following code and why?

```js
const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person.sayHello();
person.sayHelloArrow();
```

Options are:

- A: "Charlie" and "Charlie"
- B: "Charlie" and undefined
- C: "Charlie" and "" (empty string)
- D: undefined and "Charlie"
