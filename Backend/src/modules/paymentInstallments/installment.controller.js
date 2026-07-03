import * as installmentService from "./installment.service.js";
import * as response from "../../utils/response.util.js";

export const createInstallment = async (
  req,
  res
) => {
  try {
    const data =
      await installmentService.createInstallmentService(
        req.body
      );

    return response.success(
      res,
      data,
      "Installment Created Successfully"
    );
  } catch (err) {
    return response.error(res, err);
  }
};

export const getInstallments = async (
  req,
  res
) => {
  try {
    const data =
      await installmentService.getInstallmentsService(
        req.params.student_id
      );

    return response.success(res, data);
  } catch (err) {
    return response.error(res, err);
  }
};

export const markInstallmentPaid = async (
  req,
  res
) => {
  try {
    const data =
      await installmentService.markInstallmentPaidService(
        req.params.id,
        req.body.payment_id
      );

    return response.success(
      res,
      data,
      "Installment Marked Paid"
    );
  } catch (err) {
    return response.error(res, err);
  }
};

export const deleteInstallment = async (
  req,
  res
) => {
  try {
    const data =
      await installmentService.deleteInstallmentService(
        req.params.id
      );

    return response.success(
      res,
      data,
      "Installment Deleted Successfully"
    );
  } catch (err) {
    return response.error(res, err);
  }
};