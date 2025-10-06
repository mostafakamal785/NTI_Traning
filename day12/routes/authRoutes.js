import express from 'express';
import {
  logInUser,
  registerUser,
  logoutUser,
  forgotPassword,
  resetPassword,
} from '../controllers/authController.js';
import { body } from 'express-validator';
import handleValidate from '../middleware/handleValidate.js';
const router = express.Router();

router.post(
  '/login',
  [
    body('email').isEmail().withMessage('INVALIDE_EMAIL_OR_PASSWORD'),
    body('password').notEmpty().withMessage('INVALIDE_EMAIL_OR_PASSWORD'),
  ],
  handleValidate,
  logInUser
);
router.post(
  '/register',
  [
    body('name').notEmpty().withMessage('Name required'),
    body('email').isEmail().withMessage('Invalide email format'),
    body('password')
      .isStrongPassword({
        minLength: 9,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
      .withMessage('WEAK_PASSWORD'),
  ],
  handleValidate,
  registerUser
);
router.post('/logout', logoutUser);

router.post(
  '/forgot-password',
  [body('email').isEmail().withMessage('INVALIDE_EMAIL_FORMAT')],
  handleValidate,
  forgotPassword
);

router.post(
  '/reset-password',
  [
    body('token').notEmpty().withMessage('Token required'),
    body('password').isLength({ min: 8 }).withMessage('WEAK_PASSWORD'),
  ],
  handleValidate,
  resetPassword
);

// router.get('/refresh-token',)

export default router;
