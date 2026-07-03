import * as paymentService from "./payment.service.js";
import * as response from "../../utils/response.util.js";

export const createPayment = async (
  req,
  res
) => {
  try {
    const data =
      await paymentService.createPaymentService(
        req.body
      );

    return response.success(
      res,
      data,
      "Payment Added Successfully"
    );
  } catch (err) {
    return response.error(res, err);
  }
};

export const getAllPayments = async (
  req,
  res
) => {
  try {
    const data =
      await paymentService.getAllPaymentsService();

    return response.success(res, data);
  } catch (err) {
    return response.error(res, err);
  }
};

export const getPaymentById = async (
  req,
  res
) => {
  try {
    const data =
      await paymentService.getPaymentByIdService(
        req.params.id
      );

    return response.success(res, data);
  } catch (err) {
    return response.error(res, err);
  }
};

export const updatePayment = async (
  req,
  res
) => {
  try {
    const data =
      await paymentService.updatePaymentService(
        req.params.id,
        req.body
      );

    return response.success(
      res,
      data,
      "Payment Updated Successfully"
    );
  } catch (err) {
    return response.error(res, err);
  }
};

export const deletePayment = async (
  req,
  res
) => {
  try {
    const data =
      await paymentService.deletePaymentService(
        req.params.id
      );

    return response.success(
      res,
      data,
      "Payment Deleted Successfully"
    );
  } catch (err) {
    return response.error(res, err);
  }
};