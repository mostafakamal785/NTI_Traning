import e from 'express';
import User from '../models/User.js';
import { generateAccesToken, generateRefreshToken } from '../utils/tokenUtils.js';
import bcrypt from 'bcrypt';
export const logInUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Email not found, please register');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      //user exist but password not match
      throw new Error('Invalid password');
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
        id: user._id,
        email: user.email,
        name: user.name,
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
    res.clearCookie("access-token",{ httpOnly: true });
    res.clearCookie("refresh-token",{ httpOnly: true });
    res.status(200).json({ message: 'Logged out successfully' });
  }catch (error) {
    res.status(400).json({ message: error.message });
  }
}