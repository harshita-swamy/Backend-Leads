import { body, param } from "express-validator";

export const createLeadValidation = [
  body("person_id")
    .notEmpty()
    .withMessage("Person ID is required"),

  body("course_id")
    .notEmpty()
    .withMessage("Course ID is required"),

  body("source_id")
    .notEmpty()
    .withMessage("Source ID is required"),

  body("status_id")
    .notEmpty()
    .withMessage("Status ID is required"),

  body("assigned_to")
    .notEmpty()
    .withMessage("Assigned To is required"),

  body("entry_type")
    .notEmpty()
    .withMessage("Entry Type is required"),

  body("priority")
    .notEmpty()
    .withMessage("Priority is required"),
];

export const updateLeadValidation = [
  param("id")
    .isInt()
    .withMessage("Invalid Lead ID"),

  body("person_id")
    .notEmpty()
    .withMessage("Person ID is required"),

  body("course_id")
    .notEmpty()
    .withMessage("Course ID is required"),

  body("source_id")
    .notEmpty()
    .withMessage("Source ID is required"),

  body("status_id")
    .notEmpty()
    .withMessage("Status ID is required"),

  body("assigned_to")
    .notEmpty()
    .withMessage("Assigned To is required"),

  body("entry_type")
    .notEmpty()
    .withMessage("Entry Type is required"),

  body("priority")
    .notEmpty()
    .withMessage("Priority is required"),
];

export const leadIdValidation = [
  param("id")
    .isInt()
    .withMessage("Invalid Lead ID"),
];