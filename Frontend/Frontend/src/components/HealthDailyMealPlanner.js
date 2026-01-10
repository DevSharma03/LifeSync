import React, { useState } from "react";
import "../styles/HealthDailyMealPlanner.css";

const FOOD_DB = [
  {
    name: "Paneer",
    tags: ["veg"],
    calories: 260,
    protein: 20,
    carbs: 10,
    fats: 15,
    iron: 2,
    vitamins: ["B12"],
  },
  {
    name: "Tofu",
    tags: ["veg", "vegan"],
    calories: 240,
    protein: 20,
    carbs: 10,
    fats: 8,
    iron: 3,
    vitamins: [],
  },
  {
    name: "Chicken",
    tags: ["nonveg"],
    calories: 280,
    protein: 35,
    carbs: 0,
    fats: 8,
    iron: 3,
    vitamins: ["B12"],
  },
  {
    name: "Eggs",
    tags: ["nonveg"],
    calories: 155,
    protein: 13,
    carbs: 1,
    fats: 11,
    iron: 1.5,
    vitamins: ["B12"],
  },
  {
    name: "Brown Rice",
    tags: ["veg", "vegan"],
    calories: 220,
    protein: 5,
    carbs: 45,
    fats: 2,
    iron: 1,
    vitamins: [],
  },
  {
    name: "Vegetables",
    tags: ["veg", "vegan"],
    calories: 90,
    protein: 4,
    carbs: 15,
    fats: 1,
    iron: 2,
    vitamins: ["A", "C"],
  },
  {
    name: "Avocado",
    tags: ["veg", "vegan"],
    calories: 160,
    protein: 2,
    carbs: 12,
    fats: 15,
    iron: 1,
    vitamins: ["E"],
  },
];

export default function HealthDailyMealPlanner({ onClose }) {
  const [filter, setFilter] = useState("all");
  const [selectedItems, setSelectedItems] = useState([]);
  const [portions, setPortions] = useState({});

  /* ---------- HELPERS ---------- */
  const addItem = (item) => {
    if (selectedItems.find((i) => i.name === item.name)) return;
    setSelectedItems([...selectedItems, item]);
  };

  const removeItem = (name) => {
    setSelectedItems((prev) => prev.filter((i) => i.name !== name));
  };

  const updatePortion = (item, value) => {
    setPortions((prev) => ({ ...prev, [item.name]: value }));
  };

  const calc = (key) =>
    selectedItems.reduce(
      (sum, item) => sum + (item[key] || 0) * (portions[item.name] || 1),
      0
    );

  const totalCalories = calc("calories");
  const totalProtein = calc("protein");
  const totalCarbs = calc("carbs");
  const totalFats = calc("fats");
  const totalIron = calc("iron");

  const hasB12 = selectedItems.some((i) => i.vitamins?.includes("B12"));

  const aiExplain = () => {
    if (totalProtein >= 35)
      return "High-protein meal — good for muscle recovery 💪";
    if (totalCalories < 400)
      return "Light meal — suitable for weight control 🌱";
    return "Balanced meal — supports overall wellness ✨";
  };

  /* ---------- RENDER ---------- */
  return (
    <div className="health_daily_meal_overlay">
      <div className="health_daily_meal_modal">
        {/* HEADER */}
        <div className="health_daily_meal_header">
          <h3>Daily Meal Planner</h3>
          <p>Build your meal by selecting foods and adjusting portions</p>
        </div>

        {/* FILTER */}
        <div className="health_daily_meal_filter">
          {["all", "veg", "vegan", "nonveg"].map((type) => (
            <button
              key={type}
              className={filter === type ? "active" : ""}
              onClick={() => setFilter(type)}
            >
              {type.toUpperCase()}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="health_daily_meal_grid">
          {/* FOOD LIST */}
          <div className="health_daily_meal_foods">
            {FOOD_DB.filter(
              (item) => filter === "all" || item.tags.includes(filter)
            ).map((item) => {
              const added = selectedItems.some((i) => i.name === item.name);
              return (
                <div key={item.name} className="health_daily_meal_food_card">
                  <div>
                    <h4>{item.name}</h4>
                    <p>
                      {item.calories} kcal · {item.protein}g protein
                    </p>
                  </div>
                  <button disabled={added} onClick={() => addItem(item)}>
                    {added ? "Added" : "+ Add"}
                  </button>
                </div>
              );
            })}
          </div>

          {/* MY PLATE */}
          <div className="health_daily_meal_plate">
            <h4>My Plate</h4>

            {selectedItems.length === 0 && (
              <p className="health_daily_meal_empty">No food selected 🍽️</p>
            )}

            {selectedItems.map((item) => (
              <div key={item.name} className="health_daily_meal_selected">
                <div className="health_daily_meal_selected_header">
                  <span>{item.name}</span>
                  <button onClick={() => removeItem(item.name)}>✕</button>
                </div>

                <div className="health_daily_meal_portions">
                  {[0.5, 1, 1.5, 2].map((p) => (
                    <button
                      key={p}
                      className={
                        (portions[item.name] || 1) === p ? "active" : ""
                      }
                      onClick={() => updatePortion(item, p)}
                    >
                      {p}×
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {selectedItems.length > 0 && (
              <div className="health_daily_meal_summary">
                <p>🔥 {totalCalories} kcal</p>
                <p>💪 {totalProtein} g protein</p>
                <p>🥔 {totalCarbs} g carbs</p>
                <p>🥑 {totalFats} g fats</p>
              </div>
            )}
          </div>
        </div>

        {/* FEEDBACK */}
        <div className="health_daily_meal_feedback">
          {!hasB12 && <p className="warn">⚠ Vitamin B12 missing</p>}
          {totalIron < 18 && <p className="warn">⚠ Low Iron</p>}
          <p className="ai">🤖 {aiExplain()}</p>
        </div>

        {/* ACTIONS */}
        <div className="health_daily_meal_actions">
          <button className="cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="save">Save Meal</button>
        </div>
      </div>
    </div>
  );
}
