export function showSuccessToast(message) {
    Toastify({
        text: message,
        duration: 3000,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
    }).showToast();
}

export function showErrorToast(message) {
    Toastify({
        text: message,
        duration: 3000,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
         style: {
            background: "linear-gradient(to right, #8B0000, #FFCCCB)",
        },
    }).showToast();
}
