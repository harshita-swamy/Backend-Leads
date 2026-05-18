import { pool } from "../../config/db.config.js";

// Create Followup
export const createFollowupService = async (data) => {
  const { lead_id, followup_by, followup_type, note } = data;

  const [result] = await pool.query(
    `INSERT INTO lead_followups
    (lead_id, followup_by, followup_type, note)
    VALUES (?, ?, ?, ?)`,
    [lead_id, followup_by, followup_type, note]
  );

  return {
    id: result.insertId,
    ...data,
  };
};

// Get All Followups By Lead
export const getLeadFollowupsService = async (lead_id) => {
  const [rows] = await pool.query(
    `SELECT * FROM lead_followups
     WHERE lead_id = ?
     ORDER BY id DESC`,
    [lead_id]
  );

  return rows;
};

// Update Followup
export const updateFollowupService = async (id, data) => {
  const { followup_type, note } = data;

  await pool.query(
    `UPDATE lead_followups
     SET followup_type = ?, note = ?
     WHERE id = ?`,
    [followup_type, note, id]
  );

  return {
    id,
    ...data,
  };
};

// Delete Followup
export const deleteFollowupService = async (id) => {
  await pool.query(
    `DELETE FROM lead_followups
     WHERE id = ?`,
    [id]
  );

  return true;
};