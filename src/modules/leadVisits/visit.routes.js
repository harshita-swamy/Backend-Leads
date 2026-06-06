import express from "express";
import * as visitController from "./visit.controller.js";

const router = express.Router();

router.post(
  "/createVisit",
  visitController.createVisit
);

router.get(
  "/getAllVisits",
  visitController.getAllVisits
);

router.get(
  "/getVisit/:id",
  visitController.getVisitById
);

router.put(
  "/updateVisit/:id",
  visitController.updateVisit
);

router.delete(
  "/deleteVisit/:id",
  visitController.deleteVisit
);

export default router;