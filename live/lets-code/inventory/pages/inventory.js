console.log("Inventory");

const container = document.getElementById("productContainer");
const loading = document.getElementById("loading");
const errorElem = document.getElementById("error");
const inventoryChart = document.getElementById("inventoryChart");

/** Getting Current Stock Data of a Product */
async function getCurrentStock(productId) {
    const product = await apiRequest(
        `http://localhost:3001/products/${productId}`
    );
    return product?.stock;
}

/** Attach All handlers */
function addRestockListeners() {
    const buttons = document.querySelectorAll(".restock-btn");
    buttons.forEach((button) => {
        button.addEventListener("click", async () => {
            const id = parseInt(button.dataset.id);
            await restockItem(id);
        });
    });
}

/** Restock item by increasing stock */
async function restockItem(productId) {
    const currentStock = await getCurrentStock(productId);
    const data = await apiRequest(
        `http://localhost:3001/products/${productId}`,
        "PATCH",
        { stock: currentStock + 5 }
    );
    console.log(data);
    displayProducts();
}

/** Display products */
async function displayProducts() {
    try {
        const products = await apiRequest("http://localhost:3001/products");

        container.innerHTML = "";

        products.forEach((product) => {
            container.innerHTML += `
          <div class="bg-white p-4 rounded shadow">
            <h3 class="text-lg font-semibold mb-2">${product.name}</h3>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Stock:</strong> <span id="stock-${product.id}">${
                product.stock
            }</span></p>
            <p><strong>Sold:</strong> ${product.sold}</p>
            <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
            <p class="text-sm text-gray-600 mt-2">Last Updated: ${
                product.lastUpdated
            }</p>
            <button data-id=${
                product.id
            } class="restock-btn mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Restock</button>
          </div>`;
        });
        addRestockListeners();
        renderChart(products);
    } catch (error) {
        const message = error.message;
        console.error(message);
        errorElem.textContent = message;
    } finally {
        loading.textContent = "";
    }
}

/** Render chart showing stock vs sold */
function renderChart(products) {
    const ctx = inventoryChart.getContext("2d");
    const labels = products.map((p) => p.name);
    const stockData = products.map((p) => p.stock);
    const soldData = products.map((p) => p.sold);

    if (
        window.inventoryChart &&
        typeof window.inventoryChart.destroy === "function"
    ) {
        window.inventoryChart.destroy(); // clear existing chart safely
    } else if (window.inventoryChart) {
        window.inventoryChart = null; // ensure proper reinitialization if chart is not valid
    }

    window.inventoryChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels,
            datasets: [
                {
                    label: "Stock",
                    data: stockData,
                    backgroundColor: "#3B82F6",
                },
                {
                    label: "Sold",
                    data: soldData,
                    backgroundColor: "#10B981",
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "top",
                },
            },
        },
    });
}

displayProducts();

async function apiRequest(url, method = "GET", body = null) {
    try {
        loading.textContent = "Loading...";

        const options = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (body) {
            options.body = JSON.stringify(body);
        }

        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(
                `API error: ${response.status} ${response.statusText}`
            );
        }

        return await response.json(); // success
    } catch (error) {
        console.error(error.message);
        errorElem.textContent = error.message;
    } finally {
        loading.textContent = "";
    }
}
