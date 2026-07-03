import * as leadQuery from "./leads.query.js";

// Create Lead
export const createLead = async (data) => {
  return await leadQuery.createLead(
    data.person_id,
    data.course_id,
    data.source_id,
    data.status_id,
    data.assigned_to,
    data.entry_type,
    data.priority,
    data.notes,
    data.converted_at
  );
};

// Get All Leads
export const getAllLeads = async () => {
  return await leadQuery.getAllLeads();
};

// Get Lead By Id
export const getLeadById = async (id) => {
  return await leadQuery.getLeadById(id);
};

// Update Lead
export const updateLead = async (id, data) => {
  return await leadQuery.updateLead(
    id,
    data.person_id,
    data.course_id,
    data.source_id,
    data.status_id,
    data.assigned_to,
    data.entry_type,
    data.priority,
    data.notes,
    data.converted_at
  );
};

// Delete Lead
export const deleteLead = async (id) => {
  return await leadQuery.deleteLead(id);
};