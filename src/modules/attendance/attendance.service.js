import * as attendanceQuery from "./attendance.query.js";

export const createAttendanceService = async (
  data
) => {
  const {
    student_batch_id,
    date,
    status,
  } = data;

  const result =
    await attendanceQuery.createAttendance(
      student_batch_id,
      date,
      status
    );

  return {
    success: true,
    id: result.insertId,
  };
};

export const getAttendanceService = async (
  student_batch_id
) => {
  return await attendanceQuery.getAttendanceByBatch(
    student_batch_id
  );
};

export const deleteAttendanceService = async (
  id
) => {
  const result =
    await attendanceQuery.deleteAttendance(id);

  return {
    success: true,
    affectedRows: result.affectedRows,
  };
};