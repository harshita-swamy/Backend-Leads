import { body, param } from "express-validator";

export const createLeadValidation = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("phone").notEmpty().withMessage("Phone is required"),
  body("course_id").notEmpty().withMessage("Course ID is required"),
  body("source_id").notEmpty().withMessage("Source ID is required"),
  body("priority")
    .optional()
    .isIn(["low", "medium", "high"])           
    .withMessage("Priority must be low, medium, or high"),
];       

export const updateStatusValidation = [
  param("id").isInt().withMessage("Valid lead ID required"),
  body("status_id").notEmpty().withMessage("Status ID required"),
];       