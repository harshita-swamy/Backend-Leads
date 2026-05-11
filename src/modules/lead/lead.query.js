import { pool } from "../../config/db.config.js";

// Check duplicate email
export const checkDuplicateEmail = async (email) => {
  try {
    const [res] = await pool.query(
      "SELECT id FROM persons WHERE email = ?",
      [email]
    );
    return res;
  } catch (err) {
    console.log("🔥 DB REAL ERROR:", err);
    throw err;
  }
};

// Create Person (fixed: added last_login_at default handling safe)
export const createPerson = async (name, phone, email, gender, dob) => {
  const [res] = await pool.query(
    `INSERT INTO persons 
    (name, phone, email, gender, date_of_birth, last_login_at, deleted_at) 
    VALUES (?, ?, ?, ?, ?, NULL, NULL)`,
    [name, phone, email, gender, dob]
  );
  return res;
};

// Create Lead
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

// Get All Leads (soft delete safe)
export const getAllLeads = async () => {
  const [res] = await pool.query(
    "SELECT * FROM leads WHERE deleted_at IS NULL OR deleted_at IS NULL"
  );
  return res;
};

// Soft Delete Lead (IMPORTANT FIX)
export const deleteLeadById = async (id) => {
  const [res] = await pool.query(
    "UPDATE leads SET deleted_at = NOW() WHERE id = ?",
    [id]
  );
  return res;
};

// Update Lead Status
export const updateLeadStatus = async (id, status_id) => {
  const [res] = await pool.query(
    "UPDATE leads SET status_id = ? WHERE id = ?",
    [status_id, id]
  );
  return res;
};

// Login update helper (optional but useful)
export const updateLastLogin = async (person_id) => {
  const [res] = await pool.query(
    "UPDATE persons SET last_login_at = NOW() WHERE id = ?",
    [person_id]
  );
  return res;
};