import { validationResult } from 'express-validator';
import errorsFormat from '../utils/errorsFormat.js';

const handleValidate = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const firstError = result.array()[0];
    const errorKey = firstError.msg.toUpperCase().replace(/ /g, '_');
    const error = errorsFormat[errorKey];

    if (error) {
      const error = {
        status: error.status || 400,
        success: false,
        message: error.message || 'Invalid request',
        field: firstError.param || 'field',
      }
      return next(error);
    }
    return next({
      success: false,
      field: firstError.param,
      message: firstError.msg,
    });
  }
  next();
};
export default handleValidate;
