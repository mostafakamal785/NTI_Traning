import mongoose from 'mongoose';

const dbConect = async (URL) => {
  try {
    await mongoose.connect(URL);
    console.log('database connected');
  } catch (error) {
    console.log('failed connect data:' + error.message);
  }
};
export default dbConect;
