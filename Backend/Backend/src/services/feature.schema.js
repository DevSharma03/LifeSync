const ALL_FEATURE_KEYS = [
  "sleep_hours",
  "sleep_time_variance",
  "exercise_days_per_week",
  "diet_ratio",
  "water_intake_liters",
  "steps_count",
  "distance_walked_km",
  "calories_burned",
  "sedentary_hours",
  "illness_days_monthly",
  "depression_score",
  "anxiety_score",
  "stress_score",
  "childhood_trauma_score",
  "mood_stability_score",
  "meditation_days_per_week",
  "meditation_completion_ratio",
  "breathing_days_per_week",
  "breathing_completion_ratio",
  "distraction_ratio",
  "screen_time_non_work_hours",
  "family_support_ratio",
  "friends_support_ratio",
  "tasks_assigned",
  "tasks_completed",
  "task_completion_ratio",
  "planned_task_hours",
  "actual_task_hours",
  "time_efficiency_ratio",
  "priority_task_completion_ratio",
  "focus_level",
  "productivity_gap",
  "daily_energy_level",
  "budget_limit",
  "total_expense",
  "budget_adherence_ratio",
  "expense_exceeding_ratio",
  "expense_tracking_score",
  "savings_ratio",
  "emergency_fund_score",
  "debt_pressure_score"
];

export function normalizeFeatureSchema(input) {
  const normalized = {};

  for (const key of ALL_FEATURE_KEYS) {
    normalized[key] = Number(input[key] ?? 0);
  }

  return normalized;
}
