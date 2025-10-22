// models/User.js
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["admin", "teacher", "student"], default: "student" },
  profilePic: String,
  isVerified: { type: Boolean, default: false },
});
export default mongoose.model("User", userSchema);
