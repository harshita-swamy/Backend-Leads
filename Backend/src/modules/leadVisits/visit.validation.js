import { body, param } from "express-validator";

export const createVisitValidation = [
  body("lead_id")
    .isInt()
    .withMessage("Lead ID required"),

  body("visited_by")
    .isInt()
    .withMessage("Visited By required"),

  body("visit_date")
    .notEmpty()
    .withMessage("Visit Date required"),
];

export const visitIdValidation = [
  param("id")
    .isInt()
    .withMessage("Valid Visit ID required"),
];