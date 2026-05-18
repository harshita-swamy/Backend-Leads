export const CREATE_VISIT =
`INSERT INTO lead_visits
(lead_id, visit_date, note)
VALUES (?, ?, ?)`;

export const GET_VISITS =
`SELECT * FROM lead_visits
WHERE lead_id = ?
ORDER BY id DESC`;