import cors from "cors";
import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: ["http://localhost:3000", "http://127.0.0.1:3000"] }));

app.get("/", (req, res) => {
  res.json({ message: "TODO", p: process.env.MONGOOSE_LIVE_URI });
});

export default app;
