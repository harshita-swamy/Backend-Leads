import express from "express";
import * as installmentController from "./installment.controller.js";

const router = express.Router();

router.post(
  "/createInstallment",
  installmentController.createInstallment
);

router.get(
  "/getInstallments/:student_id",
  installmentController.getInstallments
);

router.put(
  "/markInstallmentPaid/:id",
  installmentController.markInstallmentPaid
);

router.delete(
  "/deleteInstallment/:id",
  installmentController.deleteInstallment
);

export default router;