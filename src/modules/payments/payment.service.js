import * as paymentQuery from "./payment.query.js";

export const createPaymentService = async (
  data
) => {
  const result =
    await paymentQuery.createPayment(
      data.student_id,
      data.fee_structure_id,
      data.amount,
      data.discount,
      data.payment_method,
      data.status,
      data.transaction_id,
      data.receipt_number,
      data.collected_by,
      data.payment_date,
      data.due_date,
      data.notes
    );

  return {
    success: true,
    id: result.insertId,
  };
};

export const getAllPaymentsService =
  async () => {
    return await paymentQuery.getAllPayments();
  };

export const getPaymentByIdService =
  async (id) => {
    return await paymentQuery.getPaymentById(
      id
    );
  };

export const updatePaymentService =
  async (id, data) => {
    const result =
      await paymentQuery.updatePaymentById(
        id,
        data.student_id,
        data.fee_structure_id,
        data.amount,
        data.discount,
        data.payment_method,
        data.status,
        data.transaction_id,
        data.receipt_number,
        data.collected_by,
        data.payment_date,
        data.due_date,
        data.notes
      );

    return {
      success: true,
      affectedRows:
        result.affectedRows,
    };
  };

export const deletePaymentService =
  async (id) => {
    const result =
      await paymentQuery.deletePayment(id);

    return {
      success: true,
      affectedRows:
        result.affectedRows,
    };
  };
