import { body, param } from "express-validator";

// Create Lead Validation
export const createLeadValidation = [
  body("name")
    .notEmpty()
    .withMessage("Name is required"),

  body("email")
    .isEmail()
    .withMessage("Valid email is required"),

  body("phone")
    .notEmpty()
    .withMessage("Phone is required")
    .isLength({ min: 10, max: 15 })
    .withMessage("Phone must be 10 to 15 digits"),

  body("course_id")
    .isInt()
    .withMessage("Course ID required"),

  body("source_id")
    .isInt()
    .withMessage("Source ID required"),

  body("priority")
    .optional()
    .isIn(["low", "medium", "high"])
    .withMessage(
      "Priority must be low, medium or high"
    ),
];

// Lead ID Validation
export const leadIdValidation = [
  param("id")
    .isInt()
    .withMessage("Valid Lead ID required"),
];

// Update Status Validation
export const updateStatusValidation = [
  param("id")
    .isInt()
    .withMessage("Valid Lead ID required"),

  body("status_id")
    .isInt()
    .withMessage("Status ID required"),
];