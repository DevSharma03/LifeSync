import json
import joblib
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent

CLUSTER_DIR = BASE_DIR / "Clustering_Dump"
PREDICT_DIR = BASE_DIR / "Prediction_Dump"


def load_artifacts():
    return {
        # -------- CLUSTERING --------
        "cluster_model": joblib.load(CLUSTER_DIR / "cluster_predictor.joblib"),
        "cluster_profiles": {
            int(k): v
            for k, v in json.load(open(CLUSTER_DIR / "cluster_profiles.json")).items()
        },
        "feature_influence": json.load(open(CLUSTER_DIR / "feature_influence.json")),

        # -------- PREDICTION --------
        "scaler": joblib.load(PREDICT_DIR / "feature_scaler.pkl"),
        "health_model": joblib.load(PREDICT_DIR / "health_model.pkl"),
        "mind_model": joblib.load(PREDICT_DIR / "mind_model.pkl"),
        "productivity_model": joblib.load(PREDICT_DIR / "productivity_model.pkl"),
        "finance_model": joblib.load(PREDICT_DIR / "finance_model.pkl"),
        "life_model": joblib.load(PREDICT_DIR / "life_model.pkl"),
    }
