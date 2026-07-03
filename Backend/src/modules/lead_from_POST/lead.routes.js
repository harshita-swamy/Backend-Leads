import express from "express";
import * as leadController from "./lead.controller.js";

import {
  createLeadValidation,
  updateStatusValidation,
  leadIdValidation,
} from "./lead.validation.js";

const router = express.Router();

// Create Lead
router.post(
  "/createLead",
  createLeadValidation,
  leadController.createLead
);

// Get All Leads
router.get(
  "/getAllLeads",
  leadController.getAllLeads
);

// Get Lead By Id
router.get(
  "/getLead/:id",
  leadIdValidation,
  leadController.getLeadById
);

// Update Lead Status
router.put(
  "/updateLead/:id",
  updateStatusValidation,
  leadController.updateLeadStatus
);

// Delete Lead
router.delete(
  "/deleteLead/:id",
  leadIdValidation,
  leadController.deleteLeads
);

// LinkedIn Webhook
router.post(
  "/linkedin-webhook",
  leadController.linkedInWebhook
);

export default router;