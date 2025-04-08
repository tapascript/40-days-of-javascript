console.log("Event Bubbling, Capturing, and Delegation");

// Event Capturing and Bubbling

// In event bubbling, the event starts from the target element and bubbles upwards through its ancestors (parent → grandparent → etc.).

// The Flow is: Child → Parent → Grandparent → Document

// Bubbling

document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent clicked");
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked");
});

// Capturing

// In event capturing, the event flows from the outermost ancestor down to the target element before the actual target handles it.

// The Flow is: Document → Grandparent → Parent → Child

// Rarely used, but useful if you want to catch events before they reach the target.

document.getElementById("grandparent").addEventListener(
    "click",
    () => {
        console.log("Captured at Grandparent");
    },
    true // Capture phase
);

document.getElementById("parent").addEventListener(
    "click",
    () => {
        console.log("Captured at Parent");
    },
    true // Capture phase
);

document.getElementById("child").addEventListener(
    "click",
    () => {
        console.log("Captured at Child");
    },
    true // Capture phase
);

// Event Delegation - it is a technique where you add a single event listener to a parent element instead of each child. It uses event bubbling to handle events from dynamically added or existing child elements.

// Efficient for handling events on lists, tables, or any repeated/dynamic content.

document.getElementById("itemList").addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log(`You clicked on ${event.target.textContent}`);
    }
});

// Dynamically add a new list item
let newItemElem = document.createElement("li");
newItemElem.textContent = "Item 3";
document.getElementById("itemList").appendChild(newItemElem);


// event.stopPropagation() - event.stopPropagation() is a method used inside an event handler to stop the event from bubbling up (or propagating further) through the DOM tree

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", (e) => {
    // e.stopPropagation();
    console.log("Child clicked");
});
