// errorHandler.js
export function errorHandler(err, req, res, next) {
  console.error(err); // log internally

  if (err.name === 'ValidationError') {
    return res.status(400).json({ message: 'Validation failed', details: err.errors });
  }

  if (err.name === 'CastError') {
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  if (err.message === 'Book not found') {
    return res.status(404).json({ message: err.message });
  }

  res.status(500).json({ message: 'Internal server error' });
}
