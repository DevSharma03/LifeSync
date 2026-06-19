# LifeSync – AI-Powered Personal Life Management Platform

<div align="center">

[![GitHub Stars](https://img.shields.io/github/stars/DevSharma03/LifeSync?style=social)](https://github.com/DevSharma03/LifeSync)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active_Development-brightgreen.svg)](#)
[![Python](https://img.shields.io/badge/Python-3.8+-blue)](https://www.python.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-Node.js-yellow)](https://nodejs.org/)

**Transform your life with intelligent AI insights across health, productivity, finance, and mental wellness**

[View Repository](https://github.com/DevSharma03/LifeSync) • [Report Issues](https://github.com/DevSharma03/LifeSync/issues) • [Discussions](https://github.com/DevSharma03/LifeSync/discussions)

</div>

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Architecture](#architecture)
- [How It Works](#how-it-works)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
  - [Prerequisites](#prerequisites)
  - [Environment Variables](#environment-variables)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
  - [Docker (Optional)](#docker-optional)
- [API Reference](#api-reference)
- [Core Components](#core-components)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)

---

## Project Overview

**LifeSync** is an **AI-powered full-stack platform** that unifies health, finance, productivity, and mental wellness into a single, intelligent personal assistant system. Rather than juggling multiple disparate apps, LifeSync leverages advanced machine learning and large language models to:

- **Profile users instantly** from just 15 initial questions using Gaussian Mixture Modeling
- **Expand minimal input into 45+ behavioral features** through intelligent feature engineering
- **Predict life balance scores** across 4 dimensions (health, finance, productivity, mental wellness) using a 5-tier cascade of LightGBM models
- **Deliver personalized AI recommendations** via a worker-orchestrator architecture powered by LangChain and Claude Haiku (Groq API)
- **Continuously adapt** with real-time score updates after every user interaction
- **Maintain semantic integrity** with a built-in logical consistency firewall

---

## Features

### 🎯 Cold-Start Profiling
- **15-Question Assessment**: Quick onboarding that captures essential lifestyle metrics
- **GMM-Based Clustering**: Gaussian Mixture Models segment users into 12 behavioral clusters
- **45+ Behavioral Features**: Intelligently expand sparse user input into dense feature vectors for ML inference

### 🤖 Real-Time Personalization Engine
- **Cascading LightGBM Models**: 5-tier prediction pipeline (Health → Mind → Productivity → Finance → Life Score)
- **Dynamic Score Updates**: Life scores recalculate in real-time after each user interaction
- **Behavioral Expansion**: Cold-start profiling converts 15 inputs into 45 features, enabling immediate personalization

### 🧠 AI Counselor with Domain-Specific Reasoning
- **Worker-Orchestrator Architecture**: LangChain-powered agent coordinates multi-step reasoning across life domains
- **Shared Memory System**: Maintains conversational history and dynamic user context
- **Real-Time Data Injection**: MongoDB-backed user profiles and life scores influence every response
- **Domain-Specific Routing**: Specialized prompts for health, finance, productivity, and mental wellness domains
- **Multi-Step Reasoning**: Claude Haiku (via Groq API) delivers thoughtful, coherent guidance

### 📊 Comprehensive Life Tracking
- **46+ Metrics** across health, finance, productivity, and mental wellness
- **Real-Time Dashboard**: Visualize life score trends and receive actionable insights
- **Semantic Firewall**: Built-in consistency checks ensure logical alignment between recommendations and user data

### 🔒 Enterprise-Grade Security
- **JWT Authentication**: Secure token-based session management
- **Password Encryption**: bcryptjs hashing for sensitive credentials
- **CORS Protection**: Cross-origin request validation

### ✅ Data Integrity & Reliability
- **MongoDB Persistence**: Durable storage with indexed queries for performance
- **Automated Score Jobs**: Cron-based score recalculation pipeline
- **Error Handling**: Comprehensive try-catch blocks and validation

---

## Architecture

### System Design

```
┌─────────────────────────────────────────────────────────────────────┐
│                     LifeSync Architecture                             │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  ┌──────────────┐                                                    │
│  │   Frontend   │  React 19.1 | React Router | Recharts             │
│  │   (React)    │  Real-time Dashboard & User Interaction            │
│  └──────┬───────┘                                                    │
│         │                                                            │
│         │ HTTP/REST                                                 │
│         ↓                                                            │
│  ┌──────────────────────┐                                           │
│  │   Backend API        │  Node.js | Express 5.1                    │
│  │  (Authentication &   │  • JWT Auth & Session Management          │
│  │   Data Orchestration)│  • Score Calculation Orchestration        │
│  └──────┬───────────────┘  • User Profile Management                │
│         │                                                            │
│    ┌────┴────────┬────────────────┐                                 │
│    │             │                │                                 │
│    ↓             ↓                ↓                                 │
│ ┌────────┐  ┌──────────┐  ┌──────────────┐                          │
│ │MongoDB │  │  ML      │  │  LLM Service │                          │
│ │(Data)  │  │ Service  │  │  (Groq API)  │                          │
│ └────────┘  │(FastAPI) │  └──────────────┘                          │
│    ↓        │ • GMM    │   • Claude Haiku  │                         │
│  Profiles   │ • Feature│   • LangChain     │                         │
│  Scores     │ Expansion│   • Agent         │                         │
│             │ • LightGBM│  Orchestrator    │                         │
│             │ Cascade  │                   │                         │
│             └──────────┘                   │                         │
│                                            │                         │
│ ┌────────────────────────────────────────┘                          │
│ │ Key Data Flows:                                                    │
│ │ 1. Assessment → GMM Clustering → Feature Expansion                │
│ │ 2. Features → Cascade ML Pipeline → Life Scores                   │
│ │ 3. User Interaction → Real-time Score Update                      │
│ │ 4. Profile + Scores → LLM with Context → Recommendations         │
│ └────────────────────────────────────────────────────────────────   │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

### Data Flow Pipeline

```
User Assessment (15 Q's)
    ↓
Gaussian Mixture Model (12 Clusters)
    ↓
Complete Profile (45+ Behavioral Features)
    ↓
5-Tier LightGBM Cascade
├─ Tier 1: Health Score Prediction
├─ Tier 2: Mental Wellness Score
├─ Tier 3: Productivity Score
├─ Tier 4: Financial Score
└─ Tier 5: Composite Life Score
    ↓
Real-Time Score Updates + AI Insights
    ↓
Personalized Recommendations via LLM Agent
```

---

## How It Works

### 1️⃣ Cold-Start Profiling (Assessment Phase)
Users answer 15 strategically designed questions covering:
- Health habits (sleep, exercise, nutrition)
- Financial behavior (spending, savings, investments)
- Productivity patterns (focus, goals, habits)
- Mental wellness (stress, mindfulness, relationships)

### 2️⃣ Feature Expansion via Gaussian Mixture Models
The system clusters users into 12 behavioral groups using GMM, then expands the 15 inputs into **45+ engineered features** including:
- Composite health indices
- Financial risk profiles
- Productivity efficiency metrics
- Wellness sentiment scores

### 3️⃣ Cascade Machine Learning Pipeline
Five chained LightGBM models deliver multi-dimensional predictions:
1. **Health Model**: Predicts health score based on lifestyle features
2. **Mind Model**: Evaluates mental wellness & stress resilience
3. **Productivity Model**: Forecasts focus & goal achievement likelihood
4. **Finance Model**: Assesses financial stability & growth potential
5. **Life Model**: Synthesizes all dimensions into a composite life score

### 4️⃣ Real-Time Score Recalculation
Every user interaction triggers:
- Feature updates based on new behaviors
- Re-inference through the cascade
- MongoDB persistence
- Dynamic dashboard refresh

### 5️⃣ Conversational AI Counselor
The LangChain-powered agent:
- Receives the user's profile, current scores, and conversation history
- Routes queries to domain-specific prompt templates
- Performs multi-step reasoning across life dimensions
- Returns contextual, personalized guidance

---

## Tech Stack

| **Layer** | **Technology** | **Purpose** |
|-----------|---|---|
| **Frontend** | React 19.1, React Router 7.8, Recharts 3.1, Lucide React, React Icons | Interactive UI, real-time dashboards, data visualization |
| **Backend** | Node.js, Express 5.1, Mongoose 8.19, bcryptjs, JWT, Morgan | REST API, authentication, data orchestration |
| **Database** | MongoDB 8.19+ | User profiles, assessment responses, scores, conversation history |
| **ML Service** | Python 3.8+, FastAPI, scikit-learn, LightGBM, NumPy, Pandas | GMM clustering, feature engineering, cascade model inference |
| **LLM Service** | Python 3.8+, FastAPI, LangChain, Groq API (Claude Haiku), Pydantic | AI agent orchestration, personalized recommendations |
| **Infrastructure** | CORS, dotenv, node-cron, axios | Cross-origin requests, environment management, scheduled jobs |

---

## Project Structure

```
LifeSync/
│
├── Backend/                          # Node.js REST API
│   ├── src/
│   │   ├── server.js                # Server entry point
│   │   ├── app.js                   # Express app configuration
│   │   ├── config/
│   │   │   └── db.js                # MongoDB connection
│   │   ├── controllers/
│   │   │   └── auth.controller.js   # Authentication logic
│   │   ├── routes/
│   │   │   ├── auth.routes.js       # Auth endpoints
│   │   │   └── user.routes.js       # User management
│   │   ├── models/
│   │   │   ├── User.js              # User schema
│   │   │   └── Score.js             # Score schema
│   │   ├── middleware/
│   │   │   └── auth.middleware.js   # JWT verification
│   │   └── jobs/
│   │       └── score.job.js         # Cron-based score updates
│   └── package.json
│
├── Frontend/                         # React Dashboard
│   ├── public/
│   ├── src/
│   │   ├── index.js
│   │   ├── App.js
│   │   ├── pages/
│   │   │   ├── Dashboard.js         # Main dashboard
│   │   │   ├── Assessment.js        # Initial questionnaire
│   │   │   ├── Chat.js              # AI counselor interface
│   │   │   └── Profile.js           # User profile page
│   │   ├── components/
│   │   │   ├── ScoreCard.js
│   │   │   ├── LineChart.js
│   │   │   └── Navbar.js
│   │   ├── services/
│   │   │   └── api.js               # Axios instance & API calls
│   │   └── styles/
│   │       └── App.css
│   └── package.json
│
├── Models/                           # ML Pipeline (Python/FastAPI)
│   ├── main.py                       # FastAPI server
│   ├── preprocessing.py              # Feature engineering
│   ├── models/
│   │   ├── gmm_cluster.py            # GMM profiler
│   │   └── cascade_predictor.py      # LightGBM cascade
│   ├── data/
│   │   └── training_data.csv
│   ├── requirements.txt
│   └── notebooks/
│       └── model_training.ipynb
│
├── LLM/                              # LLM Agent (Python/FastAPI)
│   ├── main.py                       # FastAPI server
│   ├── agent.py                      # LangChain orchestrator
│   ├── prompts/
│   │   ├── health_prompt.txt
│   │   ├── finance_prompt.txt
│   │   ├── productivity_prompt.txt
│   │   └── wellness_prompt.txt
│   ├── config.py                     # Groq API setup
│   ├── requirements.txt
│   └── utils/
│       └── memory.py                 # Conversation memory
│
└── README.md                         # This file

```

---

## Quick Start

### Prerequisites

Ensure you have the following installed:

- **Node.js** v16 or higher
- **Python** 3.8 or higher
- **MongoDB** (local or MongoDB Atlas)
- **npm** or **yarn** package manager
- **Groq API Key** (free tier available at [console.groq.com](https://console.groq.com))

### Environment Variables

#### Backend (`.env`)
```bash
# Server Configuration
PORT=4000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/lifesync
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/lifesync

# Authentication
JWT_SECRET=your_super_secret_jwt_key_here_min_32_chars

# ML Service
ML_SERVICE_URL=http://localhost:8000

# LLM Service
LLM_SERVICE_URL=http://localhost:9000
GROQ_API_KEY=your_groq_api_key_here
```

#### Frontend (`.env`)
```bash
REACT_APP_API_URL=http://localhost:4000
REACT_APP_ML_URL=http://localhost:8000
REACT_APP_LLM_URL=http://localhost:9000
```

#### ML Service (`.env`)
```bash
MONGODB_URI=mongodb://localhost:27017/lifesync
MODEL_PATH=./models/
DEBUG=true
```

#### LLM Service (`.env`)
```bash
GROQ_API_KEY=your_groq_api_key_here
MONGODB_URI=mongodb://localhost:27017/lifesync
LLM_MODEL=mixtral-8x7b-32768
TEMPERATURE=0.7
```

### Installation

```bash
# Clone the repository
git clone https://github.com/DevSharma03/LifeSync.git
cd LifeSync

# Install Backend dependencies
cd Backend
npm install
cd ..

# Install Frontend dependencies
cd Frontend
npm install
cd ..

# Install ML Service dependencies
cd Models
pip install -r requirements.txt
cd ..

# Install LLM Service dependencies
cd LLM
pip install -r requirements.txt
cd ..
```

### Running Locally

#### Terminal 1 – Start MongoDB
```bash
# Using Docker (recommended)
docker run -d -p 27017:27017 --name mongodb mongo:latest

# OR using local MongoDB
mongod --dbpath /path/to/data
```

#### Terminal 2 – Start Backend
```bash
cd Backend
npm start
# Server runs on http://localhost:4000
```

#### Terminal 3 – Start Frontend
```bash
cd Frontend
npm start
# Dashboard opens on http://localhost:3000
```

#### Terminal 4 – Start ML Service
```bash
cd Models
uvicorn main:app --reload --port 8000
# API docs available at http://localhost:8000/docs
```

#### Terminal 5 – Start LLM Service
```bash
cd LLM
python main.py
# Service runs on http://localhost:9000
```

### Docker (Optional)

Build and run all services with Docker Compose:

```bash
# Create docker-compose.yml
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down
```

---

## API Reference

### Authentication Service (Backend, Port 4000)

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "secure_password",
  "name": "John Doe"
}
```

**Response:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "email": "user@example.com",
    "name": "John Doe"
  }
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "secure_password"
}
```

**Response:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "email": "user@example.com"
  }
}
```

### ML Service (FastAPI, Port 8000)

#### Generate Profile from Assessment
```http
POST /infer-profile
Content-Type: application/json

{
  "assessment": {
    "sleep_hours": 7,
    "exercise_days": 3,
    "stress_level": 5,
    "savings_rate": 0.15,
    ...  // 15 total fields
  }
}
```

**Response:**
```json
{
  "cluster": 3,
  "cluster_name": "Balanced Achiever",
  "features": {
    "health_index": 0.72,
    "financial_risk": 0.35,
    "productivity_score": 0.81,
    ...  // 45+ features
  }
}
```

#### Predict Life Scores
```http
POST /predict-scores
Content-Type: application/json

{
  "user_id": "507f1f77bcf86cd799439011",
  "features": {
    "health_index": 0.72,
    "financial_risk": 0.35,
    ...
  }
}
```

**Response:**
```json
{
  "health_score": 0.78,
  "wellness_score": 0.65,
  "productivity_score": 0.82,
  "finance_score": 0.71,
  "life_score": 0.74,
  "recommendations": [
    "Increase daily water intake",
    "Review investment portfolio"
  ]
}
```

#### API Documentation
Interactive Swagger UI available at: `http://localhost:8000/docs`

### LLM Service (FastAPI, Port 9000)

#### Chat with AI Counselor
```http
POST /query
Content-Type: application/json

{
  "user_id": "507f1f77bcf86cd799439011",
  "message": "I'm feeling stressed with work. Any tips?",
  "domain": "wellness"  // or "health", "finance", "productivity"
}
```

**Response:**
```json
{
  "response": "I understand work stress can be overwhelming...",
  "domain": "wellness",
  "confidence": 0.95,
  "related_scores": {
    "wellness_score": 0.65,
    "productivity_score": 0.82
  }
}
```

#### Get Personalized Recommendations
```http
POST /api/recommend
Content-Type: application/json

{
  "user_id": "507f1f77bcf86cd799439011"
}
```

**Response:**
```json
{
  "recommendations": [
    {
      "domain": "health",
      "priority": "high",
      "suggestion": "Aim for 8 hours of sleep nightly"
    },
    {
      "domain": "finance",
      "priority": "medium",
      "suggestion": "Build a 6-month emergency fund"
    }
  ],
  "next_review": "2026-06-26"
}
```

---

## Core Components

### GMM Clustering Module
- **Input**: 15-dimensional assessment vector
- **Process**: Gaussian Mixture Model with 12 components
- **Output**: User cluster assignment + probability distribution
- **Benefit**: Enables instant user profiling for cold-start personalization

### Feature Engineering Pipeline
- **Input**: Assessment responses + cluster information
- **Process**: Domain-specific feature extraction and aggregation
- **Output**: 45+ behavioral features for ML models
- **Dimensions Covered**:
  - Health & Wellness (sleep quality, exercise consistency, nutrition habits)
  - Financial Behavior (savings rate, investment diversification, debt management)
  - Productivity Patterns (goal completion rate, focus duration, context switching)
  - Mental Wellness (stress resilience, mindfulness practice, social engagement)

### LightGBM Cascade Predictor
- **Architecture**: 5 chained gradient boosting models
- **Inference Order**: Health → Mind → Productivity → Finance → Life
- **Real-Time Updates**: Recalculates after each user interaction
- **Output**: Multi-dimensional life balance scores (0–1 range)

### LangChain Orchestrator
- **Framework**: LangChain v0.1+
- **LLM Provider**: Groq API with Claude Haiku
- **Memory**: Persistent conversation history + dynamic user context
- **Routing**: Domain-specific prompt templates for nuanced responses
- **Features**:
  - Multi-step reasoning chains
  - Context injection from MongoDB
  - Semantic memory for long-term learning

---

## Roadmap

### Phase 1: MVP (Current) ✅
- [x] User authentication & profiles
- [x] 15-question assessment
- [x] GMM-based clustering
- [x] Feature engineering pipeline
- [x] LightGBM cascade models
- [x] Real-time score recalculation
- [x] Groq API integration
- [x] Basic AI counselor

### Phase 2: Enhanced Personalization (Q3 2026)
- [ ] Advanced feature engineering (temporal patterns, seasonality)
- [ ] Multi-modal input (wearable data, calendar integration)
- [ ] Improved LLM routing (RAG-based context retrieval)
- [ ] Custom prompt templates per user

### Phase 3: Social & Collaborative (Q4 2026)
- [ ] Peer comparison & leaderboards
- [ ] Group challenges & accountability
- [ ] Social sharing features
- [ ] Community insights & trends

### Phase 4: Mobile & Offline (2027)
- [ ] React Native mobile app
- [ ] Offline-first architecture
- [ ] Push notifications
- [ ] Wearable integration (Apple Watch, Fitbit)

---

## Contributing

We welcome contributions from developers, data scientists, and UX designers!

### How to Contribute

1. **Fork the Repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/LifeSync.git
   cd LifeSync
   git checkout -b feature/your-feature-name
   ```

2. **Make Your Changes**
   - Follow the existing code style and conventions
   - Add meaningful comments for complex logic
   - Ensure your code is modular and testable

3. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: Add feature description

   - Detail 1
   - Detail 2
   - Closes #issue_number"
   ```

4. **Push and Create a Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```
   Then open a PR on GitHub with a clear description.

### Code Guidelines

- **Naming**: Use camelCase for JS/Python variables, PascalCase for classes
- **Functions**: Keep functions focused (single responsibility principle)
- **Comments**: Document public APIs and complex algorithms
- **Testing**: Add tests for new features
- **Commits**: Use conventional commits (feat:, fix:, docs:, refactor:)

### Reporting Issues

Found a bug? Please open an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs. actual behavior
- Environment details (OS, Node version, Python version)

---

## Contact

**Developer**: Devashish Sharma

- 🔗 **GitHub**: [@DevSharma03](https://github.com/DevSharma03)
- 💼 **LinkedIn**: [devashish-sharma](https://linkedin.com/in/devashish-sharma)
- 📧 **Issues**: [Report bugs](https://github.com/DevSharma03/LifeSync/issues)
- 💬 **Discussions**: [Join conversations](https://github.com/DevSharma03/LifeSync/discussions)

---

## License

This project is licensed under the **MIT License** — see [LICENSE](LICENSE) for details.

The MIT License is permissive, allowing you to use this code freely in personal and commercial projects, provided you include the original license text.

---

<div align="center">

⭐ **Found LifeSync helpful? Please star us on GitHub!**

Built with ❤️ by [Devashish Sharma](https://github.com/DevSharma03)

</div>
