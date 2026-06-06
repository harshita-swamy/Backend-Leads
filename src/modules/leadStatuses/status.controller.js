import * as service from "./status.service.js";
import * as response from "../../utils/response.util.js";

export const getAllStatuses =
  async (req, res) => {
    try {
      const data =
        await service.getAllStatusesService();

      return response.success(
        res,
        data
      );
    } catch (err) {
      return response.error(
        res,
        err
      );
    }
  };

export const getStatusById =
  async (req, res) => {
    try {
      const data =
        await service.getStatusByIdService(
          req.params.id
        );

      return response.success(
        res,
        data
      );
    } catch (err) {
      return response.error(
        res,
        err
      );
    }
  };

export const createStatus =
  async (req, res) => {
    try {
      const data =
        await service.createStatusService(
          req.body.name
        );

      return response.success(
        res,
        data,
        "Status Created Successfully"
      );
    } catch (err) {
      return response.error(
        res,
        err
      );
    }
  };

export const updateStatus =
  async (req, res) => {
    try {
      const data =
        await service.updateStatusService(
          req.params.id,
          req.body.name
        );

      return response.success(
        res,
        data,
        "Status Updated Successfully"
      );
    } catch (err) {
      return response.error(
        res,
        err
      );
    }
  };

export const deleteStatus =
  async (req, res) => {
    try {
      const data =
        await service.deleteStatusService(
          req.params.id
        );

      return response.success(
        res,
        data,
        "Status Deleted Successfully"
      );
    } catch (err) {
      return response.error(
        res,
        err
      );
    }
  };