export const CREATE_VISIT =
`INSERT INTO lead_visits
(lead_id, visited_by, visit_date, notes)
VALUES (?, ?, ?, ?)`;

export const GET_VISITS =
`SELECT * FROM lead_visits
WHERE lead_id = ?
ORDER BY id DESC`;