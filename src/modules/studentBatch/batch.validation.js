import { body } from "express-validator";

export const createBatchValidation = [
  body("student_id")
    .isInt()
    .withMessage("Student ID required"),

  body("batch_id")
    .isInt()
    .withMessage("Batch ID required"),
];