import * as batchQuery from "./batch.query.js";

export const createStudentBatchService =
  async (data) => {
    const {
      student_id,
      batch_id,
      fee_structure_id,
      status,
    } = data;

    const result =
      await batchQuery.createStudentBatch(
        student_id,
        batch_id,
        fee_structure_id,
        status
      );

    return {
      success: true,
      id: result.insertId,
    };
  };

export const getAllStudentBatchesService =
  async () => {
    return await batchQuery.getAllStudentBatches();
  };

export const getStudentBatchService =
  async (id) => {
    return await batchQuery.getStudentBatchById(
      id
    );
  };

export const updateStudentBatchService =
  async (id, data) => {
    const {
      student_id,
      batch_id,
      fee_structure_id,
      status,
    } = data;

    const result =
      await batchQuery.updateStudentBatchById(
        id,
        student_id,
        batch_id,
        fee_structure_id,
        status
      );

    return {
      success: true,
      affectedRows:
        result.affectedRows,
    };
  };

export const deleteStudentBatchService =
  async (id) => {
    const result =
      await batchQuery.deleteStudentBatch(
        id
      );

    return {
      success: true,
      affectedRows:
        result.affectedRows,
    };
  };