import express from "express";

import {
  getAllStatuses,
  createStatus,
  updateStatus
} from "./status.controller.js";

const router = express.Router();

router.get("/lead-statuses", getAllStatuses);

router.post("/lead-statuses", createStatus);

router.put("/lead-statuses/:id", updateStatus);

export default router;