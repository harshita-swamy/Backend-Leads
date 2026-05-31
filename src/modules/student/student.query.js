import { pool } from "../../config/db.config.js";

export const createStudent = async (
  person_id,
  lead_id,
  enrollment_number,
  admission_date
) => {
  const [res] = await pool.query(
    `INSERT INTO students
    (person_id, lead_id, enrollment_number, admission_date)
    VALUES (?, ?, ?, ?)`,
    [person_id, lead_id, enrollment_number, admission_date]
  );

  return res;
};

export const getAllStudents = async () => {
  const [res] = await pool.query(
    "SELECT * FROM students"
  );

  return res;
};

export const getStudentById = async (id) => {
  const [res] = await pool.query(
    "SELECT * FROM students WHERE id = ?",
    [id]
  );

  return res;
};

export const deleteStudentById = async (id) => {
  const [res] = await pool.query(
    "DELETE FROM students WHERE id = ?",
    [id]
  );

  return res;
};