// You no need to learn this method now. We will leaern it deeper in the future sessions.
function query(endpoint, callback, options) {
    fetch(`http://localhost:3000/${endpoint}`, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            setTimeout(() => {
                callback(json)
            }, 2000);
        });
}
