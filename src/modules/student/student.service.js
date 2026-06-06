import * as studentQuery from "./student.query.js";

export const createStudentService = async (
  data
) => {
  const {
    person_id,
    lead_id,
    enrollment_number,
    admission_date,
  } = data;

  const student =
    await studentQuery.createStudent(
      person_id,
      lead_id,
      enrollment_number,
      admission_date
    );

  return {
    success: true,
    id: student.insertId,
  };
};

export const getAllStudentsService =
  async () => {
    return await studentQuery.getAllStudents();
  };

export const getStudentByIdService =
  async (id) => {
    return await studentQuery.getStudentById(
      id
    );
  };

export const updateStudentService =
  async (id, data) => {
    const {
      person_id,
      lead_id,
      enrollment_number,
      admission_date,
    } = data;

    const res =
      await studentQuery.updateStudentById(
        id,
        person_id,
        lead_id,
        enrollment_number,
        admission_date
      );

    return {
      success: true,
      affectedRows: res.affectedRows,
    };
  };

export const deleteStudentService =
  async (id) => {
    const res =
      await studentQuery.deleteStudentById(
        id
      );

    return {
      success: true,
      affectedRows: res.affectedRows,
    };
  };
