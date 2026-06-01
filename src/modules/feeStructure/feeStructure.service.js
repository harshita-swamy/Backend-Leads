import * as feeStructureQuery from "./feeStructure.query.js";

export const createFeeStructureService =
  async (data) => {
    const result =
      await feeStructureQuery.createFeeStructure(
        data.course_id,
        data.name,
        data.total_amount,
        data.installments
      );

    return {
      success: true,
      id: result.insertId,
    };
  };

export const getAllFeeStructuresService =
  async () => {
    return await feeStructureQuery.getAllFeeStructures();
  };

export const getFeeStructureService =
  async (id) => {
    return await feeStructureQuery.getFeeStructureById(
      id
    );
  };

export const deleteFeeStructureService =
  async (id) => {
    const result =
      await feeStructureQuery.deleteFeeStructure(id);

    return {
      success: true,
      affectedRows: result.affectedRows,
    };
  };