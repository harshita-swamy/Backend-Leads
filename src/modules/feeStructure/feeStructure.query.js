import { pool } from "../../config/db.config.js";

export const createFeeStructure = async (
  course_id,
  name,
  total_amount,
  installments
) => {
  const [res] = await pool.query(
    `INSERT INTO fee_structures
    (
      course_id,
      name,
      total_amount,
      installments
    )
    VALUES (?, ?, ?, ?)`,
    [
      course_id,
      name,
      total_amount,
      installments
    ]
  );

  return res;
};

export const getAllFeeStructures = async () => {
  const [rows] = await pool.query(
    "SELECT * FROM fee_structures"
  );

  return rows;
};

export const getFeeStructureById = async (id) => {
  const [rows] = await pool.query(
    "SELECT * FROM fee_structures WHERE id = ?",
    [id]
  );

  return rows;
};

export const deleteFeeStructure = async (id) => {
  const [res] = await pool.query(
    "DELETE FROM fee_structures WHERE id = ?",
    [id]
  );

  return res;
};