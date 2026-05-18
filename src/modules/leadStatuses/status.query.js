export const GET_ALL_STATUSES =
`SELECT * FROM lead_statuses ORDER BY id DESC`;

export const CREATE_STATUS =
`INSERT INTO lead_statuses (name)
VALUES (?)`;

export const UPDATE_STATUS =
`UPDATE lead_statuses
SET name = ?
WHERE id = ?`;