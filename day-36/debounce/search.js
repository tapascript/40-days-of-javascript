const data = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

function searchArray(query) {
    console.log("Search Executed", performance.now());

    const resultBox = document.getElementById("results");

    const filtered = data.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
    );

    if (!query.trim()) {
        resultBox.innerHTML = "";
        return;
    }

    const limited = filtered.slice(0, 20); // Limit to first 20 matches
    resultBox.innerHTML = `
        <strong>Showing ${limited.length} of ${
        filtered.length
    } result(s)</strong>
        <ul>${limited.map((item) => `<li>${item}</li>`).join("")}</ul>
      `;
}

// Ordinary Search
const doSearch = (e) => {
    const query = e.target.value;
    searchArray(query);
};

const debouncedSearch = debounce((e) => {
    const query = e.target.value;
    searchArray(query);
}, 500);

document.getElementById("search").addEventListener("input", debouncedSearch);
