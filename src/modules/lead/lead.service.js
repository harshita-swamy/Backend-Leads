import * as leadQuery from "./lead.query.js";

export const createLeadService = async (
  data
) => {
  const {
    name,
    email,
    phone,
    course_id,
    source_id,
    priority,
    notes,
  } = data;

  const existing =
    await leadQuery.checkDuplicateEmail(
      email
    );

  if (existing.length > 0) {
    return {
      success: false,
      message: "Lead already exists",
    };
  }

  // Create Person
  const person =
    await leadQuery.createPerson(
      name,
      phone,
      email,
      null,
      null
    );

  const person_id = person.insertId;

  // Round Robin Logic
  const employees =
    await leadQuery.getActiveEmployees();

  if (employees.length === 0) {
    throw new Error(
      "No active employees found"
    );
  }

  const lastAssigned =
    await leadQuery.getLastAssignedEmployee();

  let assignedTo;

  if (lastAssigned.length === 0) {
    assignedTo = employees[0].id;
  } else {
    const currentIndex =
      employees.findIndex(
        (e) =>
          e.id ===
          lastAssigned[0].assigned_to
      );

    const nextIndex =
      (currentIndex + 1) %
      employees.length;

    assignedTo =
      employees[nextIndex].id;
  }

  // Create Lead
  const lead =
    await leadQuery.createLead(
      person_id,
      course_id,
      source_id,
      assignedTo,
      priority,
      notes
    );

  // Save Assignment Log
  await leadQuery.createAssignmentLog(
    lead.insertId,
    assignedTo,
    lastAssigned.length
      ? lastAssigned[0]
          .assigned_to
      : null,
    1
  );

  return {
    success: true,
    id: lead.insertId,
    assigned_to: assignedTo,
  };
};

// Get All Leads
export const getAllLeadsService =
  async () => {
    return await leadQuery.getAllLeads();
  };

// Update Lead Status
export const updateLeadStatusService =
  async (id, status_id) => {
    if (!id || !status_id) {
      throw new Error(
        "Invalid input"
      );
    }

    await leadQuery.updateLeadStatus(
      id,
      status_id
    );

    return {
      id,
      status_id,
    };
  };

// Delete Lead
export const deleteLeadService =
  async (id) => {
    if (!id) {
      throw new Error(
        "ID required"
      );
    }

    const res =
      await leadQuery.deleteLeadById(id);

    return {
      success: true,
      affectedRows:
        res.affectedRows,
    };
  };

  export const getLeadByIdService =
  async (id) => {

    if (!id) {
      throw new Error(
        "Lead ID required"
      );
    }

    return await leadQuery.getLeadById(
      id
    );
  };
  
// Update Login
export const updateLoginService =
  async (person_id) => {
    if (!person_id) {
      throw new Error(
        "Person ID required"
      );
    }

    await leadQuery.updateLastLogin(
      person_id
    );

    return {
      success: true,
      message:
        "Login time updated",
    };
  };