console.log("Inside Global Execution Context");
var a = 5;
function testMe() {
    console.log("Inside testMe Execution context");
    var b = 10;
    var user = {
        name: "tapas",
        country: "India"
    }
    function testAgain() {
        console.log("Inside testAgain Execution Context");
        console.log("Exiting testAgain Execution Context");
    }
    testAgain();
    console.log("Exiting testMe execution context");
}
testMe();
console.log("Exiting global execution context");