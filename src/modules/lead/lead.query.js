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

// Create Person
export const createPerson = async (
  name,
  phone,
  email,
  gender,
  dob
) => {
  const [res] = await pool.query(
    `INSERT INTO persons
    (
      name,
      phone,
      email,
      gender,
      date_of_birth,
      last_login_at,
      deleted_at
    )
    VALUES (?, ?, ?, ?, ?, NULL, NULL)`,
    [name, phone, email, gender, dob]
  );

  return res;
};

// Get Active Employees
export const getActiveEmployees =
  async () => {
    const [rows] = await pool.query(
      `SELECT id
       FROM employees
       WHERE status = 'active'
       ORDER BY id ASC`
    );

    return rows;
  };

// Get Last Assigned Employee
export const getLastAssignedEmployee =
  async () => {
    const [rows] = await pool.query(
      `SELECT assigned_to
       FROM lead_assignment_logs
       ORDER BY id DESC
       LIMIT 1`
    );

    return rows;
  };

// Create Lead
export const createLead = async (
  person_id,
  course_id,
  source_id,
  assigned_to,
  priority,
  notes
) => {
  const [res] = await pool.query(
    `INSERT INTO leads
    (
      person_id,
      course_id,
      source_id,
      assigned_to,
      priority,
      notes
    )
    VALUES (?, ?, ?, ?, ?, ?)`,
    [
      person_id,
      course_id,
      source_id,
      assigned_to,
      priority,
      notes,
    ]
  );

  return res;
};

// Create Assignment Log
export const createAssignmentLog =
  async (
    lead_id,
    assigned_to,
    previous_assigned_to,
    assigned_by
  ) => {
    const [res] = await pool.query(
      `INSERT INTO lead_assignment_logs
      (
        lead_id,
        assigned_to,
        previous_assigned_to,
        assigned_by
      )
      VALUES (?, ?, ?, ?)`,
      [
        lead_id,
        assigned_to,
        previous_assigned_to,
        assigned_by,
      ]
    );

    return res;
  };

// Get All Leads
export const getAllLeads = async () => {
  const [res] = await pool.query(
    `SELECT *
     FROM leads
     WHERE deleted_at IS NULL`
  );

  return res;
};

// Soft Delete Lead
export const deleteLeadById = async (
  id
) => {
  const [res] = await pool.query(
    `UPDATE leads
     SET deleted_at = NOW()
     WHERE id = ?`,
    [id]
  );

  return res;
};

// Update Lead Status
export const updateLeadStatus = async (
  id,
  status_id
) => {
  const [res] = await pool.query(
    `UPDATE leads
     SET status_id = ?
     WHERE id = ?`,
    [status_id, id]
  );

  return res;
};

// Update Last Login
export const updateLastLogin = async (
  person_id
) => {
  const [res] = await pool.query(
    `UPDATE persons
     SET last_login_at = NOW()
     WHERE id = ?`,
    [person_id]
  );

  return res;
};