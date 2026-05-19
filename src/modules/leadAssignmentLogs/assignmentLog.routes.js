import express from "express";
import { validateAssignLead } from "./assignment.validation.js";
import {
  assignLead,
  getAssignmentHistory,
} from "./assignmentLog.controller.js";

const router = express.Router();

// Assign lead
router.post(
  "/leads/:id/assign",
  validateAssignLead,
  assignLead
);

// Assignment history
router.get(
  "/leads/:id/assignment-history",
  getAssignmentHistory
);

export default router;