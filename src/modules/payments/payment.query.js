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

export const getAllPayments = async () => {
  const [rows] = await pool.query(
    "SELECT * FROM payments ORDER BY id DESC"
  );

  return rows;
};

export const getPaymentById = async (id) => {
  const [rows] = await pool.query(
    "SELECT * FROM payments WHERE id = ?",
    [id]
  );

  return rows;
};

export const updatePaymentById = async (
  id,
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
    `UPDATE payments
     SET student_id = ?,
         fee_structure_id = ?,
         amount = ?,
         discount = ?,
         payment_method = ?,
         status = ?,
         transaction_id = ?,
         receipt_number = ?,
         collected_by = ?,
         payment_date = ?,
         due_date = ?,
         notes = ?
     WHERE id = ?`,
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
      id,
    ]
  );

  return res;
};

export const deletePayment = async (id) => {
  const [res] = await pool.query(
    "DELETE FROM payments WHERE id = ?",
    [id]
  );

  return res;
};