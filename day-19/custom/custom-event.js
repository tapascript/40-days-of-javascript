//  Step 1: Create a CustomEvent
const myEvent = new CustomEvent("userLoggedIn", {
    detail: {
        username: "tapascript",
        role: "admin",
    },
});

// Step 2: Listen for the Custom Event
document.addEventListener("userLoggedIn", (e) => {
    console.log("User login detected:", e.detail.username);
});

// Step 3: Dispatch the Custom Event
document.dispatchEvent(myEvent);

// Auth Module Example

// Module 1: Authentication logic
function loginUser(username) {
    const event = new CustomEvent("userLoggedIn", {
        detail: { username },
    });
    document.dispatchEvent(event);
}

// Module 2: Navbar or Sidebar
document.addEventListener("userLoggedIn", (e) => {
    const user = e.detail.username;
    document.getElementById("welcome").textContent = `Welcome, ${user}!`;
});

