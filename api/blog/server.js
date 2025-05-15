const jsonServer = require("json-server");
const fs = require("fs");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post("/login", (req, res) => {
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);

    res.json({
        message: "LoggedIn successfully!"
    });
});

server.use(router);

server.listen(3000, () => {
    console.log("✅ JSON Server running at http://localhost:3000");
});
