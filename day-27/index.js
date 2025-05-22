// JavaScript is Synchronous
// There can be async behaviours
// - With Browser APIs/Web APIs - setTimeout, setInterval
// - With Promises
// - With Event Handlers

// Event Loop
// - Call Stack
// - Web APIs
// - Callback Queue:
// - MicroTask Queue/Job Queue:
// - Event Loop:

function f1() {
    console.log("f1");
}

function f2() {
    console.log("f2");
}

function main() {
    console.log("main");
    setTimeout(f1, 0);
    new Promise((resolve, reject) => {
        resolve("I am a promise!");
    }).then((resolve) => console.log(resolve));
    f2();
}
main();


