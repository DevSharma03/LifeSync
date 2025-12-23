// src/controllers/auth.controller.js
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register Controller
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({ name, email, password: hashedPassword });

    // Generate JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.status(201).json({ user: { id: user._id, name, email }, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Login Controller
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.json({ user: { id: user._id, name: user.name, email }, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


