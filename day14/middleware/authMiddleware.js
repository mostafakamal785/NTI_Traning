import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { generateAccesToken , generateRefreshToken } from '../utils/tokenUtils.js';

// Function to refresh tokens

const refresh = async (req, res, next) => {
  try {
    const refreshToken = req.cookies['refresh-token'];
    if (!refreshToken) {
      return next({
        status: 401,
        field: 'refresh-token',
        message: 'No refresh token provided'
      });
    }
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN);
    if (!decoded) {
      return next({
        status: 403,
        field: 'refresh-token',
        message: 'Invalid refresh token'
      });
    }
    const accessToken = generateAccesToken(decoded.id);
    res.cookie('access-token', accessToken, { httpOnly: true });
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch (error) {
    next({
      status: 400,
      field: 'refresh-token',
      message: error.message
    });
  }
};

// Middleware to authenticate user using access token
const authenticate = async (req, res, next) => {
  try {
    const accessToken = req.cookies['access-token'];
    const refreshToken = req.cookies['refresh-token'];
    if (!accessToken && refreshToken) {
      await refresh(req, res, next);
      return;
    }

    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN);

    req.user = await User.findById(decoded.id).select('-password');

    next();
  } catch (err) {
    if (req.cookies['refresh-token']) {
      generateRefreshToken(req, res);
      return;
    }
    next({
      status: 401,
      field: 'access-token',
      message: 'Invalid or expired token'
    });
  }
};
export default authenticate;