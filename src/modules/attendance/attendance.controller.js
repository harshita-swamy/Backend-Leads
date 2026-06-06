import * as attendanceService from "./attendance.service.js";
import * as response from "../../utils/response.util.js";

export const createAttendance = async (
  req,
  res
) => {
  try {
    const data =
      await attendanceService.createAttendanceService(
        req.body
      );

    return response.success(
      res,
      data,
      "Attendance Created Successfully"
    );
  } catch (err) {
    return response.error(res, err);
  }
};

export const getAttendanceById = async (
  req,
  res
) => {
  try {
    const data =
      await attendanceService.getAttendanceByIdService(
        req.params.id
      );

    return response.success(res, data);
  } catch (err) {
    return response.error(res, err);
  }
};

export const updateAttendance = async (
  req,
  res
) => {
  try {
    const data =
      await attendanceService.updateAttendanceService(
        req.params.id,
        req.body
      );

    return response.success(
      res,
      data,
      "Attendance Updated Successfully"
    );
  } catch (err) {
    return response.error(res, err);
  }
};

export const getAttendance = async (
  req,
  res
) => {
  try {
    const data =
      await attendanceService.getAttendanceService(
        req.params.student_batch_id
      );

    return response.success(res, data);
  } catch (err) {
    return response.error(res, err);
  }
};

export const deleteAttendance = async (
  req,
  res
) => {
  try {
    const data =
      await attendanceService.deleteAttendanceService(
        req.params.id
      );

    return response.success(
      res,
      data,
      "Attendance Deleted Successfully"
    );
  } catch (err) {
    return response.error(res, err);
  }
};