import * as leadQuery from "./lead.query.js";

export const createLeadService = async (data) => {
  const { name, email, phone, course_id, source_id, priority, notes } = data;

  const existing = await leadQuery.checkDuplicateEmail(email);

  if (existing.length > 0) {
    return {
      success: false,
      message: "Lead already exists",
    };
  }

  const person = await leadQuery.createPerson(
    name,
    phone,
    email,
    null,
    null
  );

  const person_id = person.insertId;

  const lead = await leadQuery.createLead(
    person_id,
    course_id,
    source_id,
    priority,
    notes
  );

  return {
    success: true,
    id: lead.insertId,
  };
};

export const getAllLeadsService = async () => {
  return await leadQuery.getAllLeads();
};

export const updateLeadStatusService = async (id, status_id) => {
  if (!id || !status_id) throw new Error("Invalid input");

  await leadQuery.updateLeadStatus(id, status_id);
  return { id, status_id };
};

export const deleteLeadService = async (id) => {
  if (!id) throw new Error("ID required");

  const res = await leadQuery.deleteLeadById(id);
  return { affectedRows: res.affectedRows };
};