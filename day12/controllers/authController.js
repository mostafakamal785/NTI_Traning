import e from 'express';
import User from '../models/User.js';
import {
  generateAccesToken,
  generateRefreshToken,
  generateResetToken,
} from '../utils/tokenUtils.js';
import bcrypt from 'bcrypt';
import sendEmail from '../utils/sendEmail.js';
import jwt from 'jsonwebtoken';
export const logInUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = await User.findOne({ email });
    if (!newUser) {
      throw new Error('Invalide email or password');
    }
    const isMatch = await bcrypt.compare(password, newUser.password);
    if (!isMatch) {
      //user exist but password not match
      throw new Error('Invalide email or password');
    }
    // const token = generateAccesToken(user._id);
    //cookie with httpOnly
    res.cookie('access-token', generateAccesToken(newUser._id), {
      httpOnly: true,
    });

    res.cookie('refresh-token', generateRefreshToken(newUser._id), {
      httpOnly: true,
    });
    res.status(200).json({
      message: 'User logged in successfully',
      user: {
        id: newUser._id,
        email: newUser.email,
        name: newUser.name,
        // token,
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const isRepet = await User.findOne({ email });
    if (isRepet) {
      throw new Error('Email already exists');
    }
    const hashdPassword = await bcrypt.hash(password, 10); //10 rounds of salting
    const newUser = await User.create({
      name,
      email,
      password: hashdPassword,
    });
    //cookie with httpOnly
    res.cookie('access-token', generateAccesToken(newUser._id), {
      httpOnly: true,
    });

    res.cookie('refresh-token', generateRefreshToken(newUser._id), {
      httpOnly: true,
    });

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: newUser._id,
        email: newUser.email,
        name: newUser.name,
        // token: generateAccesToken(newUser._id),
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const logoutUser = async (req, res) => {
  try {
    res.clearCookie('access-token', { httpOnly: true });
    res.clearCookie('refresh-token', { httpOnly: true });
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('No user with this email');
    }
    const resetToken = generateResetToken(user._id);
    const resetUrl = `http://localhost:3000/api/auth/reset-password?token=${resetToken}`;
    const message = resetUrl;
    // console.log("Recipient:", user.email);

    await sendEmail(user.email, 'Password Reset', message);
    res.status(200).json({ message: 'Password reset email sent' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { token, password } = req.body;
    const decoded = jwt.verify(token, process.env.RESET_TOKEN);
    if (!decoded) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: 'No user with this token' });
    }
    const hashdPassword = await bcrypt.hash(password, 10);
    user.password = hashdPassword;
    await user.save();
    res.status(200).json({ message: 'Password reset successful' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
