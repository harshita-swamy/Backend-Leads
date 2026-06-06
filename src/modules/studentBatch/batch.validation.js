import {
  body,
  param,
} from "express-validator";

export const createBatchValidation =
  [
    body("student_id")
      .isInt()
      .withMessage(
        "Student ID required"
      ),

    body("batch_id")
      .isInt()
      .withMessage(
        "Batch ID required"
      ),
  ];

export const batchIdValidation =
  [
    param("id")
      .isInt()
      .withMessage(
        "Valid Batch ID required"
      ),
  ];