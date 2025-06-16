# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. What's the output of the code below?

```js
function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}

function f3() {
    console.log('f3');
}

function f4() {
    console.log('f4');
}

console.log("Let's do it!");

setTimeout(function() {f1();}, 0);

f4();

setTimeout(function() {f2();}, 5000);

setTimeout(function() {f3();}, 3000);
```

Options are,

- Let's do it!, f4, f1, f3, f2
- Let's do it!, f1, f3, f2, f4
- Let's do it!, f1, f2, f3, f4
- Let's do it!, f1, f4, f2, f3

## Example Answer: Let's do it!, f4, f1, f3, f2

Explanation:

- "Let's do it!" is executed by Execution Stack
- f1() calls browser API, so gets added to Callback Queue
- f4() gets added to Execution Stack and is executed
- Event loop finds a callback function f1() in callback queue & executes it
- f2() calls browser API and gets added to Callback Queue. Similarly f3() is added to callback queue
- Now there is nothing in Execution Stack, so event loop checks & finds f2() & - f3() callback functions in callback queue
- f3() goes back into the stack after timeout, and gets executed
- f2() too goes back into the stack after timeout, and gets executed

## 2. What's the output of the code below?

```js
function f1() {
    console.log('f1');
}

console.log("Let's do it!");

setTimeout(function() {console.log('in settimeout');}, 0);

f1();
f1();
f1();
f1();
```

Options are,

- Let's do it!, in settimeout, f1, f1, f1, f1
- Let's do it!, f1, f1, f1, f1, in settimeout
- Let's do it!, f1, , in settimeout, f1, f1, f1

## 3. Which statements are `true`? Select multiple

- [ ] JavaScript is single-threaded
- [ ] By default, JavaScript is synchronous
- [ ] Only promises make JavaScript asynchronous
- [ ] All function callbacks are asynchronous

## 4. Which statement is `true`? Select Only one

- (_) JavaScript Function Execution Stack(Call Stack) never gets empty.
- (_) The job queue gets higher priority than the callback queue.
- (_) The only job of Event Loop is to manage the Call Stack
- (_) The StackOverflow exception is random.

### 5. Guess the output

```js
const tom = () => console.log('Tom');

const jerry = () => console.log('Jerry');

const cartoon = () => {
  console.log('Cartoon');

  setTimeout(tom, 5000);

  new Promise((resolve, reject) =>
    resolve('should it be right after Tom, before Jerry?')
  ).then(resolve => console.log(resolve))

  jerry();
}

cartoon();
```

Options are,

- Cartoon, Jerry, should it be right after Tom, before Jerry?, tom
- Cartoon, Tom, Jerry, should it be right after Tom, before Jerry?,
- Cartoon, Tom, should it be right after Tom, before Jerry?, Jerry
- Error

### 6. Guess the output

```js
const tom = () => console.log('Tom');
const jerry = () => console.log('Jerry');
const doggy = () => console.log('Doggy');

const cartoon = () => {
  console.log('Cartoon');

  setTimeout(tom, 50);
  setTimeout(doggy, 30);

  new Promise((resolve, reject) =>
    resolve('I am a Promise, right after tom and doggy! Really?')
  ).then(resolve => console.log(resolve));
  new Promise((resolve, reject) =>
    resolve('I am a Promise after Promise!')
  ).then(resolve => console.log(resolve));

  jerry();
}

cartoon();
```

Options are,

- Cartoon, Jerry, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, , Tom, Doggy
- Cartoon, Jerry, I am a Promise after Promise!, I am a Promise, right after tom and doggy! Really?, Doggy, Tom
- Cartoon, Jerry, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, Doggy, Tom
- Cartoon, Tom, Doggy, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, Jerry
- None of the above.

### 7. Guess the output

```js
const f1 = () => console.log('f1');
const f2 = () => console.log('f2');
const f3 = () => console.log('f3');
const f4 = () => console.log('f4');

f4();

setTimeout(f1, 0);

new Promise((resolve, reject) => {
    resolve('Boom');
}).then(result => console.log(result));

setTimeout(f2, 2000);

new Promise((resolve, reject) => {
    resolve('Sonic');
}).then(result => console.log(result));

setTimeout(f3, 0);

new Promise((resolve, reject) => {
    resolve('Albert');
}).then(result => console.log(result));
```

Options are,

- f4, Boom, Sonic, Albert, f1, f3, f2
- f4, f1, Boom, f2, Sonic, f3, Albert
- f4, Boom, Sonic, Albert, f3, f1, f2
- f4, Boom, Sonic, Albert, f1, f2, f3

### 8. Guess the output

```js
const f1 = () => {
    console.log('f1');
    f2();
}
const f2 = () => console.log('f2');
const f3 = () => console.log('f3');
const f4 = () => console.log('f4');

f4();

setTimeout(f1, 0);

new Promise((resolve, reject) => {
    resolve('Sonic');
}).then(result => console.log(result));

setTimeout(f3, 0);

new Promise((resolve, reject) => {
    resolve('Albert');
}).then(result => console.log(result));
```

Options are,

- f4, f1, f2, Sonic, f3, Albert
- f4, Sonic, Albert, f3, f1, f2
- f4, Sonic, Albert, f1, f2, f3
- f4, Albert, Sonic, f1, f2, f3
