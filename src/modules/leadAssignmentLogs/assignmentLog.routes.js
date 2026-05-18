import express from "express";
import {
  assignLead,
  getAssignmentHistory
} from "./assignmentLog.controller.js";

const router = express.Router();

// Assign lead
router.post("/leads/:id/assign", assignLead);

// Assignment history
router.get("/leads/:id/assignment-history", getAssignmentHistory);

export default router;