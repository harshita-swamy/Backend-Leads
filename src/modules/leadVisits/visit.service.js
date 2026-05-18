import { pool } from "../../config/db.config.js";
import * as query from "./visit.query.js";

export const createVisitService = async (data) => {
  const { lead_id, visit_date, notes } = data;

  const [result] = await pool.query(
    query.CREATE_VISIT,
    [lead_id, visit_date, notes]
  );

  return {
    id: result.insertId,
    ...data,
  };
};

export const getVisitsService = async (lead_id) => {
  const [rows] = await pool.query(
    query.GET_VISITS,
    [lead_id]
  );

  return rows;
};