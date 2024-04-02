import cors from "cors";
import express from "express";
import path from "path";

const app = express();

const fe = path.join(__dirname, app.jsx)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: ["http://localhost:3000", "http://127.0.0.1:3000"] }));

app.get("/", (req, res) => {
  res.sendFile(( 'App.jsx' ));
});

export default app;
