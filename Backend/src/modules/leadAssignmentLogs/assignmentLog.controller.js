import * as service from "./assignmentLog.service.js";
import * as response from "../../utils/response.util.js";

export const assignLead = async (
  req,
  res
) => {
  try {
    const {
      assigned_to,
      assigned_by,
      note,
    } = req.body;

    const data =
      await service.assignLeadService(
        req.params.id,
        assigned_to,
        assigned_by,
        note
      );

    return response.success(
      res,
      data,
      "Lead Assigned Successfully"
    );
  } catch (err) {
    return response.error(res, err);
  }
};

export const getAssignmentHistory =
  async (req, res) => {
    try {
      const data =
        await service.getAssignmentHistoryService(
          req.params.id
        );

      return response.success(
        res,
        data
      );
    } catch (err) {
      return response.error(res, err);
    }
  };

export const getAssignmentLogById =
  async (req, res) => {
    try {
      const data =
        await service.getAssignmentLogByIdService(
          req.params.id
        );

      return response.success(
        res,
        data
      );
    } catch (err) {
      return response.error(res, err);
    }
  };

export const updateAssignmentLog =
  async (req, res) => {
    try {

      const {
        assigned_to,
        assigned_by,
        note,
      } = req.body;

      const data =
        await service.updateAssignmentLogService(
          req.params.id,
          assigned_to,
          assigned_by,
          note
        );

      return response.success(
        res,
        data,
        "Assignment Log Updated Successfully"
      );

    } catch (err) {
      return response.error(res, err);
    }
  };

export const deleteAssignmentLog =
  async (req, res) => {
    try {
      const data =
        await service.deleteAssignmentLogService(
          req.params.id
        );

      return response.success(
        res,
        data,
        "Assignment Log Deleted Successfully"
      );
    } catch (err) {
      return response.error(res, err);
    }
  };