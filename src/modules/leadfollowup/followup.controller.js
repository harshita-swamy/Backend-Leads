import * as followupService from "./followup.service.js";
import * as response from "../../utils/response.util.js";

// Create Followup
export const createFollowup = async (req, res) => {
  try {
    const data = await followupService.createFollowupService({
      lead_id: req.params.id,
      ...req.body,
    });

    return response.success(
      res,
      data,
      "Followup Added Successfully"
    );

  } catch (err) {
    return response.error(res, err);
  }
};

// Get Lead Followups
export const getLeadFollowups = async (req, res) => {
  try {
    const data = await followupService.getLeadFollowupsService(
      req.params.id
    );

    return response.success(res, data);

  } catch (err) {
    return response.error(res, err);
  }
};

// Update Followup
export const updateFollowup = async (req, res) => {
  try {
    const data = await followupService.updateFollowupService(
      req.params.id,
      req.body
    );

    return response.success(
      res,
      data,
      "Followup Updated Successfully"
    );

  } catch (err) {
    return response.error(res, err);
  }
};

// Delete Followup
export const deleteFollowup = async (req, res) => {
  try {
    await followupService.deleteFollowupService(req.params.id);

    return response.success(
      res,
      null,
      "Followup Deleted Successfully"
    );

  } catch (err) {
    return response.error(res, err);
  }
};