import axios from "axios";
import LifeSyncProfile from "../models/LifeSyncProfile.js";
import { computeScoresFromFeatures } from "../services/score.service.js";
import { normalizeFeatureSchema } from "../services/feature.schema.js";

/**
 * Cold-start profile generation
 * - Takes 15 inputs
 * - ML generates remaining synthetic features
 * - Saves full feature set
 * - Computes & persists scores
 */
export const inferAndSaveLifeSyncProfile = async (req, res) => {
  try {
    const userId = req.user._id;
    const coldInput = req.body;

    // Call ML only for first-time profile
    const mlResponse = await axios.post(
      "http://0.0.0.0:9000/infer-profile",
      coldInput
    );

    const { generated_features } = mlResponse.data;

    if (!generated_features) {
      throw new Error("ML inference failed");
    }

    // Normalize full feature vector
    const fullFeatures = normalizeFeatureSchema(generated_features);

    // Compute scores
    const scores = await computeScoresFromFeatures(fullFeatures);

    // Save ONCE
    await LifeSyncProfile.findOneAndUpdate(
      { userId },
      {
        userId,
        features: fullFeatures,
        scores,
        updatedAt: new Date(),
      },
      { upsert: true }
    );

    res.json({ success: true, scores });
  } catch (err) {
    console.error("Inference error:", err);
    res.status(500).json({ success: false });
  }
};

// Dashboard Data
export const getDashboardData = async (req, res) => {
  const profile = await LifeSyncProfile.findOne({
    userId: req.user._id,
  });

  res.json({
    scores: profile?.scores || null,
    updatedAt: profile?.updatedAt,
  });
};

//  Update Profile
export const updateUserProfile = async (req, res) => {
  const userId = req.user._id;

  // Normalize incoming features
  const updatedFeatures = normalizeFeatureSchema(req.body);

  // Compute scores from UPDATED features
  const scores = await computeScoresFromFeatures(updatedFeatures);

  // Persist BOTH features & scores
  const profile = await LifeSyncProfile.findOneAndUpdate(
    { userId },
    {
      features: updatedFeatures,
      scores,
      updatedAt: new Date(),
    },
    { new: true }
  );

  res.json({
    success: true,
    scores,
  });
};

//  Profile fetch (Returns ALL stored features)
export const getUserProfile = async (req, res) => {
  res.set("Cache-Control", "no-store");

  const profile = await LifeSyncProfile.findOne({
    userId: req.user._id,
  });

  if (!profile) {
    return res.json({ features: {} });
  }

  res.json({
    features: profile.features,
    updatedAt: profile.updatedAt,
  });
};

export const updateUserProfilePartial = async (req, res) => {
  try {
    const userId = req.user._id;

    // 1️⃣ Fetch existing profile
    const existingProfile = await LifeSyncProfile.findOne({ userId });
    if (!existingProfile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    // 2️⃣ Merge RAW incoming fields (no normalization yet)
    const mergedRawFeatures = {
      ...existingProfile.features,
      ...req.body,
    };

    // 3️⃣ NOW normalize full merged feature set
    const normalizedFeatures = normalizeFeatureSchema(mergedRawFeatures);

    // 4️⃣ Recompute scores from clean merged state
    const scores = await computeScoresFromFeatures(normalizedFeatures);

    // 5️⃣ Persist
    const updatedProfile = await LifeSyncProfile.findOneAndUpdate(
      { userId },
      {
        features: normalizedFeatures,
        scores,
        updatedAt: new Date(),
      },
      { new: true }
    );

    res.json({
      success: true,
      scores,
      features: normalizedFeatures,
    });
  } catch (err) {
    console.error("Partial update error:", err);
    res.status(500).json({ success: false });
  }
};
