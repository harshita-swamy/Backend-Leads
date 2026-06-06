import * as visitService from "./visit.service.js";
import * as response from "../../utils/response.util.js";

export const createVisit = async (
  req,
  res
) => {
  try {
    const data =
      await visitService.createVisitService(
        req.body
      );

    return response.success(
      res,
      data,
      "Visit Added Successfully"
    );
  } catch (err) {
    return response.error(res, err);
  }
};

export const getAllVisits = async (
  req,
  res
) => {
  try {
    const data =
      await visitService.getAllVisitsService();

    return response.success(res, data);
  } catch (err) {
    return response.error(res, err);
  }
};

export const getVisitById = async (
  req,
  res
) => {
  try {
    const data =
      await visitService.getVisitByIdService(
        req.params.id
      );

    return response.success(res, data);
  } catch (err) {
    return response.error(res, err);
  }
};

export const updateVisit = async (
  req,
  res
) => {
  try {
    const data =
      await visitService.updateVisitService(
        req.params.id,
        req.body
      );

    return response.success(
      res,
      data,
      "Visit Updated Successfully"
    );
  } catch (err) {
    return response.error(res, err);
  }
};

export const deleteVisit = async (
  req,
  res
) => {
  try {
    const data =
      await visitService.deleteVisitService(
        req.params.id
      );

    return response.success(
      res,
      data,
      "Visit Deleted Successfully"
    );
  } catch (err) {
    return response.error(res, err);
  }
};