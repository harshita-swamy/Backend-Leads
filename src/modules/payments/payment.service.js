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

export const getPaymentsService = async (
  student_id
) => {
  return await paymentQuery.getPaymentsByStudent(
    student_id
  );
};

export const deletePaymentService = async (
  id
) => {
  const result =
    await paymentQuery.deletePayment(id);

  return {
    success: true,
    affectedRows: result.affectedRows,
  };
};