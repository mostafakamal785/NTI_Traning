import { validationResult } from 'express-validator';
import errorsFormat from '../utils/errorsFormat.js';

const handleValidate = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const firstError = result.array()[0];
    const errorKey = firstError.msg.toUpperCase().replace(/ /g, '_');
    const error = errorsFormat[errorKey];
    if (error) {
      return res.status(error.status).json({
        success: false,
        field: firstError.param,
        message: error.message,
      });
    }
    return res.status(400).json({
      success: false,
      field: firstError.param,
      message: firstError.msg,
    });
  }
  next();
};
export default handleValidate;
