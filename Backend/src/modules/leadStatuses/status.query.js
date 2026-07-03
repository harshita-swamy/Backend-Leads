export const GET_ALL_STATUSES =
`SELECT * FROM lead_statuses ORDER BY id DESC`;

export const GET_STATUS_BY_ID =
`SELECT * FROM lead_statuses
 WHERE id = ?`;

export const CREATE_STATUS =
`INSERT INTO lead_statuses (name)
 VALUES (?)`;

export const UPDATE_STATUS =
`UPDATE lead_statuses
 SET name = ?
 WHERE id = ?`;

export const DELETE_STATUS =
`DELETE FROM lead_statuses
 WHERE id = ?`;