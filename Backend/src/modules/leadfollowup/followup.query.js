import { pool } from "../../config/db.config.js";

// Create Followup
export const createFollowupQuery = async (data) => {
  const { lead_id, followup_by, followup_type, note } = data;

  const [result] = await pool.query(
    `INSERT INTO lead_followups
    (lead_id, followup_by, followup_type, note)
    VALUES (?, ?, ?, ?)`,
    [lead_id, followup_by, followup_type, note]
  );

  return result;
};

// Get Followups by Lead ID
export const getFollowupsByLeadQuery = async (lead_id) => {
  const [rows] = await pool.query(
    `SELECT * FROM lead_followups
     WHERE lead_id = ?
     ORDER BY id DESC`,
    [lead_id]
  );

  return rows;
};

// Update Followup
export const updateFollowupQuery = async (id, data) => {
  const { followup_type, note } = data;

  await pool.query(
    `UPDATE lead_followups
     SET followup_type = ?, note = ?
     WHERE id = ?`,
    [followup_type, note, id]
  );

  return true;
};

// Delete Followup
export const deleteFollowupQuery = async (id) => {
  await pool.query(
    `DELETE FROM lead_followups
     WHERE id = ?`,
    [id]
  );

  return true;
};