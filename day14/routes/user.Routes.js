import express from 'express';
import authorizeRole from '../middleware/authorizeRole.js';
import authenticate from '../middleware/authMiddleware.js';
const router = express.Router();

router.get('/profile',authenticate, (req, res) => {
  res.json({
    message: 'Welcome to your profile',
    user: req.user,
  });
});
router.get('/admin/dashboard',authenticate, authorizeRole('admin'), (req, res) => {
  res.json({
    message: 'Hello Admin, welcome to your dashboard',
    user: req.user,
  });
});

export default router;
