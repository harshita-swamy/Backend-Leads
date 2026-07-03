import * as certificateService from "./certificate.service.js";
import * as response from "../../utils/response.util.js";

export const createCertificate = async (
  req,
  res
) => {
  try {
    const data =
      await certificateService.createCertificateService(
        req.body
      );

    return response.success(
      res,
      data,
      "Certificate Issued Successfully"
    );
  } catch (err) {
    return response.error(res, err);
  }
};

export const getCertificate = async (
  req,
  res
) => {
  try {
    const data =
      await certificateService.getCertificateService(
        req.params.student_id
      );

    return response.success(res, data);
  } catch (err) {
    return response.error(res, err);
  }
};

export const getAllCertificates = async (
  req,
  res
) => {
  try {
    const data =
      await certificateService.getAllCertificatesService();

    return response.success(res, data);
  } catch (err) {
    return response.error(res, err);
  }
};

export const deleteCertificate = async (
  req,
  res
) => {
  try {
    const data =
      await certificateService.deleteCertificateService(
        req.params.id
      );

    return response.success(
      res,
      data,
      "Certificate Deleted Successfully"
    );
  } catch (err) {
    return response.error(res, err);
  }
};