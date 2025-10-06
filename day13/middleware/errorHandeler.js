import errorsVal from '../utils/errorsFormat.js';

const errorHandler = (err, req, res, next) => {
  console.error(err);

  // Check if error message matches a key in errorsVal
  let status = err.status || 500;
  let message = err.message || 'Internal Server Error';

  if (errorsVal[err.message]) {
    status = errorsVal[err.message].status || status;
    message = errorsVal[err.message].message;
  }

  res.status(status).json({
    field: err.field || 'field',
    success: false,
    message,
  });
};

export default errorHandler;
