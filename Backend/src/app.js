// src/app.js
import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/auth", authRoutes);   // /api/auth/register, /api/auth/login
app.use("/api/users", userRoutes);  // /api/users/me

// Future: AI Integration
// app.use("/api/ai", aiRoutes);

// Error handler (always last)
app.use(errorHandler);

export default app;


