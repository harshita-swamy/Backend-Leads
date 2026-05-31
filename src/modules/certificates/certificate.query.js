import { pool } from "../../config/db.config.js";

export const createCertificate = async (
  student_id,
  course_id,
  certificate_number,
  status
) => {
  const [res] = await pool.query(
    `INSERT INTO certificates
    (
      student_id,
      course_id,
      certificate_number,
      status
    )
    VALUES (?, ?, ?, ?)`,
    [
      student_id,
      course_id,
      certificate_number,
      status
    ]
  );

  return res;
};

export const getCertificateByStudent = async (
  student_id
) => {
  const [rows] = await pool.query(
    `SELECT *
     FROM certificates
     WHERE student_id = ?`,
    [student_id]
  );

  return rows;
};

export const getAllCertificates = async () => {
  const [rows] = await pool.query(
    "SELECT * FROM certificates"
  );

  return rows;
};

export const deleteCertificate = async (id) => {
  const [res] = await pool.query(
    "DELETE FROM certificates WHERE id = ?",
    [id]
  );

  return res;
};