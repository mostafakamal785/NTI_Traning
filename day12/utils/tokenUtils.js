import jwt from 'jsonwebtoken';

 export const generateAccesToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.ACCESS_TOKEN, { expiresIn: '15m' });
};

 export const generateRefreshToken = (userId) => {
   return jwt.sign({ id: userId }, process.env.REFRESH_TOKEN, { expiresIn: '30d' });
 };

 export const generateResetToken = (userId) => {
   return jwt.sign({ id: userId }, process.env.RESET_TOKEN, { expiresIn: '5m' });
 };
