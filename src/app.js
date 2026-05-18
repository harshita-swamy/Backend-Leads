import express from "express";
import cors from "cors";
import routeLead from "./modules/lead/lead.routes.js";
import path from "path";
import { fileURLToPath } from "url";
import followupRoutes from "./modules/leadfollowup/followup.routes.js";
import assignmentLogRoutes from "./modules/leadAssignmentLogs/assignmentLog.routes.js";
import statusRoutes from "./modules/leadStatuses/status.routes.js";
import sourceRoutes from "./modules/leadSources/source.routes.js";
import visitRoutes from "./modules/leadVisits/visit.routes.js";

const app = express();

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Health check route
app.get("/test", (req, res) => {
  res.send("API WORKING 🚀");
});

// Routes
app.use("/api", routeLead);
app.use("/api", followupRoutes);
app.use("/api", assignmentLogRoutes);
app.use("/api", statusRoutes);
app.use("/api", sourceRoutes);
app.use("/api", visitRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;