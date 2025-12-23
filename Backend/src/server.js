// src/server.js
import dotenv from "dotenv";
import connectDB from "./config/db.js"; 
import app from "./app.js"; // Import the app you configured with routes & middleware
import "./jobs/score.job.js"; // 👈 add this

dotenv.config();

// Connect to MongoDB
connectDB();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


