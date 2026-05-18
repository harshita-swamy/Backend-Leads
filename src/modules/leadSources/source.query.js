export const GET_ALL_SOURCES =
`SELECT * FROM lead_sources ORDER BY id DESC`;

export const CREATE_SOURCE =
`INSERT INTO lead_sources (name)
VALUES (?)`;

export const UPDATE_SOURCE =
`UPDATE lead_sources
SET name = ?
WHERE id = ?`;