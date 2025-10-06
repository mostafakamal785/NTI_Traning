import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  isVefifectiond: { type: Boolean, default: false },
  resetCode: { type: String, default:"" },
  resetCodeExp:{type: Number, default:-1}
});

const User = mongoose.model('User', userSchema);

export default User;
