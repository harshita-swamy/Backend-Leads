import { pool } from "../../config/db.config.js";

export const createAttendance = async (
  student_batch_id,
  date,
  status,
  marked_by
) => {
  const [res] = await pool.query(
    `INSERT INTO attendance
    (student_batch_id, date, status, marked_by)
    VALUES (?, ?, ?, ?)`,
    [student_batch_id, date, status, marked_by]
  );

  return res;
};

export const getAttendanceByBatch = async (
  student_batch_id
) => {
  const [res] = await pool.query(
    `SELECT * FROM attendance
     WHERE student_batch_id = ?
     ORDER BY date DESC`,
    [student_batch_id]
  );

  return res;
};

export const deleteAttendance = async (id) => {
  const [res] = await pool.query(
    "DELETE FROM attendance WHERE id = ?",
    [id]
  );

  return res;
};