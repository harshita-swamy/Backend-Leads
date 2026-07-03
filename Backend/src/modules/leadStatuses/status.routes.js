import express from "express";

import {
  getAllStatuses,
  getStatusById,
  createStatus,
  updateStatus,
  deleteStatus,
} from "./status.controller.js";

import {
  createStatusValidation,
  statusIdValidation,
} from "./status.validation.js";

const router = express.Router();

router.get(
  "/lead-statuses",
  getAllStatuses
);

router.get(
  "/lead-statuses/:id",
  statusIdValidation,
  getStatusById
);

router.post(
  "/lead-statuses",
  createStatusValidation,
  createStatus
);

router.put(
  "/lead-statuses/:id",
  statusIdValidation,
  updateStatus
);

router.delete(
  "/lead-statuses/:id",
  statusIdValidation,
  deleteStatus
);

export default router;