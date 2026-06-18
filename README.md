# 🚀 LifeSync – AI-Powered Personal Life Management Platform

<div align="center">

[![GitHub Stars](https://img.shields.io/github/stars/DevSharma03/LifeSync?style=social)](https://github.com/DevSharma03/LifeSync)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active_Development-brightgreen.svg)](#)

**Transform your life with intelligent AI insights across health, productivity, finance, and mental wellness**

[View Repository](https://github.com/DevSharma03/LifeSync) • [Report Issues](https://github.com/DevSharma03/LifeSync/issues) • [Discussions](https://github.com/DevSharma03/LifeSync/discussions)

</div>

---

## 📋 What is LifeSync?

LifeSync is a **full-stack, production-grade personal assistant platform** that uses machine learning and AI to provide intelligent, data-driven insights across four critical life dimensions:

- **🏥 Health** – Sleep, exercise, nutrition, and wellness tracking
- **🧠 Mental Wellness** – Stress, mood, anxiety, and mindfulness management  
- **⚡ Productivity** – Task management, focus optimization, time efficiency
- **💰 Finance** – Budget tracking, expense management, financial wellness

Unlike generic apps, LifeSync **learns your patterns**, **predicts your scores**, and **recommends personalized actions** using advanced ML models and AI conversations.

### Why LifeSync Exists

Most people track these areas in isolation – a fitness app here, a budget app there. LifeSync **unifies everything** into one intelligent system that:

✅ **Connects the dots** between your health, mood, productivity, and finances  
✅ **Learns from day 1** using intelligent cold-start profiling  
✅ **Predicts future performance** with cascade ML models  
✅ **Explains recommendations** with Groq AI conversations  
✅ **Measures holistic wellness** with a unified Life Score  

---

## 🎯 Core Features

### 🤖 Intelligent AI & ML Engine

| Feature | Description |
|---------|-------------|
| **Cold-Start Personalization** | Complete user profiling from just 15 initial assessment answers |
| **Smart User Clustering** | 12-cluster Gaussian Mixture Model segments users by lifestyle patterns |
| **Cascade Predictions** | 5-tier LightGBM models (Health → Mind → Productivity → Finance → Life Score) |
| **Groq LLM Integration** | Fast, low-latency AI assistant for conversations and recommendations |
| **Explainable Scores** | Feature importance mapping shows what drives your life metrics |

### 📊 Data & Analytics

- **46+ tracked metrics** across 4 life dimensions
- **Semantic validation firewall** ensures data integrity
- **Confidence scoring** with normalized entropy tracking
- **Real-time dashboards** with visual analytics
- **Historical trend analysis** and pattern detection

### 🛠️ Production-Ready Architecture

- **Microservices design** – Decoupled, scalable components
- **REST APIs** for easy integration
- **Docker-ready** for containerized deployment
- **Modular ML pipeline** – Easy to retrain and improve
- **7 trained models** on 20,000+ synthetic profiles

---

## 🏗️ How It Works

### System Architecture

```
┌─────────────────────────────────────────────────────┐
│              LifeSync Full Stack                    │
├─────────────────────────────────────────────────────┤
│                                                      │
│  Frontend (React)  ←→  Backend (Node.js/Express)  │
│                                                      │
│         ↓ REST API ↓                                │
│                                                      │
│  ML Service (Python/FastAPI)                       │
│  ├─ Clustering & Profiling                         │
│  ├─ Score Predictions                              │
│  └─ Feature Analysis                               │
│                                                      │
│         ↓ API Call ↓                                │
│                                                      │
│  LLM Service (Groq AI)                             │
│  ├─ AI Chat Assistant                              │
│  ├─ Smart Recommendations                          │
│  └─ Insight Generation                             │
│                                                      │
└─────────────────────────────────────────────────────┘
```

### 3-Step User Flow

**1. Cold-Start Profiling**
```
User Input (15 quick questions) 
    ↓
Gaussian Mixture Model (12 clusters)
    ↓
Generate 46 complete user features
```

**2. Cascade Predictions**
```
User Profile (46 features)
    ↓
Health Model → Health Score
    ↓
Mind Model (+ Health) → Mind Score
    ↓
Productivity Model (+ Health + Mind) → Productivity Score
    ↓
Finance Model (+ Productivity) → Finance Score
    ↓
Life Model (All 4 pillars) → Overall Life Score
```

**3. AI Insights**
```
Scores + User Profile
    ↓
Groq LLM Processing
    ↓
Personalized Recommendations
    ↓
Chat-Based Explanations
```

---

## 📁 Project Structure

```
LifeSync/
│
├── Backend/                          # Node.js + Express REST API
│   ├── src/
│   │   ├── models/                  # Database schemas
│   │   ├── routes/                  # API endpoints
│   │   ├── controllers/             # Business logic
│   │   └── middleware/              # Auth, validation
│   ├── package.json
│   └── .env                         # Configuration
│
├── Frontend/                         # React + Modern UI
│   ├── src/
│   │   ├── components/              # Reusable UI components
│   │   ├── pages/                   # Route pages
│   │   ├── hooks/                   # Custom React hooks
│   │   └── services/                # API integrations
│   ├── package.json
│   └── .env                         # Configuration
│
├── LLM/                              # FastAPI AI Service
│   ├── Agent.py                     # AI agent logic
│   ├── Agent_API.py                 # FastAPI server
│   ├── Router.py                    # Request routing
│   ├── Config/                      # Settings
│   ├── requirements.txt
│   └── main.py
│
└── Models/                           # ML Training & Inference
    ├── Clustering_Dump/
    │   ├── cluster_profiles.json
    │   ├── feature_influence.json
    │   └── cluster_predictor.joblib
    ├── Prediction_Dump/
    │   ├── health_model.pkl
    │   ├── mind_model.pkl
    │   ├── productivity_model.pkl
    │   ├── finance_model.pkl
    │   ├── life_model.pkl
    │   └── feature_scaler.pkl
    ├── Training_Pipeline/
    │   ├── Clustering_Profile_Model_Train_Pipeline.ipynb
    │   └── Prediction_model.ipynb
    ├── app.py                       # ML API
    ├── requirements.txt
    └── schemas.py
```

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|-----------|
| **Frontend** | React, JavaScript, CSS3, Responsive Design |
| **Backend** | Node.js, Express.js, REST APIs |
| **AI/ML** | Python, FastAPI, scikit-learn, LightGBM |
| **LLM** | Groq AI, Natural Language Processing |
| **DevOps** | Docker, Git, Environment Management |
| **Database** | MongoDB (configured in Backend) |

**Language Composition:**
- JavaScript: 51.3%
- CSS: 29.6%
- Jupyter Notebooks: 11.2%
- Python: 5.9%
- Other: 2%

---

## 🚀 Quick Start

### Prerequisites

```
✅ Node.js v16+
✅ Python 3.8+
✅ npm or yarn
✅ Groq API Key (free from https://console.groq.com/)
```

### 1️⃣ Clone & Setup

```bash
git clone https://github.com/DevSharma03/LifeSync.git
cd LifeSync
```

### 2️⃣ Backend (Node.js)

```bash
cd Backend

# Install dependencies
npm install

# Configure environment
cat > .env << EOF
PORT=4000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/lifesync
JWT_SECRET=your_jwt_secret_key
ML_SERVICE_URL=http://localhost:9000
GROQ_API_KEY=your_groq_api_key
EOF

# Start server
npm run dev
# ✅ Running at http://localhost:4000
```

### 3️⃣ Frontend (React)

```bash
cd Frontend

# Install dependencies
npm install

# Configure environment
cat > .env << EOF
REACT_APP_API_URL=http://localhost:4000
REACT_APP_LLM_URL=http://localhost:9000
REACT_APP_ENV=development
EOF

# Start development server
npm start
# ✅ Running at http://localhost:3000
```

### 4️⃣ ML Service (Python)

```bash
cd Models

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start ML inference server
uvicorn app:app --reload --host 0.0.0.0 --port 8000
# ✅ Running at http://localhost:8000
```

### 5️⃣ LLM Service (Python)

```bash
cd LLM

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Configure Groq API
export GROQ_API_KEY="your_groq_api_key"  # Linux/macOS
# or on Windows: set GROQ_API_KEY=your_groq_api_key

# Start FastAPI server
python main.py
# or with auto-reload:
# uvicorn Agent_API:app --reload --host 0.0.0.0 --port 9000
# ✅ Running at http://localhost:9000
```

---

## 📚 ML Models Deep Dive

### Cold-Start Profiling Model

**Problem:** How do we create a complete user profile from minimal initial data?

**Solution:** Gaussian Mixture Model + Feature Influence Mapping

- **Input:** 15 quick assessment questions (sleep quality, stress, fitness habits, etc.)
- **Process:** Cluster user into one of 12 lifestyle profiles
- **Output:** Generate 46 complete user features
- **Accuracy:** 83% top-3 clustering accuracy

```python
# Example Input
{
  "sleep_quality": 65,
  "stress_level": 55,
  "exercise_frequency": 50,
  "diet_quality": 72,
  ...
}

# Example Output
{
  "cluster_id": 3,
  "confidence": 0.82,
  "generated_features": {
    "sleep_hours": 7.2,
    "exercise_days_per_week": 4,
    "steps_count": 8500,
    "water_intake_liters": 2.5,
    ...
  }
}
```

### Cascade Prediction Models

**Problem:** How do we predict holistic life scores that account for interconnections?

**Solution:** 5-tier LightGBM cascade where each model builds on previous scores

```
User Profile (46 features)
    ↓ LightGBM Model 1
Health Score (based on sleep, exercise, diet, hydration)
    ↓ LightGBM Model 2
Mind Score (stress, anxiety, mood + health data)
    ↓ LightGBM Model 3
Productivity Score (task completion, focus + mental state)
    ↓ LightGBM Model 4
Finance Score (budget adherence + life stress)
    ↓ LightGBM Model 5
Life Score (weighted combination of all 4 pillars)
```

**Model Performance:**
- Top-1 Clustering Accuracy: 40.6%
- Top-3 Clustering Accuracy: 83%
- Profile Generation MAE: 27.5% (normalized)
- 0% Sanity Check Violations
- Trained on 20,000 synthetic profiles

### Feature Constraints (Semantic Firewall)

All data is validated to ensure physical and logical consistency:

```python
# Time-based constraints
sleep_hours: 0-24 hours
sedentary_hours: 0-24 hours
exercise_hours: 0-24 hours

# Count-based constraints
exercise_days_per_week: 0-7
meditation_days_per_week: 0-7
tasks_completed_per_day: 0-200

# Percentage-based constraints
budget_adherence: 0-100%
task_completion_ratio: 0-100%
stress_score: 0-100

# Physical constraints
water_intake_liters: 0-10 L/day
distance_walked_km: 0-100 km
calories_burned: 0-10000 kcal
```

---

## 🤖 Groq AI Integration

LifeSync uses **Groq's fast LLM inference** to power:

```
💬 AI Chat Assistant         → Answer user questions about their life
📊 Smart Recommendations     → Personalized actions to improve scores
🎯 Insight Generation        → Explain trends and patterns
🔍 Natural Language Queries  → Understand what users want to know
```

**Example Conversation:**
```
User: "How can I improve my health score?"

AI Response: "Based on your profile, you're averaging 6.2 hours of sleep 
but your cluster typically needs 7-8 hours. Increasing sleep and adding 
2-3 exercise days would boost your health score by ~15 points. You have 
good diet quality (72), so maintain that!"
```

---

## 🔌 API Endpoints

### ML Service (Port 8000)

```bash
# Generate user profile from initial assessment
POST /infer-profile
{
  "sleep_quality": 65,
  "physical_activity_consistency": 50,
  ...
}

# Predict life scores
POST /predict-scores
{
  "sleep_hours": 7.2,
  "exercise_days_per_week": 4,
  ...
}

# Interactive API docs
GET /docs  # Swagger UI at http://localhost:8000/docs
```

### LLM Service (Port 9000)

```bash
# Chat with AI assistant
POST /api/chat
{
  "message": "How can I improve my health?",
  "user_profile": { /* 46 features */ },
  "scores": { /* prediction output */ }
}

# Get recommendations
POST /api/recommend
{
  "user_profile": { /* features */ }
}
```

### Backend (Port 4000)

```bash
# User authentication
POST /api/auth/register
POST /api/auth/login

# User data
GET /api/user/profile
PUT /api/user/profile

# Life scores
GET /api/scores
POST /api/scores/calculate
```

---

## 🐛 Troubleshooting

### Backend won't start

```bash
# Check if port 4000 is in use
lsof -i :4000              # macOS/Linux
netstat -ano | findstr 4000 # Windows

# Verify environment variables
cat Backend/.env

# Check MongoDB connection
mongosh
```

### Frontend shows API errors

```bash
# Verify backend is running
curl http://localhost:4000

# Check .env configuration
cat Frontend/.env

# Clear cache and restart
npm cache clean --force
npm start
```

### Python/ML Service issues

```bash
# Verify Python version
python --version  # Should be 3.8+

# Check virtual environment
which python  # Should show path in venv

# Reinstall dependencies
pip install --upgrade -r requirements.txt

# Test model loading
python -c "import joblib; joblib.load('Models/Prediction_Dump/health_model.pkl')"
```

### Groq API errors

```bash
# Verify API key is set
echo $GROQ_API_KEY  # macOS/Linux
echo %GROQ_API_KEY% # Windows

# Test API connectivity
curl https://api.groq.com/health  # if endpoint exists
```

---

## 🤝 Contributing

We welcome contributions! Here's how:

### 1. Fork & Clone

```bash
git clone https://github.com/YOUR_USERNAME/LifeSync.git
cd LifeSync
```

### 2. Create Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 3. Make Changes

- Follow existing code style
- Add tests if applicable
- Update documentation
- Keep commits atomic and descriptive

### 4. Submit Pull Request

```bash
git push origin feature/your-feature-name
# Create PR on GitHub
```

### Code Guidelines

- **JavaScript/React:** ES6+, Prettier formatting
- **Python:** PEP 8 style, type hints
- **Git:** Meaningful commit messages
- **Testing:** Write tests for critical features

### Commit Message Format

```
feat(component): Add new feature
fix(component): Resolve bug
refactor(component): Improve code
docs(component): Update documentation
test(component): Add test coverage
```

---

## 📈 Roadmap

### ✅ Phase 1 (Current)
- Core ML models (clustering, prediction cascade)
- FastAPI ML inference service
- Express REST backend
- React frontend
- Groq AI integration

### 🔄 Phase 2 (Next)
- Mobile app (React Native)
- iOS & Android native apps
- Enhanced authentication (OAuth, 2FA)
- Advanced analytics dashboard
- Smart push notifications

### 🎯 Phase 3 (Future)
- Multi-language support
- Social/community features
- Enterprise analytics
- Third-party integrations (Fitbit, YNAB, etc.)
- Gamification system

---

## 📝 Documentation

- **ML Training:** See `Models/Training_Pipeline/` notebooks
- **LLM Details:** Check `LLM/README.md`
- **API Docs:** Available at `http://localhost:8000/docs` (Swagger UI)
- **Backend Setup:** See `Backend/.env.example`
- **Frontend Setup:** See `Frontend/.env.example`

---

## 📄 License

This project is licensed under the **MIT License** – see [LICENSE](LICENSE) for details.

**MIT License permits:**
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution

**Requirements:**
- ✔️ Include license notice
- ✔️ Attribute original author

---

## 🙏 Acknowledgments

- **Groq** – Fast LLM inference technology
- **Open Source Community** – scikit-learn, LightGBM, FastAPI, React
- **Contributors** – Everyone helping improve LifeSync
- **You** – For your interest and support! ⭐

---

## 📞 Contact & Support

**👤 Developer:** Devashish Sharma

- 🔗 GitHub: [@DevSharma03](https://github.com/DevSharma03)
- 💼 LinkedIn: [devashish-sharma](https://linkedin.com/in/devashish-sharma)
- 📧 GitHub Issues: [Report bugs](https://github.com/DevSharma03/LifeSync/issues)
- 💬 Discussions: [Ask questions](https://github.com/DevSharma03/LifeSync/discussions)

---

<div align="center">

### ⭐ Found LifeSync helpful? Please star us on GitHub!

**Built with ❤️ by [Devashish Sharma](https://github.com/DevSharma03)**

[🔝 Back to Top](#-lifesync--ai-powered-personal-life-management-platform)

</div>
