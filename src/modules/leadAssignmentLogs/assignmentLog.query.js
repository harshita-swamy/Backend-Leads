import { pool } from "../../config/db.config.js";

// Get previous assignment
export const getPreviousAssignmentQuery = async (lead_id) => {
  const [rows] = await pool.query(
    "SELECT assigned_to FROM leads WHERE id = ?",
    [lead_id]
  );

  return rows;
};

// Update lead assignment
export const updateLeadAssignmentQuery = async (
  lead_id,
  assigned_to
) => {
  return await pool.query(
    `UPDATE leads 
     SET assigned_to = ?
     WHERE id = ?`,
    [assigned_to, lead_id]
  );
};

// Insert assignment log
export const insertAssignmentLogQuery = async (
  lead_id,
  assigned_to,
  previous_assigned_to,
  assigned_by,
  note
) => {
  return await pool.query(
    `INSERT INTO lead_assignment_logs
    (
      lead_id,
      assigned_to,
      previous_assigned_to,
      assigned_by,
      note
    )
    VALUES (?, ?, ?, ?, ?)`,
    [
      lead_id,
      assigned_to,
      previous_assigned_to,
      assigned_by,
      note,
    ]
  );
};

// Get assignment history
export const getAssignmentHistoryQuery = async (
  lead_id
) => {
  const [rows] = await pool.query(
    `SELECT *
     FROM lead_assignment_logs
     WHERE lead_id = ?
     ORDER BY id DESC`,
    [lead_id]
  );

  return rows;
};