import * as service from "./source.service.js";
import * as response from "../../utils/response.util.js";

export const getAllSources = async (
  req,
  res
) => {
  try {
    const data =
      await service.getAllSourcesService();

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

export const getSourceById = async (
  req,
  res
) => {
  try {
    const data =
      await service.getSourceByIdService(
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

export const createSource = async (
  req,
  res
) => {
  try {
    const data =
      await service.createSourceService(
        req.body.name
      );

    return response.success(
      res,
      data,
      "Source Created Successfully"
    );
  } catch (err) {
    return response.error(
      res,
      err
    );
  }
};

export const updateSource = async (
  req,
  res
) => {
  try {
    const data =
      await service.updateSourceService(
        req.params.id,
        req.body.name
      );

    return response.success(
      res,
      data,
      "Source Updated Successfully"
    );
  } catch (err) {
    return response.error(
      res,
      err
    );
  }
};

export const deleteSource = async (
  req,
  res
) => {
  try {
    const data =
      await service.deleteSourceService(
        req.params.id
      );

    return response.success(
      res,
      data,
      "Source Deleted Successfully"
    );
  } catch (err) {
    return response.error(
      res,
      err
    );
  }
};