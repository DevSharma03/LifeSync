export function generateSyntheticFeatures(coldInput) {
  const f = { ...coldInput };

  // ---------- HEALTH ----------
  f.sleep_time_variance = Math.abs(8 - f.sleep_hours);
  f.distance_walked_km = f.steps_count * 0.0008;
  f.calories_burned = f.steps_count * 0.04;
  f.illness_days_monthly = f.sleep_hours < 6 ? 3 : 1;

  // ---------- MIND ----------
  f.depression_score = 60 - f.mood_stability_score;
  f.anxiety_score = f.stress_score * 0.9;
  f.childhood_trauma_score = 40; // baseline
  f.meditation_days_per_week = 2;
  f.breathing_days_per_week = 2;

  // ---------- PRODUCTIVITY ----------
  f.tasks_assigned = 10;
  f.tasks_completed = Math.round(10 * (f.focus_level / 100));
  f.task_completion_ratio =
    f.tasks_completed / f.tasks_assigned;

  f.planned_task_hours = 8;
  f.actual_task_hours = 7;
  f.time_efficiency_ratio =
    f.actual_task_hours / f.planned_task_hours;

  // ---------- FINANCE ----------
  f.budget_adherence_ratio =
    f.total_expense / Math.max(f.budget_limit, 1);

  f.emergency_fund_score =
    f.savings_ratio > 20 ? 70 : 40;

  return f;
}
