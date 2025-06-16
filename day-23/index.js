console.log("Promises");

// - What is a Promise in JavaScript?
// - Callback to Promise
// - Understanding Promise States
// - How promises are resolved and rejected
// - Handling Promises
// - Promise Chain
// - Handling Multiple Promises
// - How to Cancel a Promise
// - That PizzaHub App
// - Tasks and Assignments

/*let promise = new Promise(function(resolve, reject){

});

// Executor
function(resolve, reject){
    // Logic goes here
    resolve()
    reject()
    resolve()
}*/

// state -
// pending: Initially when the executor function starts the execution.
// fulfilled: When the promise is resolved.
// rejected: When the promise is rejected.

// result -
// undefined: Initially when the state value is pending.
// value: When resolve(value) is called.
// error: When reject(error) is called.

// - How promises are resolved and rejected


let promise1 = new Promise(function (resolve, reject) {
    resolve("Hey, I am done!");
});

let promise2 = new Promise(function (resolve, reject) {
    reject("Something is not right!");
});

let anotherPromise = new Promise(function (resolve, reject) {
    resolve("I am surely going to get resolved!");

    reject(new Error("Will this be ignored?")); // ignored
    resolve("Ignored?"); // ignored
});


// - Handling Promises

// .then()
// .catch()
// .finally()

let loading = false
 const promise = new Promise(function(resolve, reject) {
    loading = true;
    // Make a Network Call(API Call/IO Operation)
    resolve("I am resolved...")
 });

 promise.then(
    (result) => {console.log(result)}
 ).catch(
    (error) => {console.error(error)}
 ).finally(
    () => {
        loading = false;
    }
 );

 // - Promise Chain

 // Rule 1: Every promise gives you a .then() handler method. Every rejected promise provides you a .catch() handler.

 // Rule 2: You can do mainly three valuable things from the .then() method. You can return another promise(for async operation). You can return any other value from a synchronous operation. Lastly, you can throw an error.

 // Return a promise from the .then() handler

 // Create a Promise
let getUser = new Promise(function(resolve, reject) {
    const user = {
           name: 'John Doe',
           email: 'jdoe@email.com',
           password: 'jdoe.password',
           permissions: [ 'db', 'dev']
     };
   resolve(user);
});

getUser
.then(function(user) {

    console.log(`Got user ${user.name}`);

    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve('Bangalore')
        }, 2000)
    })
}).then((address) => {
    console.log(`User address is ${address}`);
});

// Return a simple value from the .then() handler

getUser
.then(function(user) {
    console.log(`Got user ${user.name}`);
    return user.email;
})
.then(function(email) {
    console.log(`User email is ${email}`);
});

// Throw an error from the .then() handler

getUser
.then(function(user) {

    console.log(`Got user ${user.name}`);

    if (!user.permissions.includes("hr")) {
        throw new Error("You are not allowed to access the HR module");
    }

    return user.email;
})
.then((email) => {
    console.log(`User email is ${email}`);
})
.catch((error) => {
    console.error(error);
});

// Rule 3: You can rethrow from the .catch() handler to handle the error later. In this case, the control will go to the next closest .catch() handler.

let promise401 = new Promise(function(resolve, reject) {
    reject(401)
});

promise401
.catch((error) => {
    console.log(error);
    if (error === 401) {
        console.log("Rethrowing 401");
        throw error;
    } else {
        // Do Something
    }
})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(`handling ${error} here`);
})

// Rule 4 - Unlike .then() and .catch(), the .finally() handler doesn't process the result value or error. It just passes the result as is to the next handler.

// Create a Promise
let promiseFinally = new Promise(function(resolve, reject) {
    resolve('Testing Finally.');
});

promiseFinally
    .finally(function() {
        console.log("Running Finally!")
    })
    .then(function(result) {
        console.log(result);
    })

    // Rule 5 - Calling the .then() handler method multiple times on a single promise is NOT chaining.


    promise
        .then((result) => {
            // Do Something
            return 101;
        })
        .then((result) => {
            // result // 101
            // throw error
        })
        .catch((error) => {

        })


        // This is not Chaining Promises

// Create a Promise
{
let promise = new Promise(function (resolve, reject) {
    resolve(10);
  });

  // Calling the .then() method multiple times
  // on a single promise - It's not a chain
  promise.then(function (value) {
    value++;
    return value;
  })
  .then(function (value) {
    value = value + 10;
    return value;
  })
  .then(function (value) {
    value = value + 20;
    console.log(value);
    return value;
  });
}

  // Handle Multiple Promises

  // promise.all([promises])

const BULBASAUR_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
const RATICATE_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/raticate';
const KAKUNA_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/kakuna';

let promise_1 = getPromise(BULBASAUR_POKEMONS_URL);
let promise_2 = getPromise(RATICATE_POKEMONS_URL);
let promise_3 = getPromise(KAKUNA_POKEMONS_URL);


Promise.all([promise_1, promise_2, promise_3])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
})



Promise.any([promise_1, promise_2, promise_3])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
})


// settling a promise = fulfilling(resolve) + rejecting

Promise.allSettled([promise_1, promise_2, promise_3])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
})


Promise.race([promise_1, promise_2, promise_3])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
})

Promise.resolve()
// let promise = new Promise(resolve => resolve(value));

Promise.reject()
// let promise = new Promise((resolve, reject) => reject(error));


// How to Cancel a Promise

