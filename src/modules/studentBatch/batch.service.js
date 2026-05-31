import * as batchQuery from "./batch.query.js";

export const createStudentBatchService = async (
  data
) => {
  const {
    student_id,
    batch_id,
    enrolled_at,
    status,
  } = data;

  const result =
    await batchQuery.createStudentBatch(
      student_id,
      batch_id,
      enrolled_at,
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

export const getStudentBatchService = async (
  student_id
) => {
  return await batchQuery.getStudentBatchByStudentId(
    student_id
  );
};

export const deleteStudentBatchService =
  async (id) => {
    const result =
      await batchQuery.deleteStudentBatch(id);

    return {
      success: true,
      affectedRows: result.affectedRows,
    };
  };