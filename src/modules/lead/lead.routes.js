import express from "express";
import * as leadController from './lead.controller.js'

const router = express.Router();

router.post("/createLead", leadController.createLead);
router.get("/getAllLeads", leadController.getAllLeads);
router.put("/updateLead/:id", leadController.updateLeadStatus);
router.delete("/deleteLead/:id", leadController.deleteLeads);
router.post("/linkedin-webhook", leadController.linkedInWebhook);                

export default router;  




