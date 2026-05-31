import express from "express";
import * as attendanceController from "./attendance.controller.js";

const router = express.Router();

router.post(
  "/createAttendance",
  attendanceController.createAttendance
);

router.get(
  "/getAttendance/:student_batch_id",
  attendanceController.getAttendance
);

router.delete(
  "/deleteAttendance/:id",
  attendanceController.deleteAttendance
);

export default router;