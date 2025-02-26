console.log("Day 06");

// Define or Declare a Function
function printThis() {
    console.log("Printing...")
}

// Call or Invoke a Function
printThis();

// Function as an Expression
let printMe = function() {
    console.log("Print Me")
}

printMe();

// Parameters & Arguments
function sum(a, b) {
    const result = a + b;
    //console.log(result);
    return result;
}

let result = sum(10, 9);
console.log(result)

function double(x) {
    return 2*x;
}
console.log(double(result));

// Default Parameters

function calc(a=0, b=0) {
    return (2 * (a + b ))
}

const resVar = calc()
console.log(resVar);


// Rest Parameter
function calculateThis(x, y, ...rest){
    console.log(x, y, rest)
}

calculateThis(1,2,3,4,5,6,7,8,9)

// Nested Fucntion

function outer() {
    console.log("Outer");

    return function inner() {
        console.log("inner")
    }
    //inner();
}

let retFunc = outer();

console.log(retFunc());


// callback function
const toCallBuz  = false;

function foo(func) {
    console.log("foo");
    if (toCallBuz){
        func();
    }
}

const buz = function() {
    console.log("buz")
}

foo(buz);

// Pure function
let greeetingMsg = "Hola "

function greeting(name) {
    return greeetingMsg + name;
}

console.log(greeting("tapaScript"));
console.log(greeting("tapaScript"));

greeetingMsg = "Namaste "

console.log(greeting("tapaScript"));
console.log(greeting("tapaScript"));
console.log(greeting("tapaScript"));


// Higher Order Function

function getCamera(camera) {
    camera();
}

getCamera(function() {
    console.log("Sony")
})

function returnFunc(param) {
    return function() {
        if (param === 1) {
            console.log("Hello")
        }

    }
}

const retFun = returnFunc(3);
retFun();


// Arrow Function

let greetMe = (greetingMsg) => {
    //
    //
    return greetingMsg + " great"
}

console.log(greetMe("Hola"));


// IIFE(Immediately Invoked Function Expression)
(function(count){
    console.log("IIFE", count)
})(1)


// Recursion

/*function foo() {
    foo();
}*/

function fetchWater(count) {
    console.log("Fetching Water...", count);
    if (count === 0) {
        console.log("No more water is left to fetch...");
        return;
    }
    fetchWater(count - 1)
}

fetchWater(5)






