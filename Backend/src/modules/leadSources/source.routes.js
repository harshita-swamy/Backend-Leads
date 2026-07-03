import express from "express";

import {
  getAllSources,
  getSourceById,
  createSource,
  updateSource,
  deleteSource,
} from "./source.controller.js";

import {
  createSourceValidation,
  sourceIdValidation,
} from "./source.validation.js";

const router = express.Router();

router.get(
  "/lead-sources",
  getAllSources
);

router.get(
  "/lead-sources/:id",
  sourceIdValidation,
  getSourceById
);

router.post(
  "/lead-sources",
  createSourceValidation,
  createSource
);

router.put(
  "/lead-sources/:id",
  sourceIdValidation,
  updateSource
);

router.delete(
  "/lead-sources/:id",
  sourceIdValidation,
  deleteSource
);

export default router;