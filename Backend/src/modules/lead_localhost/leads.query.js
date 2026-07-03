import { pool } from "../../config/db.config.js";

// Create Lead
export const createLead = async (
  person_id,
  course_id,
  source_id,
  status_id,
  assigned_to,
  entry_type,
  priority,
  notes,
  converted_at
) => {
  const [res] = await pool.query(
    `INSERT INTO leads
    (
      person_id,
      course_id,
      source_id,
      status_id,
      assigned_to,
      entry_type,
      priority,
      notes,
      converted_at
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      person_id,
      course_id,
      source_id,
      status_id,
      assigned_to,
      entry_type,
      priority,
      notes,
      converted_at,
    ]
  );

  return res;
};

// Get All Leads
export const getAllLeads = async () => {
  const [res] = await pool.query(
    `SELECT *
     FROM leads
     WHERE deleted_at = '0000-00-00 00:00:00'
     ORDER BY id DESC`
  );

  return res;
};

// Get Lead By Id
export const getLeadById = async (id) => {
  const [res] = await pool.query(
    `SELECT *
     FROM leads
     WHERE id = ?
     AND deleted_at = '0000-00-00 00:00:00'`,
    [id]
  );

  return res;
};

// Update Lead
export const updateLead = async (
  id,
  person_id,
  course_id,
  source_id,
  status_id,
  assigned_to,
  entry_type,
  priority,
  notes,
  converted_at
) => {
  const [res] = await pool.query(
    `UPDATE leads
     SET
       person_id = ?,
       course_id = ?,
       source_id = ?,
       status_id = ?,
       assigned_to = ?,
       entry_type = ?,
       priority = ?,
       notes = ?,
       converted_at = ?,
       updated_at = NOW()
     WHERE id = ?`,
    [
      person_id,
      course_id,
      source_id,
      status_id,
      assigned_to,
      entry_type,
      priority,
      notes,
      converted_at,
      id,
    ]
  );

  return res;
};

// Delete Lead (Soft Delete)
export const deleteLead = async (id) => {
  const [res] = await pool.query(
    `UPDATE leads
     SET deleted_at = NOW()
     WHERE id = ?`,
    [id]
  );

  return res;
};