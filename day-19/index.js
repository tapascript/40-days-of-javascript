console.log("Day 19 - JavaScript Events");

// What will we learn today?

// - What is an Event?
// - Event Handling and Why?
// - Event Handling in Markup
// - Event Handling in Script
// - addEventListener and removeEventListener
// - DOM Content Loaded
// - Event Object
// - Event Capturing and Bubbling
// - Event Delegation
// - Event Default Behaviour
// - Custom Events
// - Project(s)
// - Tasks

// Event Handling in Markup
function handleClick(greeting) {
    console.log(`Button Clicked with a ${greeting}`);
}

// Event Handling in Script
const myBtn2Elem = document.getElementById("myBtn2");
myBtn2Elem.onclick = function() {
    console.log("My Button 2 Clicked");
}
// Can not add multiple
myBtn2Elem.onclick = function() {
    console.log("My Button 2 Clicked Again");
}
// Separating fundtion
myBtn2Elem.onclick = handleClick;
myBtn2Elem.onclick = () => handleClick("Hola");

// addEventListener and removeEventListener
let counter = 0;
const counBtnElem = document.getElementById("countBtn");
const handleCount = function() {
    console.log(counter);
    counter++;
}
const greetMe = function() {
    console.log("Thank You!");
}
/*
counBtnElem.addEventListener("click", function() {
    console.log(counter);
    counter++;
})

counBtnElem.removeEventListener("click", function() {
    console.log(counter);
    counter++;
})
*/

counBtnElem.addEventListener("click", handleCount);
counBtnElem.addEventListener("click", greetMe);
counBtnElem.removeEventListener("click", handleCount);

// DOM Conetnt Loaded

// will never run
document.onDOMContentLoaded = function() {
    console.log("DOM Content Loaded...");
};

// this will run
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM Content Loaded...");
});


// Event Object
const searchElem = document.getElementById("search-id");
function handleChange(event) {
    console.log(event);
    console.log("Target:", event.target);
    console.log("Target Name:", event.target.name);
    console.log("Target Value:", event.target.value);
    console.log("Event Type:", event.type);
    console.log("Current Target:", event.currentTarget);
    console.log("this:", this);
}
searchElem.addEventListener("change", handleChange);



