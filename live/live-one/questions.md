# Live 01 - Questions

## Q1: Create an Electricity Bill Calculator

Let's calculate how much you pay for electricity bills per month and annually.

- [ ]  Create a `units` variable. Based on this value you will calculate the total electricity bill for a months.
- [ ]  If each day you consume the `units` and each unit cost 150 rupees, how much will you be charged per month?
- [ ]  If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?

## Q2: Which Triangle?

A triangle has 3 sides. A Triangle type is determined by its sides:

- All sides equal is called, `Equilateral Triangle`.
- Two sides equal is called, `Isosceles Triangle`.
- All sides different is called, `Scalene Triangle`.

Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly.

## Q3: Reverse Digits of a Number (Using while loop)

Write a program to reverse the digits of a given number using a while loop.

Example:

`Input: 6789
Output: 9876`

## Q4: Write a Function to Capitalize the First Letter of Each Word in a Sentence

Write a function capitalizeWords(sentence) that takes a sentence and capitalizes the first letter of each word. You can use the toUpperCase() method of string to convert the lowercase to uppercase.

## Q5: Create Call Stack Execution Diagram for this flow

```js
function f1() {}
function f2() {}
function f3() {
    f1();
}
f2();
f3();
f1();
```

## Q6: Draw the Execution Context Diagram of the following code and share as explained below

```js
const message = "I can do it";

fucntion sum(a, b) {
    const result = a + b;
    return result;
}

function mul(a, b) {
    const result = a * b;
    return result;
}
function calc(a, b) {
    return (sum(a, b) + mul(a,b))/2;
}

function getResult(a, b) {
    return calc(a, b);
}

getResult(8, 5);
```

## Q7: What will be the output and why?

```js
let x = "Global";

function outer() {
    let x = "Outer";

    function inner() {
        let x = "Inner";
        console.log(x);
    }

    inner();
}

outer();
```

## Q8: Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functions

## Q9: Can you attach the car1's describe() method to car2 object? Give all possible solutions that you can think of

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

## Q10: In the given user object, inside the greet function, this refers to the user object. The inner function is inside greet, so according to the scope mechanism, it should be able to access this from greet. However, this is not happening as expected. Why does the scope mechanism not work in this case?

```js
const user = {
  name: "Alex",
  greet: function () {
    console.log("From outer function", this); // user

    const inner = function () {
      console.log("From inner function", this); // window
    };
    inner();
  },
};

user.greet();
```

## Other Question(Collected from the QA submission form)

- After a few days, I forget syntax. Is this natural or how to remember?
- Where we can use hoisting and what is temporal dead zone?
- What are the actual steps that we should keep in mind when we start writing a code for a particular project?
- I would like to understand the actual use of "closures"?
- I know if I don't learn properly, the certificate value will not work, but we request us please give us a certificate for valuable memory purposes.
- I am finding difficulties for getting even a single freelancer small project on any of the freelancing portals. Is there any practical approach that would help me finding just one to start with.
- if we are begginers whos learning javascript we have big problem for building logics and how to think like a dev i would like to give advice for this problem also some times we feel lack of confidence and think like we dont know nothing what would you give as and advice for this feeling and problems
