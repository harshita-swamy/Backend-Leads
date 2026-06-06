import express from "express";
import * as paymentController from "./payment.controller.js";

import {
  createPaymentValidation,
  updatePaymentValidation,
  paymentIdValidation,
} from "./payment.validation.js";

const router = express.Router();

router.post(
  "/createPayment",
  createPaymentValidation,
  paymentController.createPayment
);

router.get(
  "/getAllPayments",
  paymentController.getAllPayments
);

router.get(
  "/getPayment/:id",
  paymentIdValidation,
  paymentController.getPaymentById
);

router.put(
  "/updatePayment/:id",
  updatePaymentValidation,
  paymentController.updatePayment
);

router.delete(
  "/deletePayment/:id",
  paymentIdValidation,
  paymentController.deletePayment
);

export default router;