import { pool } from "../../config/db.config.js";

export const createStudentBatch = async (
  student_id,
  batch_id,
  fee_structure_id,
  status
) => {
  const [res] = await pool.query(
    `INSERT INTO student_batch
    (
      student_id,
      batch_id,
      fee_structure_id,
      status
    )
    VALUES (?, ?, ?, ?)`,
    [
      student_id,
      batch_id,
      fee_structure_id,
      status,
    ]
  );

  return res;
};

export const getAllStudentBatches =
  async () => {
    const [res] = await pool.query(
      "SELECT * FROM student_batch"
    );

    return res;
  };

export const getStudentBatchById =
  async (id) => {
    const [res] = await pool.query(
      "SELECT * FROM student_batch WHERE id = ?",
      [id]
    );

    return res;
  };

export const updateStudentBatchById =
  async (
    id,
    student_id,
    batch_id,
    fee_structure_id,
    status
  ) => {
    const [res] = await pool.query(
      `UPDATE student_batch
       SET student_id = ?,
           batch_id = ?,
           fee_structure_id = ?,
           status = ?
       WHERE id = ?`,
      [
        student_id,
        batch_id,
        fee_structure_id,
        status,
        id,
      ]
    );

    return res;
  };

export const deleteStudentBatch =
  async (id) => {
    const [res] = await pool.query(
      "DELETE FROM student_batch WHERE id = ?",
      [id]
    );

    return res;
  };