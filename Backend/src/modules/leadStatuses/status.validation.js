import {
  body,
  param,
} from "express-validator";

export const createStatusValidation =
  [
    body("name")
      .notEmpty()
      .withMessage(
        "Status name required"
      ),
  ];

export const statusIdValidation =
  [
    param("id")
      .isInt()
      .withMessage(
        "Valid Status ID required"
      ),
  ];