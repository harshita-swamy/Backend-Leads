import * as leadService from "./lead.service.js";
import * as response from "../../utils/response.util.js";

// Create Lead API
export const createLead = async (req, res) => {
  try {
    const result = await leadService.createLeadService(req.body);

    if (!result.success) {
      return res.status(409).json({
        success: false,
        message: result.message,
      });
    }

    return response.success(res, result, "Lead Created Successfully");
  } catch (err) {
    return response.error(res, err);
  }
};

// Get All Leads (exclude deleted if soft delete used)
export const getAllLeads = async (req, res) => {
  try {
    const data = await leadService.getAllLeadsService();
    return response.success(res, data);
  } catch (err) {
    return response.error(res, err);
  }
};

// Update Lead Status
export const updateLeadStatus = async (req, res) => {
  try {
    const data = await leadService.updateLeadStatusService(
      req.params.id,
      req.body.status_id
    );

    return response.success(res, data, "Status Updated Successfully");
  } catch (err) {
    return response.error(res, err);
  }
};

// Soft Delete Lead (IMPORTANT FIX)
export const deleteLeads = async (req, res) => {
  try {
    const data = await leadService.deleteLeadService(req.params.id);
    return response.success(res, data, "Lead Deleted Successfully (Soft Delete)");
  } catch (err) {
    return response.error(res, err);
  }
};

// LinkedIn Webhook (no major change, just safe logging)
export const linkedInWebhook = async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const result = await leadService.createLeadService({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      course_id: 1,
      source_id: 2,
      priority: "high",
      notes: "From LinkedIn webhook",
    });

    return res.json(result);

  } catch (err) {
    console.error("🔥 FULL ERROR:", err);

    return res.status(500).json({
      success: false,
      message: err.message,
      stack: err.stack
    });
  }
};