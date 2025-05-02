function query(endpoint, options) {
    return fetch(`http://localhost:3000/${endpoint}`, options).then(
        (response) => {
            if (!response.ok) {
                throw new Error(`HTTP error ${response.status}`);
            }
            return response.json();
        }
    );
}
