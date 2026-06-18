# LifeSync – AI-Powered Personal Life Management Platform

<div align="center">

[![GitHub Stars](https://img.shields.io/github/stars/DevSharma03/LifeSync?style=social)](https://github.com/DevSharma03/LifeSync)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active_Development-brightgreen.svg)](#)

**Transform your life with intelligent AI insights across health, productivity, finance, and mental wellness**

[View Repository](https://github.com/DevSharma03/LifeSync) • [Report Issues](https://github.com/DevSharma03/LifeSync/issues) • [Discussions](https://github.com/DevSharma03/LifeSync/discussions)

</div>

---

## Table of Contents

- [Overview](#-overview)
- [System Architecture](#-system-architecture)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Setup & Installation](#-setup--installation)
- [API Reference](#-api-reference)
- [ML & AI Engine](#-ml--ai-engine)
- [Contributing](#-contributing)
- [License](#-license)

---

## 📋 Overview

LifeSync is a **production-grade, full-stack personal assistant platform** designed to unify health, mental wellness, productivity, and financial tracking into a single intelligent system. Unlike isolated tracking apps, LifeSync:

- **Connects the dots** between health, mood, productivity, and finances
- **Learns patterns** using advanced machine learning models trained on 20,000+ synthetic profiles
- **Generates holistic scores** via a 5-tier cascade prediction pipeline
- **Provides AI insights** using Groq LLM for personalized recommendations
- **Profiles users instantly** with cold-start learning from just 15 initial questions

### Core Value Proposition

| Feature | Benefit |
|---------|---------|
| **Unified Platform** | No app-switching; all life dimensions in one place |
| **ML-Powered** | 7 trained models with feature engineering |
| **Cold-Start Profiling** | Complete user profile generation from minimal data |
| **Explainable Scores** | Feature importance mapping shows drivers of life metrics |
| **AI Assistant** | Context-aware recommendations via Groq integration |
| **46+ Metrics** | Comprehensive tracking across 4 life dimensions |

---

## 🏗️ System Architecture

### High-Level Overview

```
┌─────────────────────────────────────────────────────────────┐
│                 LifeSync Full Stack                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────┐         ┌──────────────┐                  │
│  │React        │◄──────► │Express       │                  │
│  │Frontend     │ REST    │Backend       │                  │
│  │(Port 3000)  │ API     │(Port 4000)   │                  │
│  └─────────────┘         └──────────────┘                  │
│                                │                            │
│                                │                            │
│  ┌──────────────────┐   ┌─────▼─────────┐                 │
│  │FastAPI ML       │   │Groq LLM       │                  │
│  │Service          │   │Service        │                  │
│  │(Port 8000)      │   │(Port 9000)    │                  │
│  │                  │   │                │                 │
│  │• Clustering      │   │• Chat Agent   │                 │
│  │• Profiling       │   │• Insights     │                 │
│  │• Predictions     │   │• Recommend    │                 │
│  └──────────────────┘   └───────────────┘                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Data Flow

**1. Cold-Start Profiling**
```
Initial Assessment (15 Questions)
    ↓
Gaussian Mixture Model (12 Clusters)
    ↓
Feature Influence Mapping
    ↓
Complete User Profile (46 Features)
```

**2. Cascade Predictions**
```
User Profile (46 Features)
    ↓ LightGBM Model 1
Health Score
    ↓ LightGBM Model 2
Mind Score (+ Health Features)
    ↓ LightGBM Model 3
Productivity Score (+ Health + Mind)
    ↓ LightGBM Model 4
Finance Score (+ Productivity)
    ↓ LightGBM Model 5
Life Score (Weighted 4 Pillars)
```

**3. AI-Driven Insights**
```
Scores + User Profile
    ↓
Groq LLM Processing
    ↓
Personalized Recommendations
    ↓
Conversational Insights
```

---

## 🛠️ Technology Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | React 19.1, React Router 7.8, Recharts (charting), Lucide React (icons) |
| **Backend** | Node.js, Express 5.1, MongoDB (Mongoose 8.19), JWT Auth, Bcrypt |
| **ML/AI** | Python 3.8+, FastAPI, scikit-learn, LightGBM, Pandas, NumPy |
| **LLM Integration** | Groq API, Google Generative AI (Gemini), FastAPI |
| **DevOps** | Docker, Git, Environment-based configuration |
| **Testing** | React Testing Library, Jest |

**Repository Language Composition:**
```
JavaScript:       51.3%  (Frontend + Backend)
CSS:             29.6%  (Styling)
Jupyter:         11.2%  (ML Training Pipelines)
Python:           5.9%  (ML/LLM Services)
Jinja/HTML:       2.0%  (Templates)
```

---

## 📁 Project Structure

```
LifeSync/
│
├── Backend/                              # Node.js + Express REST API
│   ├── src/
│   │   ├── server.js                    # Express app initialization
│   │   ├── models/                      # MongoDB Mongoose schemas
│   │   │   ├── User.js
│   │   │   ├── Profile.js
│   │   │   └── Scores.js
│   │   ├── routes/                      # API endpoint definitions
│   │   │   ├── auth.js
│   │   │   ├── user.js
│   │   │   ├── scores.js
│   │   │   └── predictions.js
│   │   ├── controllers/                 # Business logic handlers
│   │   ├── middleware/                  # Auth, validation, error handling
│   │   └── config/                      # Database & service configs
│   ├── package.json
│   ├── .env.example
│   └── .gitignore
│
├── Frontend/                             # React + Vite Single Page App
│   ├── src/
│   │   ├── index.js
│   │   ├── App.jsx                      # Main app component
│   │   ├── components/
│   │   │   ├── Dashboard/               # Main dashboard
│   │   │   ├── LifeScore/              # Score visualization
│   │   │   ├── Assessment/             # Initial assessment form
│   │   │   ├── Recommendations/        # AI recommendations panel
│   │   │   └── Common/                 # Reusable UI components
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Profile.jsx
│   │   ├── services/
│   │   │   ├── api.js                  # Axios instance & API calls
│   │   │   ├── auth.js
│   │   │   └── ml.js                   # ML service integration
│   │   ├── hooks/                      # Custom React hooks
│   │   └── styles/                     # Global & component styles
│   ├── package.json
│   ├── .env.example
│   └── public/
│
├── LLM/                                  # FastAPI AI Agent Service
│   ├── Agent.py                         # Core AI logic
│   ├── Agent_API.py                     # FastAPI endpoint handlers
│   ├── Router.py                        # Request routing logic
│   ├── wrapper.py                       # Groq client wrapper
│   ├── Workers/                         # Domain-specific workers
│   │   ├── Health_worker/
│   │   │   ├── wrapper.py               # Gemini API wrapper
│   │   │   └── config/config.json
│   │   ├── Mind_worker/
│   │   ├── Productivity_worker/
│   │   ├── Finance_worker/
│   │   └── Fitness_worker/
│   ├── Config/
│   │   └── Config.json                  # API keys & model config
│   ├── requirements.txt
│   ├── main.py                          # FastAPI application entry
│   └── .env.example
│
└── Models/                               # ML Training & Inference
    ├── Clustering_Dump/
    │   ├── cluster_profiles.json        # 12 cluster centroids (46 features each)
    │   ├── feature_influence.json       # Feature importance per cluster
    │   └── cluster_predictor.joblib     # Trained GMM model
    │
    ├── Prediction_Dump/
    │   ├── health_model.pkl             # LightGBM health score predictor
    │   ├── mind_model.pkl               # Mental wellness predictor
    │   ├── productivity_model.pkl       # Productivity score predictor
    │   ├── finance_model.pkl            # Finance score predictor
    │   ├── life_model.pkl               # Overall life score predictor
    │   └── feature_scaler.pkl           # StandardScaler for all features
    │
    ├── Training_Pipeline/
    │   ├── Clustering_Profile_Model_Train_Pipeline.ipynb
    │   │   └── Trains Gaussian Mixture Model on synthetic profiles
    │   │   └── Generates feature influence mappings
    │   │   └── Validates cluster coherence
    │   │
    │   └── Prediction_model.ipynb
    │       └── Trains 5-tier LightGBM cascade
    │       └── Handles feature engineering
    │       └── Evaluates model performance
    │
    ├── app.py                           # FastAPI inference server
    ├── schemas.py                       # Pydantic models for validation
    ├── requirements.txt
    └── .env.example
```

---

## 🚀 Setup & Installation

### Prerequisites

```
✅ Node.js v16+ and npm/yarn
✅ Python 3.8+
✅ MongoDB (local or Atlas connection string)
✅ Groq API Key (free: https://console.groq.com/)
✅ Google Gemini API Key (optional, for extended workers)
```

### 1. Clone Repository

```bash
git clone https://github.com/DevSharma03/LifeSync.git
cd LifeSync
```

### 2. Backend Setup (Node.js + Express)

```bash
cd Backend

# Install dependencies
npm install

# Create environment file
cat > .env << EOF
# Server
PORT=4000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/lifesync
# or MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/lifesync

# Authentication
JWT_SECRET=your_super_secret_jwt_key_change_this
JWT_EXPIRE=7d

# ML Services
ML_SERVICE_URL=http://localhost:8000
LLM_SERVICE_URL=http://localhost:9000

# External APIs
GROQ_API_KEY=your_groq_api_key_here
EOF

# Verify database connection
node -e "require('mongoose').connect(process.env.MONGODB_URI).then(() => console.log('✅ MongoDB connected')).catch(e => console.log('❌ Error:', e.message))"

# Start development server (with hot-reload via nodemon)
npm start
# ✅ Server running at http://localhost:4000
```

### 3. Frontend Setup (React)

```bash
cd Frontend

# Install dependencies
npm install

# Create environment file
cat > .env << EOF
REACT_APP_API_URL=http://localhost:4000
REACT_APP_ML_URL=http://localhost:8000
REACT_APP_LLM_URL=http://localhost:9000
REACT_APP_ENV=development
EOF

# Start development server
npm start
# ✅ Application running at http://localhost:3000
```

### 4. ML Service Setup (Python FastAPI)

```bash
cd Models

# Create Python virtual environment
python -m venv venv

# Activate virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
# venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start ML inference server
uvicorn app:app --reload --host 0.0.0.0 --port 8000
# ✅ ML API running at http://localhost:8000
# 📚 Interactive docs at http://localhost:8000/docs
```

### 5. LLM Service Setup (Groq AI Agent)

```bash
cd LLM

# Create Python virtual environment
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows

# Install dependencies
pip install -r requirements.txt

# Configure environment
cat > .env << EOF
GROQ_API_KEY=your_groq_api_key
GROQ_MODEL=mixtral-8x7b-32768
GEMINI_API_KEYS=["key1", "key2"]  # Optional for workers
EOF

# Start FastAPI server
python main.py
# or with auto-reload:
uvicorn Agent_API:app --reload --host 0.0.0.0 --port 9000
# ✅ LLM API running at http://localhost:9000
```

### Verify All Services

```bash
# Backend
curl http://localhost:4000

# Frontend
curl http://localhost:3000

# ML Service
curl http://localhost:8000/docs

# LLM Service
curl http://localhost:9000/docs
```

---

## 🔌 API Reference

### ML Service (FastAPI) – Port 8000

#### Generate User Profile

```http
POST /infer-profile
Content-Type: application/json

{
  "sleep_quality": 65,
  "stress_level": 55,
  "exercise_frequency": 50,
  "diet_quality": 72,
  "hydration": 60,
  "meditation_frequency": 30,
  "work_hours": 8,
  "financial_stress": 45
}

Response:
{
  "cluster_id": 3,
  "cluster_confidence": 0.82,
  "profile": {
    "sleep_hours": 7.2,
    "exercise_days_per_week": 4,
    "steps_per_day": 8500,
    "water_intake_liters": 2.5,
    ... (46 features total)
  }
}
```

#### Predict Life Scores

```http
POST /predict-scores
Content-Type: application/json

{
  "sleep_hours": 7.2,
  "exercise_days_per_week": 4,
  "stress_score": 55,
  ... (46 features)
}

Response:
{
  "health_score": 78,
  "mind_score": 72,
  "productivity_score": 81,
  "finance_score": 65,
  "life_score": 74,
  "feature_importance": {
    "health": ["sleep_hours", "exercise_frequency", "diet_quality"],
    "mind": ["stress_level", "meditation", "social_connection"],
    ...
  }
}
```

**Full API Docs:** `http://localhost:8000/docs` (Swagger UI)

---

### LLM Service (FastAPI) – Port 9000

#### Chat with AI Assistant

```http
POST /query
Content-Type: application/json

{
  "user_query": "How can I improve my health score?",
  "messages": [
    {
      "role": "user",
      "content": "Previous context..."
    }
  ]
}

Response:
{
  "response": "Based on your profile, you're averaging 6.2 hours of sleep but your cluster typically needs 7-8 hours. Increasing sleep by 1-2 hours would boost your health score by ~15 points..."
}
```

#### Get Recommendations

```http
POST /api/recommend
Content-Type: application/json

{
  "user_profile": { /* 46 features */ },
  "current_scores": {
    "health_score": 78,
    "mind_score": 72,
    ...
  }
}

Response:
{
  "recommendations": [
    {
      "domain": "Health",
      "action": "Increase sleep to 7-8 hours",
      "impact": "+15 points to health score",
      "priority": "high"
    },
    ...
  ]
}
```

---

### Backend API (Express) – Port 4000

#### Authentication

```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "secure_password"
}

Response: { token, user }
```

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "secure_password"
}

Response: { token, user }
```

#### User Profile

```http
GET /api/user/profile
Authorization: Bearer <token>

Response: { email, createdAt, profile_data }
```

```http
PUT /api/user/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "sleep_quality": 70,
  "stress_level": 50,
  ...
}
```

#### Life Scores

```http
GET /api/scores
Authorization: Bearer <token>

Response: {
  "health_score": 78,
  "mind_score": 72,
  "productivity_score": 81,
  "finance_score": 65,
  "life_score": 74,
  "last_updated": "2024-01-15T10:30:00Z"
}
```

```http
POST /api/scores/calculate
Authorization: Bearer <token>

Response: { scores, recommendations }
```

---

## 🤖 ML & AI Engine

### Cold-Start Profiling Model

**Problem:** Generate complete user profiles from minimal initial data

**Solution:** Gaussian Mixture Model (GMM) + Feature Influence Mapping

```
Input: 15 Quick Assessment Questions
   ↓
GMM Clustering (12 Clusters, 20,000 Training Profiles)
   ↓
Feature Influence Mapping (Which features define each cluster?)
   ↓
Output: 46-Feature Complete User Profile
```

**Key Metrics:**
- **Top-1 Accuracy:** 40.6%
- **Top-3 Accuracy:** 83%
- **Profile Generation MAE:** 27.5% (normalized)
- **Zero Sanity Check Violations**

**Example:**
```python
Input Assessment:
{
  "sleep_quality": 65,
  "stress_level": 55,
  "exercise_frequency": 50
}

Generated Profile:
{
  "sleep_hours": 7.2,
  "stress_score": 55,
  "exercise_days_per_week": 4,
  "steps_per_day": 8500,
  "water_intake_liters": 2.5,
  ...  # 41 more features
}
```

### Cascade Prediction Pipeline

**Problem:** Predict holistic life scores accounting for interconnections

**Solution:** 5-Tier LightGBM Cascade

```
Tier 1: Health Score Model
├─ Input: 12 health-related features
├─ Output: Health Score (0-100)
└─ Training Data: 20,000 profiles

Tier 2: Mind Score Model
├─ Input: 8 mental wellness features + Health Score
├─ Output: Mind Score (0-100)
└─ Learns from both raw features and health impact

Tier 3: Productivity Score Model
├─ Input: 10 productivity features + Health + Mind Scores
├─ Output: Productivity Score (0-100)
└─ Captures how health/mind affects productivity

Tier 4: Finance Score Model
├─ Input: 8 finance features + Productivity Score
├─ Output: Finance Score (0-100)
└─ Models financial stress from overall life status

Tier 5: Life Score Model
├─ Input: All 4 dimension scores (weighted)
├─ Output: Overall Life Score (0-100)
└─ Final holistic wellness metric
```

**Feature Constraints (Semantic Firewall)**

All predictions are validated to ensure physical/logical consistency:

```python
# Time Constraints (24-hour day)
sleep_hours: [0, 24]
sedentary_hours: [0, 24]
exercise_hours: [0, 24]

# Weekly Constraints
exercise_days_per_week: [0, 7]
meditation_days_per_week: [0, 7]
work_days_per_week: [0, 7]

# Score Constraints
health_score: [0, 100]
stress_score: [0, 100]
budget_adherence: [0, 100]

# Physical Constraints
water_intake_liters: [0, 10]
distance_walked_km: [0, 100]
calories_burned: [0, 10000]
```

### Groq LLM Integration

LifeSync uses **Groq's fast LLM inference** for:

| Task | Purpose |
|------|---------|
| **Chat Agent** | Answer user questions about their life metrics |
| **Recommendations** | Generate personalized actions to improve scores |
| **Insights** | Explain trends, patterns, and causality |
| **Natural Language** | Understand user intent without structured input |

**Example Conversation:**
```
User: "Why is my productivity score lower than last week?"

AI: "Your productivity score dropped from 81 to 76 because:
1. Sleep decreased from 7.2 to 6.5 hours (primary factor)
2. Stress increased from 55 to 62
3. Exercise frequency stayed constant

Recommendation: Focus on sleep restoration. Adding 1 hour of sleep 
would likely restore productivity score to 80+. Combined with reducing 
stress by 5 points through meditation, you'd reach 83-85."
```

---

## 🐛 Troubleshooting

### Backend Connection Issues

```bash
# Check if MongoDB is running
mongosh  # or mongo on older versions

# Verify MongoDB URI
cat Backend/.env | grep MONGODB_URI

# Test connection directly
node << 'EOF'
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected'))
  .catch(e => console.log('❌', e.message));
EOF
```

### Port Already in Use

```bash
# Find process using port
# macOS/Linux:
lsof -i :4000   # Backend
lsof -i :3000   # Frontend
lsof -i :8000   # ML Service
lsof -i :9000   # LLM Service

# Windows:
netstat -ano | findstr :4000

# Kill process
kill -9 <PID>  # macOS/Linux
taskkill /PID <PID> /F  # Windows
```

### ML Model Loading Errors

```bash
cd Models

# Verify model files exist
ls Prediction_Dump/
# Output should show: health_model.pkl, mind_model.pkl, etc.

# Test model loading
python << 'EOF'
import joblib
try:
    model = joblib.load('Prediction_Dump/health_model.pkl')
    print('✅ Models loaded successfully')
except Exception as e:
    print(f'❌ Error: {e}')
EOF
```

### Groq API Errors

```bash
# Verify API key is set
echo $GROQ_API_KEY  # macOS/Linux
echo %GROQ_API_KEY%  # Windows

# Test API connectivity
curl https://api.groq.com/openai/v1/chat/completions \
  -H "Authorization: Bearer $GROQ_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"mixtral-8x7b-32768","messages":[{"role":"user","content":"Hi"}]}'
```

### Frontend API Integration

```bash
# Verify backend is reachable
curl http://localhost:4000

# Check .env configuration
cat Frontend/.env

# Clear cache and rebuild
cd Frontend
rm -rf node_modules package-lock.json
npm install
npm start
```

---

## 🤝 Contributing

We welcome contributions! Follow these guidelines:

### 1. Fork & Clone

```bash
git clone https://github.com/YOUR_USERNAME/LifeSync.git
cd LifeSync
```

### 2. Create Feature Branch

```bash
git checkout -b feature/your-feature-name
# or bugfix/issue-description
```

### 3. Make Changes

- Follow existing code style
- Add tests for new features
- Update documentation
- Write atomic, descriptive commits

### 4. Commit & Push

```bash
git add .
git commit -m "feat(component): Add new feature description"
git push origin feature/your-feature-name
```

### 5. Submit Pull Request

Open a PR with:
- Clear description of changes
- Link to related issues
- Screenshots for UI changes
- Test results

### Code Style Guidelines

**JavaScript/React:**
```javascript
// Use ES6+ syntax
const handleClick = async () => { /* ... */ };

// Use functional components
export default function MyComponent() {
  return <div>...</div>;
}
```

**Python:**
```python
# Follow PEP 8
def predict_scores(profile: dict) -> dict:
    """Predict life scores from user profile."""
    return scores

# Use type hints
from typing import Dict, List
```

**Git Commit Format:**
```
feat(module): Add new feature
fix(module): Resolve specific bug
refactor(module): Improve code structure
docs(module): Update documentation
test(module): Add test coverage
chore(module): Update dependencies
```

---

## 📈 Roadmap

### ✅ Phase 1 (Current)
- [x] Core ML models (GMM clustering, 5-tier LightGBM)
- [x] FastAPI ML inference service
- [x] Express REST backend with MongoDB
- [x] React dashboard frontend
- [x] Groq AI integration
- [x] Cold-start profiling

### 🔄 Phase 2 (Next 3 months)
- [ ] Mobile app (React Native)
- [ ] Enhanced authentication (OAuth, 2FA)
- [ ] Advanced analytics dashboard
- [ ] Notification system
- [ ] Real-time score updates

### 🎯 Phase 3 (Future)
- [ ] Third-party integrations (Fitbit, YNAB, Calendar)
- [ ] Multi-language support
- [ ] Social/community features
- [ ] Gamification system
- [ ] Enterprise analytics

---

## 📚 Additional Documentation

- **[ML Training Pipeline](Models/Training_Pipeline/)** – Jupyter notebooks for model training
- **[LLM Agent Details](LLM/)** – AI agent architecture and worker system
- **[API Documentation](Models/app.py#L1-L50)** – Swagger UI at `http://localhost:8000/docs`
- **[Environment Variables](Backend/.env.example)** – Configuration reference

---

## 📄 License

This project is licensed under the **MIT License** – see [LICENSE](LICENSE) for details.

**Permissions:**
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution

**Requirements:**
- ✔️ License and copyright notice
- ✔️ Attribution to original author

---

## 🙏 Acknowledgments

- **[Groq](https://www.groq.com/)** – Fast LLM inference technology
- **[Open Source Community](https://opensource.org/)** – scikit-learn, LightGBM, FastAPI, React
- **Contributors & Supporters** – Thank you for believing in LifeSync

---

## 📞 Contact & Support

**Developer:** Devashish Sharma

- 🔗 GitHub: [@DevSharma03](https://github.com/DevSharma03)
- 💼 LinkedIn: [devashish-sharma](https://linkedin.com/in/devashish-sharma)
- 📧 Issues: [Report bugs](https://github.com/DevSharma03/LifeSync/issues)
- 💬 Discussions: [Ask questions](https://github.com/DevSharma03/LifeSync/discussions)

---

<div align="center">

### ⭐ Found LifeSync helpful? Please star us on GitHub!

**Built with ❤️ by [Devashish Sharma](https://github.com/DevSharma03)**

[🔝 Back to Top](#lifesync--ai-powered-personal-life-management-platform)

</div>
