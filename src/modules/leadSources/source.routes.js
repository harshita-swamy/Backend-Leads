import express from "express";

import {
  getAllSources,
  createSource,
  updateSource
} from "./source.controller.js";

const router = express.Router();

router.get("/lead-sources", getAllSources);

router.post("/lead-sources", createSource);

router.put("/lead-sources/:id", updateSource);

export default router;