import { pool } from "../../config/db.config.js";

export const createStudentBatch = async (
  student_id,
  batch_id,
  enrolled_at,
  status
) => {
  const [res] = await pool.query(
    `INSERT INTO student_batch
    (student_id, batch_id, enrolled_at, status)
    VALUES (?, ?, ?, ?)`,
    [student_id, batch_id, enrolled_at, status]
  );

  return res;
};

export const getAllStudentBatches = async () => {
  const [res] = await pool.query(
    "SELECT * FROM student_batch"
  );

  return res;
};

export const getStudentBatchByStudentId = async (
  student_id
) => {
  const [res] = await pool.query(
    "SELECT * FROM student_batch WHERE student_id = ?",
    [student_id]
  );

  return res;
};

export const deleteStudentBatch = async (id) => {
  const [res] = await pool.query(
    "DELETE FROM student_batch WHERE id = ?",
    [id]
  );

  return res;
};