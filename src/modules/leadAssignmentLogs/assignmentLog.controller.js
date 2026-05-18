import * as service from "./assignmentLog.service.js";
import * as response from "../../utils/response.util.js";

// Assign Lead
export const assignLead = async (req, res) => {
  try {
    const { assigned_to, assigned_by, note } = req.body;

    const data = await service.assignLeadService(
      req.params.id,
      assigned_to,
      assigned_by,
      note
    );

    return response.success(res, data, "Lead Assigned Successfully");
  } catch (err) {
    return response.error(res, err);
  }
};

// Get Assignment History
export const getAssignmentHistory = async (req, res) => {
  try {
    const data = await service.getAssignmentHistoryService(req.params.id);

    return response.success(res, data);
  } catch (err) {
    return response.error(res, err);
  }
};