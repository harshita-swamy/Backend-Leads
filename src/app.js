import express from "express";
import cors from "cors";
import routeLead from "./modules/lead/lead.routes.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors()); // 👈 ये line जरूरी है
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/Testing", (req, res) => {
  res.send("API WORKING");
});

app.use("/api", routeLead);

export default app;