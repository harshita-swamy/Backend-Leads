import express from "express";
import * as studentController from "./student.controller.js";
import {
  createStudentValidation,
  updateStudentValidation,
  studentIdValidation,
}
from "./student.validation.js";

const router = express.Router();

router.post(
  "/createStudent",
  createStudentValidation,
  studentController.createStudent
);

router.get(
  "/getAllStudents",
  studentController.getAllStudents
);

router.get(
  "/getStudent/:id",
  studentIdValidation,
  studentController.getStudentById
);

router.put(
  "/updateStudent/:id",
  updateStudentValidation,
  studentController.updateStudent
);

router.delete(
  "/deleteStudent/:id",
  studentIdValidation,
  studentController.deleteStudent
);

export default router;