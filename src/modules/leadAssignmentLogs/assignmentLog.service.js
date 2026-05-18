import {
  getPreviousAssignmentQuery,
  updateLeadAssignmentQuery,
  insertAssignmentLogQuery,
  getAssignmentHistoryQuery,
} from "./assignmentLog.query.js";

// Assign lead + log history
export const assignLeadService = async (
  lead_id,
  assigned_to,
  assigned_by,
  note
) => {
  // 1. Get previous assignment
  const prev = await getPreviousAssignmentQuery(lead_id);

  const previous_assigned_to = prev.length ? prev[0].assigned_to : null;

  // 2. Update lead
  await updateLeadAssignmentQuery(lead_id, assigned_to);

  // 3. Insert log
  const [result] = await insertAssignmentLogQuery(
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
export const getAssignmentHistoryService = async (lead_id) => {
  return await getAssignmentHistoryQuery(lead_id);
};