import mongoose from "mongoose";

const LifeSyncProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true
  },

  features: {
    type: Object,
    required: true,
  },

  // ✅ SCORES (DERIVED DATA)
  scores: {
    health_score: Number,
    mind_score: Number,
    productivity_score: Number,
    finance_score: Number,
    life_score: Number
  },

  confidence: Object,
  clusterProbabilities: [Number],

  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model("LifeSyncProfile", LifeSyncProfileSchema);

