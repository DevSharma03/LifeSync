import cron from "node-cron";
import LifeSyncProfile from "../models/LifeSyncProfile.js";
import { computeScoresFromFeatures } from "../services/score.service.js";

cron.schedule("*/20 * * * *", async () => {
  console.log("⏱️ Running LifeSync score cron...");

  const profiles = await LifeSyncProfile.find({});

  for (const profile of profiles) {
    try {
      if (!profile.features) {
        console.warn(`⚠️ Skipping profile ${profile.userId} (no features)`);
        continue;
      }

      const scores = await computeScoresFromFeatures(profile.features);

      profile.scores = scores;
      profile.updatedAt = new Date();

      await profile.save();

      console.log(`✅ Scores updated for user ${profile.userId}`);
    } catch (e) {
      console.error(
        `❌ Score cron error for user ${profile.userId}:`,
        e.message
      );
    }
  }
});
