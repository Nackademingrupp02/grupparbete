const cors = require("cors");
const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "build")));

app.use(cors({ origin: ["http://localhost:3000", "http://127.0.0.1:3000", "http://localhost:5173", "http://localhost:5174", "https://grupparbete-1-frontend.onrender.com"] }));

app.get("/", (req, res) => {
  res.send("Hello");
});

module.exports = app;
