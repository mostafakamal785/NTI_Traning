import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { generateAccesToken } from '../utils/tokenUtils.js';
const refresh = async (req, res) => {
  try {
    const refreshToken = req.cookies['refresh-token'];
    if (!refreshToken) {
      return res.status(401).json({ message: 'No refresh token provided' });
    }
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN);
    if (!decoded) {
      return res.status(403).json({ message: 'Invalid refresh token' });
    }
    const accessToken = generateAccesToken(decoded.id);
    res.cookie('access-token', accessToken, { httpOnly: true });
    res.status(200).json({ accessToken });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const protect = async (req, res, next) => {
  try {
    const accessToken = req.cookies['access-token'];
    const refreshToken = req.cookies['refresh-token'];
    if (!accessToken && refreshToken) {
      await refresh(req, res);
      return;
    }

    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN);

    req.user = await User.findById(decoded.id).select('-password');

    next();
  } catch (err) {
    if (req.cookies['refresh-token']) {
      await refreshTokens(req, res);
      return;
    }
    res.status(401).json({ message: 'Invalid or expired token' });  }
};
