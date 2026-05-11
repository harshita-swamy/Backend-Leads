import express from "express";
import * as leadController from "./lead.controller.js";

const router = express.Router();

// Create Lead
router.post("/createLead", leadController.createLead);

// Get All Leads
router.get("/getAllLeads", leadController.getAllLeads);

// Update Lead Status
router.put("/updateLead/:id", leadController.updateLeadStatus);

// Soft Delete Lead
router.delete("/deleteLead/:id", leadController.deleteLeads);

// LinkedIn Webhook
router.post("/linkedin-webhook", leadController.linkedInWebhook);

export default router;