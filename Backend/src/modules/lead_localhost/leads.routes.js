import express from "express";
import * as leadController from "./leads.controller.js";
import {
  createLeadValidation,
  updateLeadValidation,
  leadIdValidation,
} from "./leads.validation.js";

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

// Get Lead By ID
router.get(
  "/getLeadById/:id",
  leadIdValidation,
  leadController.getLeadById
);

// Update Lead
router.put(
  "/updateLead/:id",
  updateLeadValidation,
  leadController.updateLead
);

// Delete Lead
router.delete(
  "/deleteLead/:id",
  leadIdValidation,
  leadController.deleteLead
);

export default router;