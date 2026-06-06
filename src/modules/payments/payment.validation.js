import { body, param } from "express-validator";

export const createPaymentValidation = [
  body("student_id")
    .isInt()
    .withMessage("Student ID required"),

  body("amount")
    .isNumeric()
    .withMessage("Amount required"),

  body("payment_method")
    .notEmpty()
    .withMessage("Payment method required"),

  body("collected_by")
    .isInt()
    .withMessage("Collected By required"),

  body("payment_date")
    .notEmpty()
    .withMessage("Payment Date required"),
];

export const paymentIdValidation = [
  param("id")
    .isInt()
    .withMessage("Valid Payment ID required"),
];

export const updatePaymentValidation = [
  param("id")
    .isInt()
    .withMessage("Valid Payment ID required"),

  body("student_id")
    .isInt()
    .withMessage("Student ID required"),

  body("amount")
    .isNumeric()
    .withMessage("Amount required"),

  body("payment_method")
    .notEmpty()
    .withMessage("Payment method required"),

  body("collected_by")
    .isInt()
    .withMessage("Collected By required"),

  body("payment_date")
    .notEmpty()
    .withMessage("Payment Date required"),
];