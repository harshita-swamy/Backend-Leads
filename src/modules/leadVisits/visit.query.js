import { pool } from "../../config/db.config.js";

export const createVisit = async (
  lead_id,
  visited_by,
  visit_date,
  status,
  notes
) => {
  const [res] = await pool.query(
    `INSERT INTO lead_visits
    (
      lead_id,
      visited_by,
      visit_date,
      status,
      notes
    )
    VALUES (?, ?, ?, ?, ?)`,
    [
      lead_id,
      visited_by,
      visit_date,
      status,
      notes,
    ]
  );

  return res;
};

export const getAllVisits = async () => {
  const [rows] = await pool.query(
    "SELECT * FROM lead_visits ORDER BY id DESC"
  );

  return rows;
};

export const getVisitById = async (id) => {
  const [rows] = await pool.query(
    "SELECT * FROM lead_visits WHERE id = ?",
    [id]
  );

  return rows;
};

export const updateVisitById = async (
  id,
  lead_id,
  visited_by,
  visit_date,
  status,
  notes
) => {
  const [res] = await pool.query(
    `UPDATE lead_visits
     SET lead_id = ?,
         visited_by = ?,
         visit_date = ?,
         status = ?,
         notes = ?
     WHERE id = ?`,
    [
      lead_id,
      visited_by,
      visit_date,
      status,
      notes,
      id,
    ]
  );

  return res;
};

export const deleteVisit = async (id) => {
  const [res] = await pool.query(
    "DELETE FROM lead_visits WHERE id = ?",
    [id]
  );

  return res;
};