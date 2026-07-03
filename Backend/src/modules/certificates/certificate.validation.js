import { body } from "express-validator";

export const createCertificateValidation = [
  body("student_id")
    .isInt()
    .withMessage("Student ID required"),

  body("course_id")
    .isInt()
    .withMessage("Course ID required"),

  body("certificate_number")
    .notEmpty()
    .withMessage("Certificate Number required"),
];