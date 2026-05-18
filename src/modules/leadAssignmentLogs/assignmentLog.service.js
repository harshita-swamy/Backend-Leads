import {
  getPreviousAssignmentQuery,
  updateLeadAssignmentQuery,
  insertAssignmentLogQuery,
  getAssignmentHistoryQuery,
} from "./assignmentLog.query.js";

// Assign lead
export const assignLeadService = async (
  lead_id,
  assigned_to,
  assigned_by,
  note
) => {

  // Previous assignment
  const prev = await getPreviousAssignmentQuery(
    lead_id
  );

  const previous_assigned_to =
    prev.length > 0
      ? prev[0].assigned_to
      : null;

  // Update lead
  await updateLeadAssignmentQuery(
    lead_id,
    assigned_to
  );

  // Insert assignment log
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

// Get assignment history
export const getAssignmentHistoryService =
  async (lead_id) => {
    return await getAssignmentHistoryQuery(
      lead_id
    );
  };