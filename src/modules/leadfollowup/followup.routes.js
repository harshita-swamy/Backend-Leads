import express from "express";

import {
  createFollowup,
  getLeadFollowups,
  updateFollowup,
  deleteFollowup,
} from "./followup.controller.js";

const router = express.Router();

// Create Followup
router.post("/leads/:id/followup", createFollowup);

// Get Lead Followups
router.get("/leads/:id/followups", getLeadFollowups);

// Update Followup
router.put("/followups/:id", updateFollowup);

// Delete Followup
router.delete("/followups/:id", deleteFollowup);

export default router;