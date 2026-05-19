export const validateAssignLead = (req, res, next) => {

  const { assigned_to, assigned_by } = req.body;

  // Required fields check
  if (!assigned_to || !assigned_by) {
    return res.status(400).json({
      success: false,
      message: "assigned_to and assigned_by are required",
    });
  }

  // Number check
  if (
    isNaN(assigned_to) ||
    isNaN(assigned_by)
  ) {
    return res.status(400).json({
      success: false,
      message: "assigned_to and assigned_by must be numbers",
    });
  }

  next();
};