import { body } from "express-validator";

export const createFeeStructureValidation = [
  body("course_id")
    .isInt()
    .withMessage("Course ID required"),

  body("name")
    .notEmpty()
    .withMessage("Name required"),

  body("total_amount")
    .isNumeric()
    .withMessage("Amount required"),

  body("installments")
    .isInt()
    .withMessage("Installments required"),
];