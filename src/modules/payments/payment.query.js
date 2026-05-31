import { pool } from "../../config/db.config.js";

export const createPayment = async (
  student_id,
  fee_structure_id,
  amount,
  discount,
  payment_method,
  status,
  transaction_id,
  receipt_number,
  collected_by,
  payment_date,
  due_date,
  notes
) => {
  const [res] = await pool.query(
    `INSERT INTO payments
    (
      student_id,
      fee_structure_id,
      amount,
      discount,
      payment_method,
      status,
      transaction_id,
      receipt_number,
      collected_by,
      payment_date,
      due_date,
      notes
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      student_id,
      fee_structure_id,
      amount,
      discount,
      payment_method,
      status,
      transaction_id,
      receipt_number,
      collected_by,
      payment_date,
      due_date,
      notes,
    ]
  );

  return res;
};

export const getPaymentsByStudent = async (
  student_id
) => {
  const [rows] = await pool.query(
    `SELECT * FROM payments
     WHERE student_id = ?
     ORDER BY id DESC`,
    [student_id]
  );

  return rows;
};

export const deletePayment = async (id) => {
  const [res] = await pool.query(
    "DELETE FROM payments WHERE id = ?",
    [id]
  );

  return res;
};