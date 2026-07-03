import * as leadService from "./leads.service.js";

// Create Lead
export const createLead = async (req, res) => {
  try {
    const result = await leadService.createLead(req.body);

    res.status(201).json({
      success: true,
      message: "Lead created successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get All Leads
export const getAllLeads = async (req, res) => {
  try {
    const result = await leadService.getAllLeads();

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get Lead By Id
export const getLeadById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await leadService.getLeadById(id);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Update Lead
export const updateLead = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await leadService.updateLead(id, req.body);

    res.status(200).json({
      success: true,
      message: "Lead updated successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Delete Lead
export const deleteLead = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await leadService.deleteLead(id);

    res.status(200).json({
      success: true,
      message: "Lead deleted successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};