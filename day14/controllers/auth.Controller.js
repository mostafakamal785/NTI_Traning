import User from '../models/User.js';
import {
  generateAccesToken,
  generateRefreshToken,
  generateVerifyToken,
} from '../utils/tokenUtils.js';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import sendEmail from '../utils/sendEmail.js';
import jwt from 'jsonwebtoken';

export const logInUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const newUser = await User.findOne({ email });
    if (!newUser) {
      return next({
        status: 400,
        field: 'email',
        message: 'Invalid email or password',
      });
    }
    if (!newUser.isVefifectiond) {
      return next({
        status: 400,
        message: 'please verify your email',
        field: 'email',
      });
    }
    const isMatch = await bcrypt.compare(password, newUser.password);
    if (!isMatch) {
      return next({
        status: 400,
        field: 'password',
        message: 'Invalid email or password',
      });
    }
    res.cookie('access-token', generateAccesToken(newUser._id, newUser.role), {
      httpOnly: true,
    });

    res.cookie('refresh-token', generateRefreshToken(newUser._id, newUser.role), {
      httpOnly: true,
    });
    res.status(200).json({
      message: 'User logged in successfully',
      user: {
        id: newUser._id,
        email: newUser.email,
        name: newUser.name,
      },
    });
  } catch (error) {
    next({
      status: 400,
      field: 'login',
      message: error.message,
    });
  }
};

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, age, role } = req.body;
    const isRepet = await User.findOne({ email });
    if (isRepet) {
      return next({
        status: 400,
        field: 'email',
        message: 'Email already exists',
      });
    }
    const hashdPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      age: age ? age : null,
      role: role ? role : 'user',
      password: hashdPassword,
    });
    const verifyToken = generateVerifyToken(newUser._id);
    const verifyUrl = `http://localhost:3000/api/auth/verify/${verifyToken}`;
    const message = verifyUrl;
    await sendEmail(newUser.email, 'Email Verification', message);
    res.status(201).json({
      message: 'User registered successfully , please verify your email',
      user: {
        id: newUser._id,
        email: newUser.email,
        name: newUser.name,
      },
    });
  } catch (error) {
    next({
      status: 400,
      field: 'register',
      message: error.message,
    });
  }
};

export const verifyUser = async (req, res, next) => {
  try {
    const token = req.params.token;
    if (!token) {
      return next({ status: 400, field: 'token', message: 'Token required' });
    }
    const decoded = jwt.verify(token, process.env.VERIFY_TOKEN);
    if (!decoded) {
      return next({ message: 'INVALID_TOKEN' });
    }
    await User.findByIdAndUpdate(decoded.id, { isVefifectiond: true });
    res.status(200).json('user is Verificationed');
  } catch (error) {
    next(error);
  }
};

export const logoutUser = async (req, res, next) => {
  try {
    res.clearCookie('access-token', { httpOnly: true });
    res.clearCookie('refresh-token', { httpOnly: true });
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    next({
      status: 400,
      field: 'logout',
      message: error.message,
    });
  }
};

export const forgotPassword = async (req, res, next) => {
  try {
    const email = req.body.email;
    const user = await User.findOne({ email });
    if (!user) {
      return next({
        status: 404,
        field: 'email',
        message: 'No user with this email',
      });
    }
    const resetToken = crypto.randomBytes(32).toString('hex');
    // console.log(resetToken);
    const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    user.resetCode = hashedToken;
    user.resetCodeExp = Date.now() + 10 * 60 * 1000;
    await user.save();

    const resetUrl = `http://localhost:3000/api/auth/reset-password/${resetToken}`;
    const message = resetUrl;

    await sendEmail(user.email, 'Password Reset', message);
    res.status(200).json({ message: 'Password reset email sent' });
  } catch (error) {
    next({
      status: 400,
      field: 'forgotPassword',
      message: error.message,
    });
  }
};

export const resetPassword = async (req, res, next) => {
  try {
    const { password } = req.body;
    const resetToken = req.params.resetToken;
    // console.log(resetToken);
    const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    // console.log(hashedToken);
    const user = await User.findOne({
      resetCode: hashedToken,
      resetCodeExp: { $gt: Date.now() },
    });

    if (!user) {
      return next({ message: 'USER_NOT_FOUND' });
    }

    const hashdPassword = await bcrypt.hash(password, 10);
    user.password = hashdPassword;
    user.resetCode = '';
    user.resetCodeExp = '';

    await user.save();
    res.status(200).json({ message: 'Password reset successful' });
  } catch (error) {
    next({
      status: 400,
      field: 'resetPassword',
      message: error.message,
    });
  }
};
