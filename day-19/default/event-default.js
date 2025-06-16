console.log("Event Defaults");

document.getElementById("websiteLink").addEventListener("click", function (e) {
    console.log("Navigating to website!");
    // e.preventDefault();
    // console.log("Default link behavior prevented!");
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
    // e.preventDefault();
    console.log("Form submission prevented!");
});
