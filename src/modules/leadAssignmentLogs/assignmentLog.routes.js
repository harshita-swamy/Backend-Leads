import express from "express";

import {
  validateAssignLead,
  assignmentIdValidation,
} from "./assignment.validation.js";

import {
  assignLead,
  getAssignmentHistory,
  getAssignmentLogById,
  updateAssignmentLog,
  deleteAssignmentLog,
} from "./assignmentLog.controller.js";


const router = express.Router();

router.post(
  "/leads/:id/assign",
  validateAssignLead,
  assignLead
);

router.get(
  "/leads/:id/assignment-history",
  assignmentIdValidation,
  getAssignmentHistory
);

router.get(
  "/assignment-log/:id",
  assignmentIdValidation,
  getAssignmentLogById
);

router.put(
  "/assignment-log/:id",
  assignmentIdValidation,
  updateAssignmentLog
);

router.delete(
  "/assignment-log/:id",
  assignmentIdValidation,
  deleteAssignmentLog
);

export default router;