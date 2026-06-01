import express from "express";
import * as feeStructureController from "./feeStructure.controller.js";

const router = express.Router();

router.post(
  "/createFeeStructure",
  feeStructureController.createFeeStructure
);

router.get(
  "/getAllFeeStructures",
  feeStructureController.getAllFeeStructures
);

router.get(
  "/getFeeStructure/:id",
  feeStructureController.getFeeStructure
);

router.delete(
  "/deleteFeeStructure/:id",
  feeStructureController.deleteFeeStructure
);

export default router;