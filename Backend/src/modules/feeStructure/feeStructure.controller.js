import * as feeStructureService from "./feeStructure.service.js";
import * as response from "../../utils/response.util.js";

export const createFeeStructure = async (
  req,
  res
) => {
  try {
    const data =
      await feeStructureService.createFeeStructureService(
        req.body
      );

    return response.success(
      res,
      data,
      "Fee Structure Created Successfully"
    );
  } catch (err) {
    return response.error(res, err);
  }
};

export const getAllFeeStructures =
  async (req, res) => {
    try {
      const data =
        await feeStructureService.getAllFeeStructuresService();

      return response.success(res, data);
    } catch (err) {
      return response.error(res, err);
    }
  };

export const getFeeStructure = async (
  req,
  res
) => {
  try {
    const data =
      await feeStructureService.getFeeStructureService(
        req.params.id
      );

    return response.success(res, data);
  } catch (err) {
    return response.error(res, err);
  }
};

export const deleteFeeStructure =
  async (req, res) => {
    try {
      const data =
        await feeStructureService.deleteFeeStructureService(
          req.params.id
        );

      return response.success(
        res,
        data,
        "Deleted Successfully"
      );
    } catch (err) {
      return response.error(res, err);
    }
  };

  export const updateFeeStructure =
  async (req, res) => {
    try {
      const data =
        await feeStructureService.updateFeeStructureService(
          req.params.id,
          req.body
        );

      return response.success(
        res,
        data,
        "Fee Structure Updated Successfully"
      );
    } catch (err) {
      return response.error(res, err);
    }
  };