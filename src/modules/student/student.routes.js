import express from "express";
import * as studentController from "./student.controller.js";

const router = express.Router();

router.post(
  "/createStudent",
  studentController.createStudent
);

router.get(
  "/getAllStudents",
  studentController.getAllStudents
);

router.get(
  "/getStudent/:id",
  studentController.getStudentById
);

router.delete(
  "/deleteStudent/:id",
  studentController.deleteStudent
);

export default router;