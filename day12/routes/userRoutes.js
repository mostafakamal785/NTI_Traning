import express from 'express';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/profile', protect, (req, res) => {
  res.json({
    message: 'Welcome to your profile',
    user: req.user,
  });
});

export default router;
