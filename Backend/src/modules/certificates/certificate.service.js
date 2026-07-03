import * as certificateQuery from "./certificate.query.js";

export const createCertificateService = async (
  data
) => {
  const result =
    await certificateQuery.createCertificate(
      data.student_id,
      data.course_id,
      data.certificate_number,
      data.status,
      data.issued_at,
      data.issued_by
    );

  return {
    success: true,
    id: result.insertId,
  };
};

export const getCertificateService = async (
  student_id
) => {
  return await certificateQuery.getCertificateByStudent(
    student_id
  );
};

export const getAllCertificatesService =
  async () => {
    return await certificateQuery.getAllCertificates();
  };

export const deleteCertificateService =
  async (id) => {
    const result =
      await certificateQuery.deleteCertificate(id);

    return {
      success: true,
      affectedRows: result.affectedRows,
    };
  };