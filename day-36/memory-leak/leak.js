function showModal() {
    const modal = document.getElementById("modal");
    modal.innerHTML = `<p>This is a modal</p>`;

    document.body.addEventListener("click", () => {
        console.log("Body clicked");
    });

    // Clean it up after 5 seconds (just an example)
    setTimeout(() => {
        document.body.removeEventListener("click", handleBodyClick);
    }, 5000);
}

document.getElementById("open").addEventListener("click", showModal);
