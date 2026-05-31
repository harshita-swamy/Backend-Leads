import * as studentService from "./student.service.js";
import * as response from "../../utils/response.util.js";

export const createStudent = async (req, res) => {
  try {
    const data = await studentService.createStudentService(
      req.body
    );

    return response.success(
      res,
      data,
      "Student Created Successfully"
    );
  } catch (err) {
    return response.error(res, err);
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const data =
      await studentService.getAllStudentsService();

    return response.success(res, data);
  } catch (err) {
    return response.error(res, err);
  }
};

export const getStudentById = async (req, res) => {
  try {
    const data =
      await studentService.getStudentByIdService(
        req.params.id
      );

    return response.success(res, data);
  } catch (err) {
    return response.error(res, err);
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const data =
      await studentService.deleteStudentService(
        req.params.id
      );

    return response.success(
      res,
      data,
      "Student Deleted Successfully"
    );
  } catch (err) {
    return response.error(res, err);
  }
};