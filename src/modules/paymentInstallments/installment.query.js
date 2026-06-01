import { pool } from "../../config/db.config.js";

export const createInstallment = async (
  student_id,
  fee_structure_id,
  installment_no,
  amount_due,
  due_date
) => {
  const [res] = await pool.query(
    `INSERT INTO payment_installments
    (
      student_id,
      fee_structure_id,
      installment_no,
      amount_due,
      due_date
    )
    VALUES (?, ?, ?, ?, ?)`,
    [
      student_id,
      fee_structure_id,
      installment_no,
      amount_due,
      due_date
    ]
  );

  return res;
};

export const getInstallmentsByStudent = async (student_id) => {
  console.log("student_id received:", student_id);

  const [rows] = await pool.query(
    `SELECT * FROM payment_installments
     WHERE student_id = ?
     ORDER BY installment_no ASC`,
    [student_id]
  );

  console.log("rows:", rows);

  return rows;
};

export const markInstallmentPaid = async (
  id,
  payment_id
) => {
  const [res] = await pool.query(
    `UPDATE payment_installments
     SET payment_id = ?,
         status = 'paid'
     WHERE id = ?`,
    [payment_id, id]
  );

  return res;
};

export const deleteInstallment = async (id) => {
  const [res] = await pool.query(
    "DELETE FROM payment_installments WHERE id = ?",
    [id]
  );

  return res;
};