import jwt from 'jsonwebtoken';

 export const generateAccesToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.ACCESS_TOKEN, { expiresIn: '5m' });
};

 export const generateRefreshToken = (userId) => {
   return jwt.sign({ id: userId }, process.env.ACCESS_TOKEN, { expiresIn: '30d' });
 };

