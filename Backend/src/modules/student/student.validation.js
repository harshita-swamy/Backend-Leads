import { body, param } from "express-validator";

export const createStudentValidation = [
  body("person_id")
    .isInt()
    .withMessage("Person ID is required"),

  body("enrollment_number")
    .notEmpty()
    .withMessage(
      "Enrollment Number is required"
    ),

  body("admission_date")
    .notEmpty()
    .withMessage(
      "Admission Date is required"
    ),
];

export const updateStudentValidation = [
  param("id")
    .isInt()
    .withMessage(
      "Valid Student ID required"
    ),

  body("person_id")
    .isInt()
    .withMessage("Person ID is required"),

  body("enrollment_number")
    .notEmpty()
    .withMessage(
      "Enrollment Number is required"
    ),

  body("admission_date")
    .notEmpty()
    .withMessage(
      "Admission Date is required"
    ),
];

export const studentIdValidation = [
  param("id")
    .isInt()
    .withMessage(
      "Valid Student ID required"
    ),
];