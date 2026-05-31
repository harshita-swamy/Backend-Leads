import express from "express";
import * as certificateController from "./certificate.controller.js";

const router = express.Router();

router.post(
  "/createCertificate",
  certificateController.createCertificate
);

router.get(
  "/getCertificate/:student_id",
  certificateController.getCertificate
);

router.get(
  "/getAllCertificates",
  certificateController.getAllCertificates
);

router.delete(
  "/deleteCertificate/:id",
  certificateController.deleteCertificate
);

export default router;