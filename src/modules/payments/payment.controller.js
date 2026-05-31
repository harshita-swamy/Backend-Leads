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

export const getPayments = async (
  req,
  res
) => {
  try {
    const data =
      await paymentService.getPaymentsService(
        req.params.student_id
      );

    return response.success(res, data);
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