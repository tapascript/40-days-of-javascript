const copyBtn = document.getElementById("copyBtn");
const textArea = document.getElementById("textToCopy");
const statusMsg = document.getElementById("statusMsg");

copyBtn.addEventListener("click", async () => {
    try {
        const text = textArea.value;
        if (!navigator.clipboard) {
            console.warn('Clipboard API not supported on this browser.');
            return;
        }
        await navigator.clipboard.writeText(text);
        statusMsg.textContent = "Text copied to clipboard!";
        statusMsg.style.color = "green";
    } catch (err) {
        statusMsg.textContent = "Failed to copy!";
        statusMsg.style.color = "red";
        console.error("Copy failed:", err);
    }
});
