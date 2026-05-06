/**
 * Standard success response
 */
export const success = (res, data = null, message = "Success") => {
  return res.status(200).json({
    success: true,     
    message,
    data,
  });
};  
              
/**  
 * Standard error response
 */
export const error = (res, err, statusCode = 500) => {
  return res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};