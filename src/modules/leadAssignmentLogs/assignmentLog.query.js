import { pool } from "../../config/db.config.js";

// Previous assignment
export const getPreviousAssignmentQuery =
  async (lead_id) => {
    const [rows] = await pool.query(
      "SELECT assigned_to FROM leads WHERE id = ?",
      [lead_id]
    );

    return rows;
  };

// Update lead assignment
export const updateLeadAssignmentQuery =
  async (lead_id, assigned_to) => {
    const [res] = await pool.query(
      `UPDATE leads
       SET assigned_to = ?
       WHERE id = ?`,
      [assigned_to, lead_id]
    );

    return res;
  };

// Insert assignment log
export const insertAssignmentLogQuery =
  async (
    lead_id,
    assigned_to,
    previous_assigned_to,
    assigned_by,
    note
  ) => {
    const [res] = await pool.query(
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

    return [res];
  };

// History
export const getAssignmentHistoryQuery =
  async (lead_id) => {
    const [rows] = await pool.query(
      `SELECT *
       FROM lead_assignment_logs
       WHERE lead_id = ?
       ORDER BY id DESC`,
      [lead_id]
    );

    return rows;
  };

// Get by id
export const getAssignmentLogByIdQuery =
  async (id) => {
    const [rows] = await pool.query(
      `SELECT *
       FROM lead_assignment_logs
       WHERE id = ?`,
      [id]
    );

    return rows;
  };

// Delete
export const deleteAssignmentLogQuery =
  async (id) => {
    const [res] = await pool.query(
      `DELETE FROM lead_assignment_logs
       WHERE id = ?`,
      [id]
    );

    return res;
  };

  export const updateAssignmentLogQuery =
  async (
    id,
    assigned_to,
    assigned_by,
    note
  ) => {
    const [res] = await pool.query(
      `UPDATE lead_assignment_logs
       SET assigned_to = ?,
           assigned_by = ?,
           note = ?
       WHERE id = ?`,
      [
        assigned_to,
        assigned_by,
        note,
        id,
      ]
    );

    return res;
  };