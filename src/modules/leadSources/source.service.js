import { pool } from "../../config/db.config.js";
import * as query from "./source.query.js";

export const getAllSourcesService = async () => {
  const [rows] = await pool.query(query.GET_ALL_SOURCES);
  return rows;
};

export const createSourceService = async (name) => {
  const [result] = await pool.query(
    query.CREATE_SOURCE,
    [name]
  );

  return {
    id: result.insertId,
    name,
  };
};

export const updateSourceService = async (id, name) => {
  await pool.query(
    query.UPDATE_SOURCE,
    [name, id]
  );

  return {
    id,
    name,
  };
};