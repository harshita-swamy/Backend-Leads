import express from "express";

import {
  createVisit,
  getVisits
} from "./visit.controller.js";

const router = express.Router();

router.post("/leads/:id/visit", createVisit);

router.get("/leads/:id/visits", getVisits);

export default router;