import { body, param } from "express-validator";

export const validateAssignLead = [
  body("assigned_to")
    .isInt()
    .withMessage("assigned_to required"),

  body("assigned_by")
    .isInt()
    .withMessage("assigned_by required"),
];

export const assignmentIdValidation = [
  param("id")
    .isInt()
    .withMessage("Valid ID required"),
];