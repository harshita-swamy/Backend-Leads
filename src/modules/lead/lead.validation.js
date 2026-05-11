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
    .notEmpty()
    .withMessage("Course ID is required")
    .isInt()
    .withMessage("Course ID must be a number"),

  body("source_id")
    .notEmpty()
    .withMessage("Source ID is required")
    .isInt()
    .withMessage("Source ID must be a number"),

  body("priority")
    .optional()
    .isIn(["low", "medium", "high"])
    .withMessage("Priority must be low, medium, or high"),
];

// Update Status Validation
export const updateStatusValidation = [
  param("id")
    .isInt()
    .withMessage("Valid lead ID required"),

  body("status_id")
    .notEmpty()
    .withMessage("Status ID required")
    .isInt()
    .withMessage("Status ID must be a number"),
];