import * as batchService from "./batch.service.js";
import * as response from "../../utils/response.util.js";

export const createStudentBatch = async (
  req,
  res
) => {
  try {
    const data =
      await batchService.createStudentBatchService(
        req.body
      );

    return response.success(
      res,
      data,
      "Student Batch Created Successfully"
    );
  } catch (err) {
    return response.error(res, err);
  }
};

export const getAllStudentBatches = async (
  req,
  res
) => {
  try {
    const data =
      await batchService.getAllStudentBatchesService();

    return response.success(res, data);
  } catch (err) {
    return response.error(res, err);
  }
};

export const getStudentBatch = async (
  req,
  res
) => {
  try {
    const data =
      await batchService.getStudentBatchService(
        req.params.student_id
      );

    return response.success(res, data);
  } catch (err) {
    return response.error(res, err);
  }
};

export const deleteStudentBatch = async (
  req,
  res
) => {
  try {
    const data =
      await batchService.deleteStudentBatchService(
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