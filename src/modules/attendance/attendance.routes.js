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

router.get(
  "/getAttendanceById/:id",
  attendanceController.getAttendanceById
);

router.get(
  "/getAllAttendance",
  attendanceController.getAllAttendance
);

router.put(
  "/updateAttendance/:id",
  attendanceController.updateAttendance
);

router.delete(
  "/deleteAttendance/:id",
  attendanceController.deleteAttendance
);

export default router;