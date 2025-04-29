const jsonServer = require("json-server");
const fs = require("fs");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

// ✅ Custom route to return unique shop IDs
server.get("/api/pizzahub", (req, res) => {
    const db = JSON.parse(fs.readFileSync("db.json", "utf-8"));
    const pizzas = db.pizzas || [];
    const shops = db.shops || {};

    const shopIds = [
        ...new Set(
            pizzas.map((p) => p.shopId).filter((shopId) => shops[shopId])
        ),
    ];
    res.json(shopIds);
});

// ✅ Rewrites for other custom API paths
server.use(
    jsonServer.rewriter({
        "/api/pizzahub/pizzas": "/pizzas",
        "/api/pizzahub/pizzas/:shopId": "/pizzas?shopId=:shopId",
        "/api/pizzahub/beverages/:pizzaid": "/beverages?pizzaId=:pizzaid",
    })
);

// JSON Server router
server.use(router);

// Start the server
server.listen(3000, () => {
    console.log("✅ JSON Server running at http://localhost:3000");
});
