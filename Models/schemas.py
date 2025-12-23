from pydantic import BaseModel, Field, StrictInt, StrictFloat
from typing import Dict, List


# ----------- COLD START INPUT (LATENT, 0–100) -----------
class UserColdStart(BaseModel):
    sleep_quality: StrictFloat = Field(..., ge=0, le=100)
    physical_activity_consistency: StrictFloat = Field(..., ge=0, le=100)
    diet_quality: StrictFloat = Field(..., ge=0, le=100)
    daily_energy_level: StrictFloat = Field(..., ge=0, le=100)
    sedentary_level: StrictFloat = Field(..., ge=0, le=100)

    stress_level: StrictFloat = Field(..., ge=0, le=100)
    anxiety_level: StrictFloat = Field(..., ge=0, le=100)
    mood_stability: StrictFloat = Field(..., ge=0, le=100)
    mindfulness_habit: StrictFloat = Field(..., ge=0, le=100)
    social_support: StrictFloat = Field(..., ge=0, le=100)

    focus_ability: StrictFloat = Field(..., ge=0, le=100)
    task_completion_reliability: StrictFloat = Field(..., ge=0, le=100)
    distraction_level: StrictFloat = Field(..., ge=0, le=100)

    financial_discipline: StrictFloat = Field(..., ge=0, le=100)
    financial_stress: StrictFloat = Field(..., ge=0, le=100)


# ----------- FULL PROFILE INPUT (OBSERVABLE, STRICT) -----------
class FullProfileInput(BaseModel):

    # Health
    sleep_hours: StrictFloat = Field(..., ge=0, le=24)
    sleep_time_variance: StrictFloat = Field(..., ge=0, le=10)
    exercise_days_per_week: StrictInt = Field(..., ge=0, le=7)
    diet_ratio: StrictFloat = Field(..., ge=0, le=100)
    water_intake_liters: StrictFloat = Field(..., ge=0, le=10)
    steps_count: StrictInt = Field(..., ge=0, le=50000)
    distance_walked_km: StrictFloat = Field(..., ge=0, le=100)
    calories_burned: StrictFloat = Field(..., ge=0, le=10000)
    sedentary_hours: StrictFloat = Field(..., ge=0, le=24)
    illness_days_monthly: StrictInt = Field(..., ge=0, le=31)

    # Mind
    depression_score: StrictFloat = Field(..., ge=0, le=100)
    anxiety_score: StrictFloat = Field(..., ge=0, le=100)
    stress_score: StrictFloat = Field(..., ge=0, le=100)
    childhood_trauma_score: StrictFloat = Field(..., ge=0, le=100)
    mood_stability_score: StrictFloat = Field(..., ge=0, le=100)
    meditation_days_per_week: StrictInt = Field(..., ge=0, le=7)
    meditation_completion_ratio: StrictFloat = Field(..., ge=0, le=100)
    breathing_days_per_week: StrictInt = Field(..., ge=0, le=7)
    breathing_completion_ratio: StrictFloat = Field(..., ge=0, le=100)
    distraction_ratio: StrictFloat = Field(..., ge=0, le=100)
    screen_time_non_work_hours: StrictFloat = Field(..., ge=0, le=24)
    family_support_ratio: StrictFloat = Field(..., ge=0, le=100)
    friends_support_ratio: StrictFloat = Field(..., ge=0, le=100)

    # Productivity
    tasks_assigned: StrictInt = Field(..., ge=0, le=200)
    tasks_completed: StrictInt = Field(..., ge=0, le=200)
    task_completion_ratio: StrictFloat = Field(..., ge=0, le=100)
    planned_task_hours: StrictFloat = Field(..., ge=0, le=24)
    actual_task_hours: StrictFloat = Field(..., ge=0, le=24)
    time_efficiency_ratio: StrictFloat = Field(..., ge=0, le=100)
    priority_task_completion_ratio: StrictFloat = Field(..., ge=0, le=100)
    focus_level: StrictFloat = Field(..., ge=0, le=100)
    productivity_gap: StrictFloat = Field(..., ge=0, le=100)
    daily_energy_level: StrictFloat = Field(..., ge=0, le=100)

    # Finance
    budget_limit: StrictFloat = Field(..., ge=0)
    total_expense: StrictFloat = Field(..., ge=0)
    budget_adherence_ratio: StrictFloat = Field(..., ge=0, le=100)
    expense_exceeding_ratio: StrictFloat = Field(..., ge=0, le=100)
    expense_tracking_score: StrictFloat = Field(..., ge=0, le=100)
    savings_ratio: StrictFloat = Field(..., ge=0, le=100)
    emergency_fund_score: StrictFloat = Field(..., ge=0, le=100)
    debt_pressure_score: StrictFloat = Field(..., ge=0, le=100)


# ----------- RESPONSES -----------
class InferProfileResponse(BaseModel):
    cluster_probabilities: List[float]
    confidence: Dict[str, float]
    generated_features: Dict[str, float]


class PredictionScores(BaseModel):
    health_score: float
    mind_score: float
    productivity_score: float
    finance_score: float
    life_score: float