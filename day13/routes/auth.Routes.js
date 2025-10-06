import express from 'express';
import {
  logInUser,
  registerUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  verifyUser,
} from '../controllers/auth.Controller.js';
import { body, query, param } from 'express-validator';
import handleValidate from '../middleware/handleValidate.js';
const router = express.Router();

router.post(
  '/login',
  [
    body('email').isEmail().normalizeEmail().withMessage('INVALIDE_EMAIL_OR_PASSWORD'),
    body('password').notEmpty().withMessage('INVALIDE_EMAIL_OR_PASSWORD'),
  ],
  handleValidate,
  logInUser
);
router.post(
  '/register',
  [
    body('name').notEmpty().withMessage('Name required'),
    body('email').isEmail().normalizeEmail().withMessage('Invalide email format'),
    body('age').isNumeric().withMessage('AGE_MUST_BE_NUMBER'),
    body('password')
      .isStrongPassword({
        minLength: 9,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
      .withMessage('WEAK_PASSWORD'),
    body('role').optional().isIn(['user', 'admin']).withMessage('INVALIDE_ROLE'),
  ],
  handleValidate,
  registerUser
);

router.get(
  '/verify/:token',
  param('token').notEmpty().escape().withMessage('TOKEN_REQUIRED'),
  verifyUser
);

router.post('/logout', logoutUser);

router.post(
  '/forgot-password',
  [body('email').isEmail().normalizeEmail().withMessage('INVALIDE_EMAIL_FORMAT')],
  handleValidate,
  forgotPassword
);

router.post(
  '/reset-password',
  [
    body('token').notEmpty().withMessage('Token required'),
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
  resetPassword
);

// router.get('/refresh-token',)

export default router;
