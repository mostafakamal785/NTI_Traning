import express from 'express';
import { logInUser, registerUser , logoutUser} from '../controllers/authController.js';
import { body } from 'express-validator';
import handleValidate from '../middleware/handleValidate.js';
const router = express.Router();

import { protect } from '../middleware/authMiddleware.js';
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Invalide email format'),
    body('password')
      .isStrongPassword({
        minLength: 9,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
      .withMessage(
        'password must be at least 9 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one symbol'
      ),
  ],
  handleValidate,
  logInUser
);
router.post(
  '/register',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalide email format'),
    body('password')
      .isStrongPassword({
        minLength: 9,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
      .withMessage(
        'password must be at least 9 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one symbol'
      ),
  ],
  handleValidate,
  registerUser
);
router.post('/logout', logoutUser);
// router.get('/refresh-token',)


export default router;
