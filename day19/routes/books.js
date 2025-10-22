// books routes
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json([{ id: 1, title: 'Learn Node.js' }]);
});

router.get('/:id', (req, res) => {
  res.json({ id: req.params.id, title: 'Express Basics' });
});

router.post('/', (req, res) => {
  res.status(201).json({ message: 'Book added' });
});

router.put('/:id', (req, res) => {
  res.json({ message: 'Book updated' });
});

router.delete('/:id', (req, res) => {
  res.json({ message: 'Book deleted' });
});

export default router;
