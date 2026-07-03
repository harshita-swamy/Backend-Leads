import * as installmentQuery from "./installment.query.js";

export const createInstallmentService = async (
  data
) => {
  const result =
    await installmentQuery.createInstallment(
      data.student_id,
      data.fee_structure_id,
      data.installment_no,
      data.amount_due,
      data.due_date
    );

  return {
    success: true,
    id: result.insertId,
  };
};

export const getInstallmentsService = async (
  student_id
) => {
  return await installmentQuery.getInstallmentsByStudent(
    student_id
  );
};

export const markInstallmentPaidService =
  async (id, payment_id) => {
    await installmentQuery.markInstallmentPaid(
      id,
      payment_id
    );

    return {
      success: true,
      installment_id: id,
      payment_id,
    };
  };

export const deleteInstallmentService = async (
  id
) => {
  const result =
    await installmentQuery.deleteInstallment(id);

  return {
    success: true,
    affectedRows: result.affectedRows,
  };
};