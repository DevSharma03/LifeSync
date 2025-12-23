import LifeSyncProfile from "../models/LifeSyncProfile.js";
import { normalizeFeatureSchema } from "./feature.schema.js"; 

import axios from "axios";

export async function computeScoresFromFeatures(features) {
  const res = await axios.post(
    "http://0.0.0.0:9000/predict-scores",
    features
  );

  return res.data;
}
