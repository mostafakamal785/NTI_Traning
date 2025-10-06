import { validationResult } from "express-validator";

const handleValidate = (req, res, next) => {
  const result = validationResult(req)
  if (!result.isEmpty()) {
    // const formattedErrors = result.array().map((err) => ({
    //   field: err.param,
    //   message: err.msg,
    // }))
    return res.status(400).json({
      success: false,
      // errors: formattedErrors,
      errors: "name or password not valid",
     });
  }
  next();
}
export default handleValidate;