import {
  createFollowupQuery,
  getFollowupsByLeadQuery,
  updateFollowupQuery,
  deleteFollowupQuery
} from "./followup.query.js";

// Create Followup Service
export const createFollowupService = async (data) => {
  const result = await createFollowupQuery(data);

  return {
    id: result.insertId,
    ...data,
  };
};

// Get All Followups By Lead
export const getLeadFollowupsService = async (lead_id) => {
  const rows = await getFollowupsByLeadQuery(lead_id);
  return rows;
};

// Update Followup
export const updateFollowupService = async (id, data) => {
  await updateFollowupQuery(id, data);

  return {
    id,
    ...data,
  };
};

// Delete Followup
export const deleteFollowupService = async (id) => {
  await deleteFollowupQuery(id);
  return true;
};