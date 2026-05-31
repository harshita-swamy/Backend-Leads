import { body } from "express-validator";

export const createAttendanceValidation = [
  body("student_batch_id")
    .isInt()
    .withMessage("Student Batch ID required"),

  body("attendance_date")
    .notEmpty()
    .withMessage("Attendance Date required"),

  body("status")
    .isIn([
      "present",
      "absent",
      "late",
      "leave",
    ])
    .withMessage("Invalid status"),
];