export const GET_ALL_SOURCES =
`SELECT * FROM lead_sources ORDER BY id DESC`;

export const GET_SOURCE_BY_ID =
`SELECT * FROM lead_sources
 WHERE id = ?`;

export const CREATE_SOURCE =
`INSERT INTO lead_sources (name)
 VALUES (?)`;

export const UPDATE_SOURCE =
`UPDATE lead_sources
 SET name = ?
 WHERE id = ?`;

export const DELETE_SOURCE =
`DELETE FROM lead_sources
 WHERE id = ?`;