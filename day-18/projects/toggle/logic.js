console.log("Project: Toggle");

function toggleInfo() {
    console.log("Toggling");
    const para = document.getElementById("myParagraph");

    para.classList.toggle("hidden")
}