import { body } from "express-validator";

export const createInstallmentValidation = [
  body("student_id")
    .isInt()
    .withMessage("Student ID required"),

  body("fee_structure_id")
    .isInt()
    .withMessage("Fee Structure ID required"),

  body("installment_no")
    .isInt()
    .withMessage("Installment Number required"),

  body("amount_due")
    .isNumeric()
    .withMessage("Amount Due required"),

  body("due_date")
    .notEmpty()
    .withMessage("Due Date required"),
];