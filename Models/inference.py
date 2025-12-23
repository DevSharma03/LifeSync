import numpy as np
import pandas as pd

# --------------------------------------------------
# FEATURE MAP (USED BY MODELS)
# --------------------------------------------------
FEATURE_MAP = {
    "health": [
        "sleep_hours", "sleep_time_variance", "exercise_days_per_week",
        "diet_ratio", "water_intake_liters", "steps_count",
        "distance_walked_km", "calories_burned",
        "sedentary_hours", "illness_days_monthly"
    ],
    "mind": [
        "depression_score", "anxiety_score", "stress_score",
        "childhood_trauma_score", "mood_stability_score",
        "meditation_days_per_week", "meditation_completion_ratio",
        "breathing_days_per_week", "breathing_completion_ratio",
        "distraction_ratio", "screen_time_non_work_hours",
        "family_support_ratio", "friends_support_ratio"
    ],
    "productivity": [
        "tasks_assigned", "tasks_completed", "task_completion_ratio",
        "planned_task_hours", "actual_task_hours", "time_efficiency_ratio",
        "priority_task_completion_ratio", "focus_level",
        "productivity_gap", "daily_energy_level"
    ],
    "finance": [
        "budget_limit", "total_expense", "budget_adherence_ratio",
        "expense_exceeding_ratio", "expense_tracking_score",
        "savings_ratio", "emergency_fund_score", "debt_pressure_score"
    ]
}


# --------------------------------------------------
# FEATURE CONSTRAINTS (SEMANTIC FIREWALL)
# --------------------------------------------------
FEATURE_CONSTRAINTS = {
    # Integers
    "exercise_days_per_week": ("int", 0, 7),
    "meditation_days_per_week": ("int", 0, 7),
    "breathing_days_per_week": ("int", 0, 7),
    "tasks_assigned": ("int", 0, 200),
    "tasks_completed": ("int", 0, 200),
    "steps_count": ("int", 0, 50000),
    "illness_days_monthly": ("int", 0, 31),

    # Time (hours/day)
    "sleep_hours": ("float", 0, 24),
    "sedentary_hours": ("float", 0, 24),
    "planned_task_hours": ("float", 0, 24),
    "actual_task_hours": ("float", 0, 24),
    "screen_time_non_work_hours": ("float", 0, 24),

    # Physical
    "water_intake_liters": ("float", 0, 10),
    "distance_walked_km": ("float", 0, 100),
    "calories_burned": ("float", 0, 10000),

    # Percent / Scores (0–100)
    "diet_ratio": ("percent", 0, 100),
    "task_completion_ratio": ("percent", 0, 100),
    "time_efficiency_ratio": ("percent", 0, 100),
    "priority_task_completion_ratio": ("percent", 0, 100),
    "budget_adherence_ratio": ("percent", 0, 100),
    "expense_exceeding_ratio": ("percent", 0, 100),
    "family_support_ratio": ("percent", 0, 100),
    "friends_support_ratio": ("percent", 0, 100),

    "stress_score": ("percent", 0, 100),
    "anxiety_score": ("percent", 0, 100),
    "depression_score": ("percent", 0, 100),
    "mood_stability_score": ("percent", 0, 100),
    "childhood_trauma_score": ("percent", 0, 100),
    "focus_level": ("percent", 0, 100),
    "productivity_gap": ("percent", 0, 100),
    "daily_energy_level": ("percent", 0, 100),
}


# --------------------------------------------------
# CONSTRAINT ENFORCEMENT
# --------------------------------------------------
def enforce_constraints(profile: dict) -> dict:
    clean = {}

    for k, v in profile.items():
        if k in FEATURE_CONSTRAINTS:
            kind, lo, hi = FEATURE_CONSTRAINTS[k]
            v = max(lo, min(v, hi))

            if kind == "int":
                v = int(round(v))
            else:
                v = round(float(v), 1)

        clean[k] = v

    return clean


# --------------------------------------------------
# CLUSTER UTILS
# --------------------------------------------------
def normalized_entropy(probs):
    probs = np.clip(probs, 1e-9, 1)
    return -np.sum(probs * np.log(probs)) / np.log(len(probs))


def generate_full_profile(user_15, probs, cluster_profiles, feature_influence):
    cid = np.random.choice(len(probs), p=probs)
    stats = cluster_profiles[cid]

    entropy = normalized_entropy(probs)
    confidence = 1 - entropy

    profile = {}

    for f in stats["mean"]:
        base = stats["mean"].get(f, 0)
        std = stats["std"].get(f, 1)

        noise = np.random.normal(0, std * (0.15 + 0.35 * confidence))

        influence = 0
        for src, targets in feature_influence.items():
            if f in targets:
                influence += confidence * targets[f] * (user_15.get(src, 50) - 50)

        value = base + influence + noise
        value = max(stats["p05"].get(f, value),
                    min(value, stats["p95"].get(f, value)))

        profile[f] = value

    profile = enforce_constraints(profile)

    return profile, {
        "cluster_id": int(cid),
        "entropy": float(entropy),
        "confidence": float(confidence)
    }


# --------------------------------------------------
# INFERENCE ENDPOINT LOGIC
# --------------------------------------------------
def infer_profile(user_json, artifacts):
    probs = artifacts["cluster_model"].predict_proba(
        pd.DataFrame([user_json])
    )[0]

    profile, meta = generate_full_profile(
        user_json,
        probs,
        artifacts["cluster_profiles"],
        artifacts["feature_influence"]
    )

    return {
        "cluster_probabilities": probs.tolist(),
        "confidence": meta,
        "generated_features": profile
    }


def predict_scores(full_profile, artifacts):
    df = pd.DataFrame([full_profile])

    # Enforce scaler feature order
    scaler_features = list(artifacts["scaler"].feature_names_in_)
    df = df.reindex(columns=scaler_features)
    df[scaler_features] = artifacts["scaler"].transform(df[scaler_features])

    # ---- Cascaded predictions ----
    health = artifacts["health_model"].predict(
        df[FEATURE_MAP["health"]]
    )[0]
    df["health_pred"] = health

    mind = artifacts["mind_model"].predict(
        df[FEATURE_MAP["mind"] + ["health_pred"]]
    )[0]
    df["mind_pred"] = mind

    prod = artifacts["productivity_model"].predict(
        df[FEATURE_MAP["productivity"] + ["health_pred", "mind_pred"]]
    )[0]
    df["productivity_pred"] = prod

    fin = artifacts["finance_model"].predict(
        df[FEATURE_MAP["finance"] + ["productivity_pred", "stress_score"]]
    )[0]
    df["finance_pred"] = fin

    life = artifacts["life_model"].predict(
        df[["health_pred", "mind_pred", "productivity_pred", "finance_pred"]]
    )[0]

    return {
        "health_score": round(float(health), 2),
        "mind_score": round(float(mind), 2),
        "productivity_score": round(float(prod), 2),
        "finance_score": round(float(fin), 2),
        "life_score": round(float(life), 2),
    }