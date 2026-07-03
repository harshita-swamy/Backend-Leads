import { body, param } from "express-validator";

// Create
export const createFeeStructureValidation = [
  body("course_id")
    .isInt()
    .withMessage("Course ID is required"),

  body("name")
    .notEmpty()
    .withMessage("Name is required"),

  body("total_amount")
    .isNumeric()
    .withMessage("Total Amount is required"),

  body("installments")
    .isInt()
    .withMessage("Installments is required"),
];

// Update
export const updateFeeStructureValidation = [
  param("id")
    .isInt()
    .withMessage("Valid Fee Structure ID required"),

  body("course_id")
    .optional()
    .isInt()
    .withMessage("Course ID must be number"),

  body("name")
    .optional()
    .notEmpty()
    .withMessage("Name cannot be empty"),

  body("total_amount")
    .optional()
    .isNumeric()
    .withMessage("Total Amount must be numeric"),

  body("installments")
    .optional()
    .isInt()
    .withMessage("Installments must be number"),
];

// Get By Id / Delete By Id
export const feeStructureIdValidation = [
  param("id")
    .isInt()
    .withMessage("Valid Fee Structure ID required"),
];