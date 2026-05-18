import * as service from "./visit.service.js";
import * as response from "../../utils/response.util.js";

export const createVisit = async (req, res) => {
  try {
    const data = await service.createVisitService({
      lead_id: req.params.id,
      ...req.body,
    });

    return response.success(
      res,
      data,
      "Visit Added Successfully"
    );

  } catch (err) {
    return response.error(res, err);
  }
};

export const getVisits = async (req, res) => {
  try {
    const data = await service.getVisitsService(
      req.params.id
    );

    return response.success(res, data);

  } catch (err) {
    return response.error(res, err);
  }
};