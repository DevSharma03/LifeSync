import express from "express";
import cors from "cors";
import morgan from "morgan";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import lifesyncRoutes from "./routes/lifesync.routes.js";

import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

// ======================
// Middleware
// ======================
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Disable caching for APIs (IMPORTANT)
app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store");
  next();
});

app.use(express.json());
app.use(morgan("dev"));

// ======================
// Routes
// ======================
app.use("/api/auth", authRoutes); // register, login
app.use("/api/users", userRoutes); // /me
app.use("/api/lifesync", lifesyncRoutes); // ALL must be protected internally

// ======================
// Error Handler (LAST)
// ======================
app.use(errorHandler);

export default app;