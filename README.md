# 🚀 LifeSync – Intelligent Personal Assistant & Life-Management Platform

<div align="center">

### Unified AI-Powered Life Management Across Health, Productivity, Finance & Mental Wellness

[![GitHub Stars](https://img.shields.io/github/stars/DevSharma03/LifeSync?style=social)](https://github.com/DevSharma03/LifeSync)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active_Development-brightgreen.svg)](#)
[![Topics](https://img.shields.io/badge/Topics-AI%20|%20ML%20|%20Full--Stack-purple)](#)

**[🌐 Visit Repository](#) • [📚 Documentation](#) • [🐛 Report Issues](#) • [💡 Suggest Features](#)**

</div>

---

## 📸 Project Showcase

> *Add your project images and screenshots here*

| Feature | Preview |
|---------|---------|
| **Dashboard & Analytics** | ![Dashboard](https://via.placeholder.com/400x250/6C63FF/FFFFFF?text=Dashboard+Analytics) |
| **AI Chat Assistant** | ![Chat](https://via.placeholder.com/400x250/6C63FF/FFFFFF?text=AI+Chat+Interface) |
| **Health Tracking** | ![Health](https://via.placeholder.com/400x250/6C63FF/FFFFFF?text=Health+Metrics) |
| **Smart Predictions** | ![Predictions](https://via.placeholder.com/400x250/6C63FF/FFFFFF?text=ML+Predictions) |

---

## ✨ What is LifeSync?

**LifeSync** is a production-grade, full-stack personal assistant platform that uses machine learning and AI to provide intelligent insights across four life dimensions:

- **🏥 Health** – Sleep tracking, exercise monitoring, nutrition analysis
- **🧠 Mental Wellness** – Stress management, mood tracking, mindfulness support
- **⚡ Productivity** – Task optimization, focus improvement, time management
- **💰 Financial Health** – Expense tracking, savings goals, financial wellness

<div align="center">

```
┌──────────────────────────────────────────────────────────┐
│   LifeSync: Harmonize Your Life with Intelligent AI      │
│                                                           │
│  Health  ❤️  →  Mind  🧠  →  Productivity  ⚡  →  Finance  💰
│         ↓         ↓              ↓                    ↓
│         └─────────────────────────────────────────────┘
│              Unified Life Score 📊
└──────────────────────────────────────────────────────────┘
```

</div>

---

## 🎯 Core Features

### 🤖 AI & Machine Learning
- **Cold-Start Personalization** – Intelligent user profiling from minimal initial data
- **Gaussian Mixture Models** – 12-cluster user segmentation for personalized recommendations
- **LightGBM Cascade Prediction** – 5-tier predictive models (Health → Mind → Productivity → Finance → Life Score)
- **Groq AI Integration** – Fast, low-latency LLM responses for conversational AI
- **Feature Influence Mapping** – Explainable AI showing how features impact life scores

### 💾 Data Architecture
- **Multi-Dimensional Features** – 46+ tracked metrics across 4 life dimensions
- **Semantic Constraints** – Intelligent validation firewall for data integrity
- **Normalized Entropy Tracking** – Confidence scoring for predictions
- **Production-Grade Models** – Trained on 20,000+ synthetic user profiles

### 🛠️ Technical Stack
- **Backend** – Node.js + Express REST API
- **Frontend** – React with responsive UI
- **AI/ML** – Python FastAPI microservice with scikit-learn, LightGBM
- **Models** – Clustering, prediction, and profiling pipelines
- **Deployment** – Docker-ready, containerized architecture

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        LifeSync Architecture                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌──────────────────┐        ┌──────────────────┐                │
│  │    React UI      │        │   Dashboard      │                │
│  │   (Frontend)     │───────→│  & Analytics     │                │
│  └──────────────────┘        └──────────────────┘                │
│          ↓                            ↑                           │
│          │ HTTP/REST                  │                           │
│          ↓                            │                           │
│  ┌──────────────────────────────────────────────┐                │
│  │      Express Backend (Node.js)               │                │
│  │  ├─ User Management                          │                │
│  │  ├─ Data Aggregation                         │                │
│  │  ├─ Authentication & Auth                    │                │
│  │  └─ API Gateway                              │                │
│  └──────────────────────────────────────────────┘                │
│          ↓                            ↑                           │
│          │ gRPC/REST                  │                           │
│          ↓                            │                           │
│  ┌──────────────────────────────────────────────┐                │
│  │      FastAPI ML Service (Python)             │                │
│  │  ├─ Cold-Start Personalization               │                │
│  │  ├─ User Clustering (GMM)                    │                │
│  │  ├─ Score Prediction (LightGBM Cascade)     │                │
│  │  └─ Groq AI Agent Router                     │                │
│  └──────────────────────────────────────────────┘                │
│          ↓                            ↑                           │
│  ┌──────────────────┐        ┌──────────────────┐                │
│  │ Clustering Models│        │  Prediction Mdls │                │
│  │ & Feature Maps   │        │  (Health, Mind...) │                │
│  └──────────────────┘        └──────────────────┘                │
│                                                                   │
│  ┌──────────────────────────────────────────────┐                │
│  │        Groq LLM Integration                  │                │
│  │  ├─ AI Chat Assistant                        │                │
│  │  ├─ Smart Recommendations                    │                │
│  │  └─ Natural Language Queries                 │                │
│  └──────────────────────────────────────────────┘                │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📁 Repository Structure

```
LifeSync/
│
├── 🔌 Backend/
│   ├── package.json              # Dependencies
│   ├── .env                       # Environment config
│   ├── Backend/                   # Source code
│   │   ├── models/                # DB schemas
│   │   ├── routes/                # API endpoints
│   │   ├── controllers/           # Business logic
│   │   └── middleware/            # Auth, validation
│   └── src/                       # Main application
│
├── 💻 Frontend/
│   ├── package.json
│   ├── Frontend/                  # React app
│   │   ├── components/            # Reusable UI components
│   │   ├── pages/                 # Page routes
│   │   ├── hooks/                 # Custom React hooks
│   │   └── services/              # API integrations
│   ├── public/                    # Static assets
│   └── src/                       # Source directory
│
├── 🧠 LLM/
│   ├── Agent.py                   # AI Agent core logic
│   ├── Agent_API.py               # FastAPI server
│   ├── Router.py                  # Request routing
│   ├── wrapper.py                 # Model wrappers
│   ├── main.py                    # Entry point
│   ├── Config/                    # Configuration files
│   └── Workers/                   # Worker processes
│
├── 🏋️ Models/
│   ├── Clustering_Dump/
│   │   ├── cluster_profiles.json  # 12 user profiles
│   │   ├── feature_influence.json # Feature correlations
│   │   └── cluster_predictor.joblib
│   │
│   ├── Prediction_Dump/
│   │   ├── health_model.pkl       # Health prediction
│   │   ├── mind_model.pkl         # Mental wellness
│   │   ├── productivity_model.pkl # Task optimization
│   │   ├── finance_model.pkl      # Financial wellness
│   │   ├── life_model.pkl         # Overall life score
│   │   └── feature_scaler.pkl
│   │
│   ├── Training_Pipeline/
│   │   ├── Profile_Culstering_Model/
│   │   │   └── Clusturing_Profile_Model_Train_Pipeline.ipynb
│   │   └── Score_Prediction_Model/
│   │       └── Prediction_model.ipynb
│   │
│   ├── app.py                     # ML API endpoints
│   ├── inference.py               # Prediction logic
│   ├── loader.py                  # Model loading
│   ├── schemas.py                 # Data validation
│   └── requirements.txt           # Python dependencies
│
├── 📄 README.md                   # This file
├── 📋 LICENSE                     # MIT License
└── 📝 CONTRIBUTING.md             # Contribution guidelines

```

---

## 🛠️ Technology Stack

| Layer | Tech Stack |
|-------|-----------|
| **Frontend** | ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript) ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3) |
| **Backend** | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs) ![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express) ![REST API](https://img.shields.io/badge/REST-API-blue?style=flat) |
| **AI/ML** | ![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python) ![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat&logo=fastapi) ![scikit-learn](https://img.shields.io/badge/scikit--learn-F7931E?style=flat&logo=scikit-learn) ![LightGBM](https://img.shields.io/badge/LightGBM-grey?style=flat) |
| **LLM** | ![Groq](https://img.shields.io/badge/Groq_AI-FF6B6B?style=flat) ![LLM](https://img.shields.io/badge/LLM-Integration-blueviolet?style=flat) |
| **ML Models** | ![GaussianMixture](https://img.shields.io/badge/GaussianMixture-Clustering-blue?style=flat) ![LightGBM](https://img.shields.io/badge/Cascade-Prediction-green?style=flat) |
| **DevOps** | ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker) ![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git) |

### Language Composition

```
JavaScript ████████████████████░░░░░░░░░ 51.3%
CSS        ███████████░░░░░░░░░░░░░░░░░░░ 29.6%
Jupyter    ███░░░░░░░░░░░░░░░░░░░░░░░░░░ 11.2%
Python     ██░░░░░░░░░░░░░░░░░░░░░░░░░░░  5.9%
Jinja      ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.5%
HTML       ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.5%
```

---

## 🚀 Quick Start Guide

### 📋 Prerequisites

- ✅ **Node.js** v16+ ([Download](https://nodejs.org/))
- ✅ **Python** 3.8+ ([Download](https://www.python.org/))
- ✅ **npm** or **yarn**
- ✅ **Git** ([Download](https://git-scm.com/))
- ⚙️ **Docker** (Optional)
- 🔑 **Groq API Key** (for AI features) – [Get one free](https://console.groq.com/)

---

### 1️⃣ Backend Setup (Node.js + Express)

```bash
# Clone repository
git clone https://github.com/DevSharma03/LifeSync.git
cd LifeSync/Backend

# Install dependencies
npm install

# Configure environment
cp .env .env.local
# Edit .env.local with your settings:
# - PORT=4000
# - MONGODB_URI=your_mongodb_connection
# - JWT_SECRET=your_secret_key

# Start development server
npm run dev
# or
npm start

# ✅ Backend running at http://localhost:4000
```

**Environment Variables:**
```env
PORT=4000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/lifesync
JWT_SECRET=your_jwt_secret_key_here
ML_SERVICE_URL=http://localhost:9000
GROQ_API_KEY=your_groq_api_key
```

---

### 2️⃣ Frontend Setup (React)

```bash
# Navigate to Frontend
cd LifeSync/Frontend

# Install dependencies
npm install

# Configure environment
cp .env .env.local
# Edit with your backend URL:
# REACT_APP_API_URL=http://localhost:4000
# REACT_APP_LLM_URL=http://localhost:9000

# Start React dev server
npm start

# ✅ Frontend running at http://localhost:3000
```

**Environment Variables:**
```env
REACT_APP_API_URL=http://localhost:4000
REACT_APP_LLM_URL=http://localhost:9000
REACT_APP_ENV=development
```

---

### 3️⃣ LLM/AI Service Setup (Python + FastAPI)

```bash
# Navigate to LLM service
cd LifeSync/LLM

# Create Python virtual environment
python -m venv venv

# Activate virtual environment
# macOS/Linux:
source venv/bin/activate
# Windows:
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Configure Groq API
export GROQ_API_KEY="your_groq_api_key"  # macOS/Linux
set GROQ_API_KEY=your_groq_api_key       # Windows

# Start FastAPI server
python main.py
# or with hot reload:
uvicorn Agent_API:app --reload --host 0.0.0.0 --port 9000

# ✅ LLM Service running at http://localhost:9000
```

**Environment Variables:**
```env
GROQ_API_KEY=your_groq_api_key_here
ML_SERVICE_PORT=9000
AGENT_NAME=LifeSync Assistant
LOG_LEVEL=INFO
```

---

### 4️⃣ ML Models Service Setup (Python + FastAPI)

```bash
# Navigate to Models
cd LifeSync/Models

# Create virtual environment
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows

# Install requirements
pip install -r requirements.txt

# Start ML inference server
uvicorn app:app --reload --host 0.0.0.0 --port 8000

# ✅ ML Service running at http://localhost:8000
```

**API Endpoints:**
- `POST /infer-profile` – Cold-start user profiling
- `POST /predict-scores` – Life score predictions
- `GET /docs` – Interactive API documentation (Swagger UI)

---

## 📚 ML Models Overview

### 🧩 Cold-Start Personalization

**Input:** 15 initial user assessment scores (0-100 scale)
```python
[
  "sleep_quality", "physical_activity_consistency", "diet_quality",
  "daily_energy_level", "sedentary_level", "stress_level", "anxiety_level",
  "mood_stability", "mindfulness_habit", "social_support", "focus_ability",
  "task_completion_reliability", "distraction_level", "financial_discipline",
  "financial_stress"
]
```

**Output:** Complete user profile with 46 features

**Algorithm:** Gaussian Mixture Model (12 clusters) + Feature Influence Mapping
- **Clustering Accuracy:** 40.6% top-1, 83% top-3
- **Profile Generation Error:** 27.5% normalized MAE
- **Confidence Scoring:** Normalized entropy-based confidence

---

### 🎯 Cascade Prediction Model

**5-Tier LightGBM Cascade:**

```
User Features (46 inputs)
        ↓
    Health Model  (10 features) → Health Score
        ↓
    Mind Model    (13 features + Health) → Mind Score
        ↓
    Productivity  (10 features + Health + Mind) → Productivity Score
        ↓
    Finance Model (8 features + Productivity) → Finance Score
        ↓
    Life Model    (4 pillars) → Overall Life Score
```

**Features Per Model:**
- **Health:** Sleep, exercise, diet, hydration, steps, calories, sedentary time
- **Mind:** Depression, anxiety, stress, trauma, mood, meditation, breathing, support
- **Productivity:** Tasks, completion, efficiency, focus, energy levels
- **Finance:** Budget, expenses, savings, emergency fund, debt
- **Life:** Weighted combination of all four pillars

---

## 🤖 Groq AI Integration

LifeSync uses **Groq's fast LLM inference** for:
- 💬 Conversational AI assistant
- 🎯 Smart recommendations based on life metrics
- 📊 Insight generation and explanations
- 🔍 Natural language data queries

```python
# Example: AI Chat Interface
POST /api/ai/chat
{
  "message": "How can I improve my health score?",
  "user_profile": { /* 46 features */ },
  "life_scores": { /* prediction output */ }
}

Response:
{
  "message": "Based on your profile, increasing sleep to 8 hours and adding 3 exercise days would boost your health score by ~15 points...",
  "recommendations": [ /* personalized actions */ ]
}
```

---

## 🧪 ML Model Validation

| Metric | Value |
|--------|-------|
| **Clustering Top-1 Accuracy** | 40.6% |
| **Clustering Top-3 Accuracy** | 83% |
| **Mean Cluster Entropy** | 0.457 (normalized) |
| **Profile Generation MAE** | 27.5% (normalized) |
| **Sanity Check Pass Rate** | 100% |
| **Training Samples** | 20,000 synthetic profiles |
| **Models Trained** | 7 (1 cluster + 5 predictors + 1 ensemble) |

---

## 📝 Feature Constraints & Semantic Firewall

LifeSync enforces intelligent data validation:

```python
# Integer Constraints
exercise_days_per_week: 0-7 days
meditation_days_per_week: 0-7 days
tasks_completed: 0-200 per day

# Time Constraints (hours)
sleep_hours: 0-24 hours
sedentary_hours: 0-24 hours
actual_task_hours: 0-24 hours

# Percentage/Score Constraints (0-100)
task_completion_ratio: 0-100%
budget_adherence_ratio: 0-100%
stress_score: 0-100
anxiety_score: 0-100

# Physical Constraints
water_intake_liters: 0-10 L/day
distance_walked_km: 0-100 km
calories_burned: 0-10,000 kcal
```

---

## 🔄 API Examples

### Cold-Start Profile Generation

```bash
curl -X POST http://localhost:8000/infer-profile \
  -H "Content-Type: application/json" \
  -d '{
    "sleep_quality": 65,
    "physical_activity_consistency": 50,
    "diet_quality": 72,
    "daily_energy_level": 60,
    "sedentary_level": 45,
    "stress_level": 55,
    "anxiety_level": 48,
    "mood_stability": 70,
    "mindfulness_habit": 30,
    "social_support": 75,
    "focus_ability": 65,
    "task_completion_reliability": 60,
    "distraction_level": 40,
    "financial_discipline": 68,
    "financial_stress": 50
  }'
```

**Response:**
```json
{
  "cluster_probabilities": [0.05, 0.12, 0.08, ...],
  "confidence": {
    "cluster_id": 3,
    "entropy": 0.42,
    "confidence": 0.58
  },
  "generated_features": {
    "sleep_hours": 7.2,
    "exercise_days_per_week": 4,
    "steps_count": 8500,
    ...
  }
}
```

### Predict Life Scores

```bash
curl -X POST http://localhost:8000/predict-scores \
  -H "Content-Type: application/json" \
  -d '{ /* full profile with 46 features */ }'
```

**Response:**
```json
{
  "health_score": 72.45,
  "mind_score": 68.32,
  "productivity_score": 75.18,
  "finance_score": 65.89,
  "life_score": 70.37
}
```

---

## 🛣️ Development Workflow

### Git Workflow

```bash
# Main branches:
main          # ✅ Production-ready (stable)
develop       # 🔧 Development base branch

# Feature workflow:
feature/*     # 🎯 New features
fix/*         # 🐛 Bug fixes
refactor/*    # ♻️ Code improvements
docs/*        # 📚 Documentation
```

### Commit Message Format

```
type(scope): subject

feat(backend): Add user profile API
fix(frontend): Fix login button validation
refactor(ml): Optimize model loading
docs(readme): Update setup instructions
test(models): Add clustering tests
```

---

## 📖 Documentation & Learning

### ML Notebooks
- **Clustering Pipeline:** `Models/Training_Pipeline/Profile_Culstering_Model/Clusturing_Profile_Model_Train_Pipeline.ipynb`
- **Prediction Models:** `Models/Training_Pipeline/Score_Prediction_Model/Prediction_model.ipynb`

### LLM Documentation
- **Agent Details:** `LLM/ReadMe.md`
- **API Docs:** Available at `http://localhost:9000/docs` (Swagger UI)

### Model Performance Metrics
- Cold-start profiling accuracy: 83% (top-3)
- Prediction error: 27.5% MAE (normalized)
- No sanity violations in validation set

---

## 🤝 Contributing

We welcome contributions! Whether you're fixing bugs, adding features, or improving documentation, your help makes LifeSync better.

### How to Contribute

1. **Fork the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/LifeSync.git
   cd LifeSync
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-amazing-feature
   ```

3. **Make your changes**
   - Write clean, well-documented code
   - Follow the coding standards
   - Add tests if applicable

4. **Commit with clear messages**
   ```bash
   git commit -m "feat(module): Add amazing feature description"
   ```

5. **Push and create a Pull Request**
   ```bash
   git push origin feature/your-amazing-feature
   ```

### Code Standards

- **JavaScript/React:** Use ES6+, Prettier formatting
- **Python:** PEP 8 style, type hints where applicable
- **Git:** Meaningful commit messages, atomic commits
- **Testing:** Write tests for critical features
- **Documentation:** Update README and docstrings

### Pull Request Checklist

- [ ] Code follows project style guidelines
- [ ] Self-reviewed your own code
- [ ] Added/updated tests
- [ ] Updated documentation
- [ ] Linked related issues
- [ ] Tested locally before submitting

### Development Setup

```bash
# Install pre-commit hooks (optional but recommended)
pip install pre-commit
pre-commit install
```

---

## 🐛 Troubleshooting

### Backend Connection Issues
```bash
# Verify backend is running
curl http://localhost:4000

# Check port availability
lsof -i :4000  # macOS/Linux
netstat -ano | findstr :4000  # Windows
```

### Frontend API Errors
- Ensure `.env.local` has correct `REACT_APP_API_URL`
- Check CORS settings in backend
- Verify backend is running before starting frontend

### Python/LLM Issues
```bash
# Verify Python version
python --version  # Should be 3.8+

# Reinstall dependencies
pip install --upgrade -r requirements.txt

# Check Groq API key
echo $GROQ_API_KEY  # macOS/Linux
echo %GROQ_API_KEY%  # Windows
```

### ML Service Problems
```bash
# Verify model files exist
ls -la Models/Clustering_Dump/
ls -la Models/Prediction_Dump/

# Check feature scaler
python -c "import joblib; joblib.load('Models/Prediction_Dump/feature_scaler.pkl')"
```

---

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

MIT License grants you the freedom to use, modify, and distribute this software. Please attribute the original author in your derivative works.

---

## 🌟 Acknowledgments

Special thanks to:
- Open-source community for amazing libraries (scikit-learn, LightGBM, FastAPI, React)
- Groq for providing fast LLM inference
- Contributors and testers who've helped shape LifeSync
- You, for being interested in this project! ⭐

---

## 📞 Support & Contact

<div align="center">

### Get in Touch!

**👤 Developer:** Devashish Sharma  
**🔗 LinkedIn:** [linkedin.com/in/devashish-sharma](https://linkedin.com/in/devashish-sharma)  
**🐙 GitHub:** [@DevSharma03](https://github.com/DevSharma03)  
**📧 Email:** Contact via GitHub profile

### Community & Issues

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-blue?logo=github&style=for-the-badge)](https://github.com/DevSharma03/LifeSync/issues)
[![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-blueviolet?logo=github&style=for-the-badge)](https://github.com/DevSharma03/LifeSync/discussions)

**Have a question?** [Open a discussion](https://github.com/DevSharma03/LifeSync/discussions)  
**Found a bug?** [Report an issue](https://github.com/DevSharma03/LifeSync/issues)  
**Got an idea?** [Start a discussion](https://github.com/DevSharma03/LifeSync/discussions)

</div>

---

## 🎯 Roadmap

### Phase 1 (Current) ✅
- ✅ Core ML models (clustering, prediction)
- ✅ FastAPI ML service
- ✅ Express backend
- ✅ React frontend
- ✅ Groq AI integration

### Phase 2 (Next)
- 🔄 Mobile app (React Native)
- 📱 iOS & Android apps
- 🔐 Enhanced authentication
- 📊 Advanced analytics
- 🔔 Smart notifications

### Phase 3 (Future)
- 🌍 Multi-language support
- 🤝 Social features
- 📈 Enterprise analytics
- 🔗 Third-party integrations
- 🎮 Gamification system

---

## 📊 Repository Stats

<div align="center">

![GitHub Stars](https://img.shields.io/github/stars/DevSharma03/LifeSync?style=social)
![GitHub Forks](https://img.shields.io/github/forks/DevSharma03/LifeSync?style=social)
![GitHub Watchers](https://img.shields.io/github/watchers/DevSharma03/LifeSync?style=social)

**Languages:** JavaScript • Python • CSS • HTML  
**Topics:** AI • ML • Full-Stack • LLM • Clustering • FastAPI • React

</div>

---

<div align="center">

### ⭐ Like this project? Please star us on GitHub!

**Built with ❤️ by [Devashish Sharma](https://github.com/DevSharma03)**

[🔝 Back to Top](#-lifesync--intelligent-personal-assistant--life-management-platform)

</div>
