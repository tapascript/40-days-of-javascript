// Mistake 1 - Looping with Promises

const ids = ["1", "2", "3", "4"];

const fetchData = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
};

const loopFetches = () => {
    for (let i = 0; i < ids.length; i++) {
        console.log(`*** Fetching details of ${ids[i]} ***`);
        const response = fetchData(ids[i]);
        response.then((response) => {
            response.json().then((data) => {
                console.log(
                    `
                    Name: ${data?.name}
                    Company:${data?.company?.name}
                    Address: ${data?.address?.city}
                    `
                );
            });
        });
    }
};

// loopFetches();

const loopFetchesAsync = async () => {
    for (let i = 0; i < ids.length; i++) {
        console.log(`=== Fetching details of ${ids[i]} ===`);
        const response = await fetchData(ids[i]);
        const data = await response.json();
        console.log(
            `
                Name: ${data?.name}
                Company:${data?.company?.name}
                Address: ${data?.address?.city}
            `
        );
    }
};

// loopFetchesAsync();

const loopAll = async () => {
    const responses = await Promise.allSettled(ids.map((id) => fetchData(id)));
    const data = await Promise.allSettled(
        responses.map((response) => response.value.json())
    );
    console.log(data);
    data.map((userInfo) => {
        const user = userInfo.value;
        console.log(`*** Fetching details of ${user?.name} ***`);
        console.log(
            `
                Name: ${user?.name}
                Company:${user?.company?.name}
                Address: ${user?.address?.city}
            `
        );
    });
};

loopAll();

// Mistake 2 - Promise Chain vs. No Chain

// Chain
const ten = new Promise((resolve, reject) => {
    resolve(10);
});

ten.then((result) => {
    // returns 20
    return result + 10;
})
    .then((result) => {
        // returns 200
        return result * 10;
    })
    .then((result) => {
        // returns 190
        return result - 10;
    })
    .then((result) => {
        // logs 190 in console
        console.log(result);
    });

// No Chain
ten.then((result) => {
    // returns 20
    return result + 10;
});
ten.then((result) => {
    // returns 100
    return result * 10;
});
ten.then((result) => {
    // returns 0
    return result - 10;
});
ten.then((result) => {
    // logs 10 in the console.
    console.log(result);
});

// Mistake 3 - (Not)Handling Errors with Promises

const oddEven = (num) => {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve("Even");
        } else {
            reject(new Error("Odd"));
        }
    });
};

oddEven(10).then((result) => {
    console.log(result);
});

oddEven(11)
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.error(err.message);
    });

// Mistake 4 - Missing a function in .then() handler

const hello = Promise.resolve("Hello");
hello.then("World").then((result) => console.log(result));
hello.then(() => "World").then((result) => console.log(result));

// Mistake 5 - Using Promises for Synchronous Operations
const cache = {
    "tapas@email.com": {
        name: "Tapas Adhikary",
        org: "tapaScript",
    },
};

const getDataV1 = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userFromCache = cache[email];
            if (!userFromCache) {
                // Make the call to fetch user data
                // update cache
                console.log("Make the call and update cache");
            } else {
                console.log(`User details ${JSON.stringify(userFromCache)}`);
            }
        }, 2000);
    });
};

getDataV1("tapas@email.com");

const getDataV2 = (email) => {
    const userFromCache = cache[email];
    if (userFromCache) {
        console.log(`User details ${JSON.stringify(userFromCache)}`);
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Make the call and update cache");
            }, 2000);
        });
    }
};

getDataV2("tapas@email.com");

// Mistake 6 - Using unnecessary try-catch with promises

// Redundant try-catch
new Promise((resolve, reject) => {
    try {
        const value = getValue();
        // do something with value
        resolve(value);
    } catch (e) {
        reject(e);
    }
})
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

// Better Way
new Promise((resolve, reject) => {
    const value = getValue();
    // do something with value
    resolve(value);
})
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
