import { pool } from "../../config/db.config.js";
import * as query from "./status.query.js";

export const getAllStatusesService = async () => {
  const [rows] = await pool.query(query.GET_ALL_STATUSES);
  return rows;
};

export const createStatusService = async (name) => {
  const [result] = await pool.query(
    query.CREATE_STATUS,
    [name]
  );

  return {
    id: result.insertId,
    name,
  };
};

export const updateStatusService = async (id, name) => {
  await pool.query(
    query.UPDATE_STATUS,
    [name, id]
  );

  return {
    id,
    name,
  };
};