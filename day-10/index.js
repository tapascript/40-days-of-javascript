console.log("Day 10");

// 4 Types of Scope in JavaScript
// 1. Global Scope
// 2. Function Scope
// 3. Block Scope
// 4. Module Scope

// Global Scope
// Variables declared outside of any function or block scope
// are in the global scope

let name = "Tapas";

function greeting() {
    console.log("Hello ", name);
}

greeting();

console.log(name);// "Tapas"

{
    console.log("Inside Block", name)
}

// Function Scope: Variables declared inside a function are only
// accessible within that function.

function toDo() {
    let task = "Learning 40 days of JS"
    console.log(task);
}

toDo();

// console.log(task);

// Block Scope: Variables declared using let and const inside {} cannot be accessed outside the block.

{
    let count = 10;
    console.log(count)
}

// console.log(count)

// Scope Chain

let globalVar = "I am a Global Variable";

function outer() {
    let outerVar = "I am an Outer Variable";

    function inner() {
        let innerVar = "I am an Inner Variable";

        console.log(innerVar); // "I am an Inner Variable"
        console.log(outerVar); // "I am an Outer Variable"
        console.log(globalVar); // "I am a Global Variable"
    }

    inner();
}

outer();

console.log(outerVar); // Reference Error



var count = 10;

function outer() {
    // var count = 20;

    function inner() {
        //var count = 30;
        console.log(count); // 10
    }
    inner();
    console.log(count); // 10
}

outer();
console.log(count); // 10


// Variable Shadowing

let message = "I am doing great"

function situation() {
    let message = "I am not doing great"
    console.log(message); // I am not doing great
}

situation();
console.log(message); // I am doing great