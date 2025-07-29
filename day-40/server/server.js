const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(require("cors")());

const DB_FILE = "data/db.json";

// Read from JSON file
app.get("/api/data", (req, res) => {
  fs.readFile(DB_FILE, (err, data) => {
    if (err) return res.status(500).send("Failed to read data.");
    res.json(JSON.parse(data));
  });
});

// Write to JSON file
app.post("/api/data", (req, res) => {
  fs.writeFile(DB_FILE, JSON.stringify(req.body, null, 2), err => {
    if (err) return res.status(500).send("Failed to save data.");
    res.send("Data saved.");
  });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
