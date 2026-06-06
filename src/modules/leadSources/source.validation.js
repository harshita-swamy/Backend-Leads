import {
  body,
  param,
} from "express-validator";

export const createSourceValidation =
  [
    body("name")
      .notEmpty()
      .withMessage(
        "Source name required"
      ),
  ];

export const sourceIdValidation =
  [
    param("id")
      .isInt()
      .withMessage(
        "Valid Source ID required"
      ),
  ];