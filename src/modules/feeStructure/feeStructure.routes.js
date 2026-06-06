import express from "express";
import * as feeStructureController from "./feeStructure.controller.js";

import {
  createFeeStructureValidation,
  updateFeeStructureValidation,
  feeStructureIdValidation,
} from "./feeStructure.validation.js";

const router = express.Router();

// Create
router.post(
  "/createFeeStructure",
  createFeeStructureValidation,
  feeStructureController.createFeeStructure
);

// Get All
router.get(
  "/getAllFeeStructures",
  feeStructureController.getAllFeeStructures
);

// Get By Id
router.get(
  "/getFeeStructure/:id",
  feeStructureIdValidation,
  feeStructureController.getFeeStructure
);

// Update By Id
router.put(
  "/updateFeeStructure/:id",
  updateFeeStructureValidation,
  feeStructureController.updateFeeStructure
);

// Delete By Id
router.delete(
  "/deleteFeeStructure/:id",
  feeStructureIdValidation,
  feeStructureController.deleteFeeStructure
);

export default router;