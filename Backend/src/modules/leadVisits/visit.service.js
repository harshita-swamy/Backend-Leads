import * as visitQuery from "./visit.query.js";

export const createVisitService = async (
  data
) => {
  const result =
    await visitQuery.createVisit(
      data.lead_id,
      data.visited_by,
      data.visit_date,
      data.status,
      data.notes
    );

  return {
    success: true,
    id: result.insertId,
  };
};

export const getAllVisitsService =
  async () => {
    return await visitQuery.getAllVisits();
  };

export const getVisitByIdService =
  async (id) => {
    return await visitQuery.getVisitById(
      id
    );
  };

export const updateVisitService =
  async (id, data) => {
    const result =
      await visitQuery.updateVisitById(
        id,
        data.lead_id,
        data.visited_by,
        data.visit_date,
        data.status,
        data.notes
      );

    return {
      success: true,
      affectedRows:
        result.affectedRows,
    };
  };

export const deleteVisitService =
  async (id) => {
    const result =
      await visitQuery.deleteVisit(id);

    return {
      success: true,
      affectedRows:
        result.affectedRows,
    };
  };