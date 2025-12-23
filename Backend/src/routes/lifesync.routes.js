import express from "express";
import {
  inferAndSaveLifeSyncProfile,
  getDashboardData,
  updateUserProfile,
  getUserProfile,
  updateUserProfilePartial,
} from "../controllers/lifesync.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/infer-profile", protect, inferAndSaveLifeSyncProfile);
router.get("/dashboard", protect, getDashboardData);
router.post("/update-profile", protect, updateUserProfile);
router.get("/profile", protect, getUserProfile);
router.post("/update-profile-partial", protect, updateUserProfilePartial);

export default router;
