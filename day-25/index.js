// - 1. What is fetch() API and Syntax
// - 2. Using async/await with fetch()
// - 3. HTTP Methods
// - 4. fetch() Usage: Getting Resources
// - 5. fetch() Usage: Query Params
// - 6. fetch() Usage: Creating Resource
// - 7. fetch() Usage: Custom Headers
// - 8. fetch() Usage: Updating an Entire Resource
// - 9. fetch() Usage: Updating a Part of the Resource
// - 10. fetch() Usage: Deleting Resource
// - 11. Creating a Request Object
// - 12. Handling Response
// - 13. Handling Errors
// - 14. Canceling a Request
// - 15. Tasks and Assignments

// - 1. What is fetch() API and Syntax
/*
fetch(url, options)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
*/

// - 2. Using async/await with fetch()
/*
async function fetchData(url) {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}
*/

// - 3. HTTP Methods

/*
Check this out: https://www.youtube.com/watch?v=Qf2BBZVaAg8

- GET: Fetch data from the server. It does not change anything.
- POST: Send data to the server to create a new resource.
- PUT: Update an entire resource. Replaces the existing data.
- PATCH: Partially update a resource. Only change specific fields.
- DELETE: Delete a resource from the server.
- HEAD: Like GET, but only retrieves the headers (no body). Useful to check if a resource exists or to check metadata.
- OPTIONS: Returns the allowed HTTP methods on a resource (CORS and debugging).
- TRACE: Echoes back the received request to help in debugging or testing — mostly disabled for security reasons.
- CONNECT: Establishes a tunnel to the server, typically for SSL (HTTPS) connections through an HTTP proxy. It’s mostly used for secure communication via a proxy.
*/

// - 4. fetch() Usage: Getting Resources

async function fetchPosts() {
    const API_URL = "http://localhost:3000/posts";
    try {
        const response = await fetch(API_URL);
        // - 12. Handling Response
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            throw new TypeError("Oops, we haven't got JSON!");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // - 13. Handling Errors
        console.log(error);
    }
}

fetchPosts();

// - 5. fetch() Usage: Query Params

async function fetchPostsWithComments() {
    const API_URL = "http://localhost:3000/posts";
    // Set up query parameters
    const queryParams = {
        _embed: "comments",
    };
    try {
        // Build a Query String
        const queryString = new URLSearchParams(queryParams).toString();
        const url = `${API_URL}?${queryString}`;

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchPostsWithComments();

// - 6. fetch() Usage: Creating Resource

async function createPost(postData) {
    const API_URL = "http://localhost:3000/posts";
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postData),
        });
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

const newPostData = {
    id: crypto.randomUUID(),
    title: "How to use fetch() API for POST?",
    views: 0,
};

// const createdPostResult = createPost(newPostData);
// console.log(createdPostResult)

// - 7. fetch() Usage: Custom Headers

async function login() {
    const API_URL = "http://localhost:3000/login";
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer secret-token",
                "Custom-Header": "learn 40 days of JS",
            },
            body: JSON.stringify({ username: "tapascript", password: "hello" }),
        });
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

login();

// - 8. fetch() Usage: Updating an Entire Resource

async function updatePost(postData) {
    console.log("Replacing a POST Data...");
    const API_URL =
        "http://localhost:3000/posts/a9057951-515e-3da2-9793-af29719d0e33";
    try {
        const response = await fetch(API_URL, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postData),
        });
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

const updatePostData = {
    title: "What is 40 Days of JavaScript?",
    views: 160,
};

const updated = updatePost(updatePostData);
console.log(updated);

// - 9. fetch() Usage: Updating a Part of the Resource

async function updateViews(viewData) {
    console.log("Updating a View with Partial Data...");
    const API_URL = `http://localhost:3000/posts/${viewData.id}`;
    try {
        const response = await fetch(API_URL, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(viewData),
        });
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

const updatedPart = updateViews({
    id: "a9057951-515e-4da2-9793-af29719d0e33",
    views: 100,
});
console.log(updatedPart);

// - 10. fetch() Usage: Deleting Resource

async function deletePost(postId) {
    console.log("Deleting Post...");
    const API_URL = `http://localhost:3000/posts/${postId}`;
    try {
        const response = await fetch(API_URL, {
            method: "DELETE",
        });
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

const deleted = deletePost("a9057951-515e-4da2-9793-af29719d0e33");

// - 11. Creating a Request Object

const request1 = new Request("http://localhost:3000/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        id: crypto.randomUUID(),
        title: "How to Cancel a Request?",
        views: 0,
    }),
});

async function post(request) {
    try {
        const response = await fetch(request);
        const result = await response.json();
        console.log("Success:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}

post(request1);

const request2 = new Request(request1, {
    body: JSON.stringify({
        id: crypto.randomUUID(),
        title: "How to Parse JSON",
        views: 10,
    }),
});

console.log(request2);

post(request2);

// - 14. Canceling a Request

let controller;
const url = "./download/file.txt";

const downloadBtn = document.querySelector("#download-btn");
const abortBtn = document.querySelector("#abort-btn");

downloadBtn.addEventListener("click", downloadFile);

abortBtn.addEventListener("click", () => {
    if (controller) {
        controller.abort('User Aborted the Download Action');
        console.log("Download aborted");
    }
});

async function downloadFile() {
    controller = new AbortController();
    const signal = controller.signal;
    try {
        console.log("Downloading...");
        setTimeout(async () => {
            const response = await fetch(url, { signal });
            console.log("Download complete", response);

            // Download code
            const blob = await response.blob();
            const objectUrl = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = objectUrl;
            link.download = "file.txt";
            link.click();
            URL.revokeObjectURL(objectUrl);
        }, 2000);
    } catch (err) {
        console.error(`Download error: ${err.message}`);
    }
}
