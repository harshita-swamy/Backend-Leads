import express from "express";
import * as batchController from "./batch.controller.js";

const router = express.Router();

router.post(
  "/createStudentBatch",
  batchController.createStudentBatch
);

router.get(
  "/getAllStudentBatches",
  batchController.getAllStudentBatches
);

router.get(
  "/getStudentBatch/:student_id",
  batchController.getStudentBatch
);

router.delete(
  "/deleteStudentBatch/:id",
  batchController.deleteStudentBatch
);

export default router;