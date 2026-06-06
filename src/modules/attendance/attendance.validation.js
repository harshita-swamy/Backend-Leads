import { body, param } from "express-validator";

export const createAttendanceValidation = [
  body("student_batch_id")
    .isInt()
    .withMessage("Student Batch ID required"),

  body("date")
    .notEmpty()
    .withMessage("Date required"),

  body("status")
    .isIn([
      "present",
      "absent",
      "late",
      "leave",
    ])
    .withMessage("Invalid status"),
];

export const attendanceIdValidation = [
  param("id")
    .isInt()
    .withMessage("Valid Attendance ID required"),
];

export const updateAttendanceValidation = [
  param("id")
    .isInt()
    .withMessage("Valid Attendance ID required"),
];