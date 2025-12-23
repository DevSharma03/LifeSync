import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { generateToken } from "../utils/generateToken.js";

export const registerUser = async ({ name, email, password }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ name, email, password: hashedPassword });

  const token = generateToken(newUser._id);
  return { user: newUser, token };
};

export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid email or password");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid email or password");

  const token = generateToken(user._id);
  return { user, token };
};
