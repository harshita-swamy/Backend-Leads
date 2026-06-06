import {
  getPreviousAssignmentQuery,
  updateLeadAssignmentQuery,
  insertAssignmentLogQuery,
  getAssignmentHistoryQuery,
  getAssignmentLogByIdQuery,
  deleteAssignmentLogQuery,
} from "./assignmentLog.query.js";

export const assignLeadService = async (
  lead_id,
  assigned_to,
  assigned_by,
  note
) => {
  const prev =
    await getPreviousAssignmentQuery(
      lead_id
    );

  const previous_assigned_to =
    prev.length > 0
      ? prev[0].assigned_to
      : null;

  await updateLeadAssignmentQuery(
    lead_id,
    assigned_to
  );

  const [result] =
    await insertAssignmentLogQuery(
      lead_id,
      assigned_to,
      previous_assigned_to,
      assigned_by,
      note
    );

  return {
    id: result.insertId,
    lead_id,
    assigned_to,
    previous_assigned_to,
    assigned_by,
    note,
  };
};

export const getAssignmentHistoryService =
  async (lead_id) => {
    return await getAssignmentHistoryQuery(
      lead_id
    );
  };

export const getAssignmentLogByIdService =
  async (id) => {
    return await getAssignmentLogByIdQuery(
      id
    );
  };

export const deleteAssignmentLogService =
  async (id) => {
    const result =
      await deleteAssignmentLogQuery(id);

    return {
      success: true,
      affectedRows:
        result.affectedRows,
    };
  };

  import {
  updateAssignmentLogQuery,
} from "./assignmentLog.query.js";

export const updateAssignmentLogService =
  async (
    id,
    assigned_to,
    assigned_by,
    note
  ) => {

    const result =
      await updateAssignmentLogQuery(
        id,
        assigned_to,
        assigned_by,
        note
      );

    return {
      success: true,
      affectedRows:
        result.affectedRows,
    };
  };