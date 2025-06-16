function getPromise(URL) {
    return fetch(URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error ${response.status}`);
            }
            return response.json();
        });
}
