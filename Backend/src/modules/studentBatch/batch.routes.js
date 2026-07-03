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
  "/getStudentBatch/:id",
  batchController.getStudentBatch
);

router.put(
  "/updateStudentBatch/:id",
  batchController.updateStudentBatch
);

router.delete(
  "/deleteStudentBatch/:id",
  batchController.deleteStudentBatch
);

export default router;