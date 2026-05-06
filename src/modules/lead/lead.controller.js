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


// Get All Leads
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


// Delete Lead
export const deleteLeads = async (req, res) => {
  try {
    const data = await leadService.deleteLeadService(req.params.id);
    return response.success(res, data, "Lead Deleted Successfully");
  } catch (err) {
    return response.error(res, err);
  }
};

// LinkedIn Webhook
export const linkedInWebhook = async (req, res) => {
  try {
    const result = await leadService.createLeadService({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      course_id: 1,
      source_id: 2,
      priority: "high",
      notes: "From LinkedIn webhook",
    });

    return res.json({
      success: true,
      message: "Lead received from LinkedIn",
      data: result,
    });
  } catch (err) {
    return response.error(res, err);
  }
};  