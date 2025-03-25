console.log("Day 14: Error Handling");

// What are we going to learn today?

// 1. Different Types of Error in JavaScript
// 2. try...catch syntax and flow
// 3. Real-World Use cases with try...catch
// 4. Throwing Error
// 5. Rethrowing Error
// 6. The try..catch..finally
// 7. Creating Custom Error
// 8. Self Assignment Operator


// parsing error -
// runtime error -

// What is an Exception in JavaScript?
// Ans: Exceptions are runtime errors that disrupt program execution.

// Examples:

// console.log(x); // ReferenceError: x is not defined

// let obj = null;
// console.log(obj.name); // TypeError: Cannot read properties of null

// console.log("hi" // SyntaxError:

// let arr = new Array(-1) // RangeError

// decodeURIComponent("%"); // URIError
// eval("var a = ;"); // EvalError

// try...catch

try {
    // logic or code
} catch (err) {
    // handle error
}

/*
    1. Code inside try gets executed.
    2. If no error in the try block, the catch block will be ignored and will not be
    executed.
    3. If there is an error in the try block, the execution of the try block will be
    suspended and the control will move to the catch block. In the catch block you
    can find the error details and do the needful.
*/

try {
    console.log("execution starts here");
    abc;
    console.log("execution ends here");
} catch (err) {
    console.error("An Error has occured");

    console.log(err.name)
    console.log(err.message)
    console.log(err.stack)
}

// Real-World Use Cases

function divideNumbers(a, b) {
    try {
        if (b === 0) {
            const err = new Error("Division by zero is not allowed.");
            throw err;
        }
        const result = a/b;
        console.log(`The result is ${result}`);
    } catch(error) {
        console.error("Got a Math Error:", error.message)
    }
}
divideNumbers(15, 3);
// divideNumbers(15, 0);

const person = {
    name: "Tapas",
    address: {
        city: "Bangalore"
    }
}

function getPostalCode(user) {
    try {
        console.log(user.address.country.postalCode);
    } catch (error) {
        console.error("Error accessing property:", error.message);
    }
}

// getPostalCode(person);



function validateAge(age) {
    try {
        if (isNaN(age)) {
            throw new Error(`Invalid input: Age must be a number. Your input is ${age}`);
        }
        console.log(`User's age is: ${age}`);
    } catch (error) {
        console.error("Validation Error:", error.message);
    }
}

// validateAge("Tapas")

// Rethrow

try {
    // Do something with logic and code
} catch (error) {
    // Do something with the error
}

function validateForm(formData) {
    try {
        if (!formData.username) throw new Error("Username is Mandatory");
        if (!formData.email.includes("@")) throw new Error("Invalid email format!");
    } catch (error) {
        console.error("Validation Issues Found:", error.message);
        throw error; // rethrow
    }
}

try {
    validateForm({ username: "Tapas", email: "bademail" })
} catch(error) {
    console.error("Showing error message for user creation", error.message)
}

// try-catch-finally

try {
    // Code that may throw an error
} catch (error) {
    // Code to handle the error
} finally {
    // Code that always runs (cleanup actions)
}

function processInformation(information) {
    try {
        console.log("Processing Information...");
        if (!information) throw new Error("No Information available to process");
        console.log("Information processed");
    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        console.log("Cleanup: Closing database connection")
    }
}

// processInformation();


// Custom Error

function ValidationError(message) {
    this.name = "ValidationError";
    this.message = message;
    //this.stack = new Error().stack;
}

//ValidationError.prototype = Object.create(Error.prototype);

function validateCitizen(age) {
    if (age < 60) {
        throw new ValidationError("You are not a senior citizen");
    }
    return "You are a senior citizen";
}

try {
    const message = validateCitizen(15);
    console.log(message);
} catch (error) {
    console.error(`${error.name}: ${error.message}`)
}

// Self Assignment Operator ?=

let x;
let y = 10;

x ?= 20; // x is undefined, so x becomes 20
y ?= 30; // y is already 10, so y remains 10

console.log(x); // Output: 20
console.log(y); // Output: 10

