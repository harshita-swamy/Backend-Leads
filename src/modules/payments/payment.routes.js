import express from "express";
import * as paymentController from "./payment.controller.js";

const router = express.Router();

router.post(
  "/createPayment",
  paymentController.createPayment
);

router.get(
  "/getPayments/:student_id",
  paymentController.getPayments
);

router.delete(
  "/deletePayment/:id",
  paymentController.deletePayment
);

export default router;