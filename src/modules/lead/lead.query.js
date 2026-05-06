import { pool } from "../../config/db.config.js";

export const checkDuplicateEmail = async (email) => {
  const [res] = await pool.query(
    "SELECT id FROM persons WHERE email = ?",
    [email]
  );
  return res;
};

export const createPerson = async (name, phone, email, gender, dob) => {
  const [res] = await pool.query(
    "INSERT INTO persons (name, phone, email, gender, date_of_birth) VALUES (?, ?, ?, ?, ?)",
    [name, phone, email, gender, dob]
  );
  return res;
};

export const createLead = async (
  person_id,
  course_id,
  source_id,
  priority,
  notes
) => {
  const [res] = await pool.query(
    "INSERT INTO leads (person_id, course_id, source_id, priority, notes) VALUES (?, ?, ?, ?, ?)",
    [person_id, course_id, source_id, priority, notes]
  );
  return res;
};

export const getAllLeads = async () => {
  const [res] = await pool.query("SELECT * FROM leads");
  return res;
};

export const deleteLeadById = async (id) => {
  const [res] = await pool.query("DELETE FROM leads WHERE id = ?", [id]);
  return res;
};

export const updateLeadStatus = async (id, status_id) => {
  const [res] = await pool.query(
    "UPDATE leads SET status_id = ? WHERE id = ?",
    [status_id, id]
  );
  return res;
};