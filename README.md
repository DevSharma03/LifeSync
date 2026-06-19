<div align="center">

<img src="https://media.giphy.com/media/LnRLrx1CT53LoXyZiy/giphy.gif" width="100" height="100" alt="AI Magic">

# ✨ LifeSync

### **AI-Powered Personal Life Management Platform**
*Transform chaos into balance with intelligent insights across health, finance, productivity, and mental wellness*

<br/>

[![GitHub Stars](https://img.shields.io/github/stars/DevSharma03/LifeSync?style=for-the-badge&logo=github&color=FFD700)](https://github.com/DevSharma03/LifeSync)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge&logo=opensourceinitiative)](LICENSE)
[![Status: Active](https://img.shields.io/badge/Status-Active%20Development-brightgreen?style=for-the-badge&logo=github)](https://github.com/DevSharma03/LifeSync)
[![Python: 3.8+](https://img.shields.io/badge/Python-3.8%2B-blue?style=for-the-badge&logo=python)](https://www.python.org/)
[![Node.js: 16+](https://img.shields.io/badge/Node.js-16%2B-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Ready-green?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)

<br/>

[🚀 Get Started](#-quick-start) • [📚 Documentation](#-core-components) • [🤝 Contributing](#-contributing) • [💬 Discussions](https://github.com/DevSharma03/LifeSync/discussions)

</div>

---

<br/>

## 🎯 The Problem We Solve

<div align="center">

**You juggle 5+ apps to track your life. ❌**

- 📱 Health app here
- 💰 Finance app there  
- 📊 Productivity tracker somewhere else
- 🧠 Mental wellness siloed away
- ❓ No unified insights connecting the dots

**LifeSync brings it all together. ✅**

One AI-powered platform. Real insights. Actual balance.

</div>

---

## ✨ What Makes LifeSync Different

<table>
<tr>
<td width="50%">

### 🧠 Cold-Start Magic
**From 15 questions to 45+ features**

Answer just 15 strategic questions, and our Gaussian Mixture Models instantly:
- Cluster you into behavioral profiles
- Engineer 45+ predictive features
- Generate a complete personality profile

No data collection nightmare. Instant personalization.

</td>
<td width="50%">

### ⚡ Real-Time Life Scores
**Dynamic balance tracking**

Our 5-tier LightGBM cascade predicts:
- 💪 Health Score
- 💰 Finance Score  
- 🎯 Productivity Score
- 🧘 Mental Wellness Score
- 🌟 **Composite Life Score**

Updates after every interaction.

</td>
</tr>
<tr>
<td width="50%">

### 🤖 AI Counselor
**Your personal advisor**

LangChain-powered agent that:
- Understands context from all life domains
- Reasons across health, finance, work, wellness
- Remembers your journey
- Delivers personalized guidance

Not robotic. Genuinely helpful.

</td>
<td width="50%">

### 🔗 Connected Insights
**The dots get connected**

See how:
- Sleep affects productivity
- Stress impacts finances
- Exercise influences mood
- Choices compound over time

One platform. Complete clarity.

</td>
</tr>
</table>

---

## 📊 Platform Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                           │
│                    🎨 LIFESYNC ARCHITECTURE                              │
│                                                                           │
│  ┌──────────────────┐                                                   │
│  │   📱 FRONTEND    │  React 19.1 | Real-time Dashboard                 │
│  │   (React App)    │  ✨ Beautiful Charts | Live Scores                │
│  └────────┬─────────┘                                                   │
│           │                                                             │
│           │  🔄 REST API (JSON)                                        │
│           ↓                                                             │
│  ┌──────────────────────────────────────┐                              │
│  │  🖥️  BACKEND ORCHESTRATOR            │  Node.js + Express          │
│  │  ├─ 🔐 JWT Authentication           │  ├─ Port: 4000              │
│  │  ├─ 📝 User Management              │  ├─ MongoDB Driver          │
│  │  ├─ 🎯 Score Calculation            │  └─ Service Router          │
│  │  └─ 🔄 Job Scheduler                │                             │
│  └────┬────────────────┬────────────────┘                              │
│       │                │                                               │
│    ┌──↓──┐          ┌──↓──────────┐                                   │
│    │      │          │             │                                   │
│    ↓      ↓          ↓             ↓                                   │
│  ┌─────┐ ┌──────┐  ┌─────────┐  ┌──────────┐                          │
│  │ 🗄️  │ │ 🧠   │  │ 🤖      │  │ 💬       │                          │
│  │ DB  │ │ ML   │  │ LLM     │  │ GROQ API │                          │
│  │     │ │      │  │ Service │  │          │                          │
│  │ Mon-│ │FastAPI│ │FastAPI  │  │Claude    │                          │
│  │oDB  │ │Port  │ │Port 9000│  │Haiku     │                          │
│  │     │ │8000  │ │         │  │          │                          │
│  └─────┘ └──────┘  └─────────┘  └──────────┘                          │
│    📊     🎲🔢      🧠💭      💡🎯                                     │
│  Profiles Models   Reasoning   Insights                                │
│                                                                           │
└─────────────────────────────────────────────────────────────────────────┘

                    ⬇️ DATA FLOW MAGIC ⬇️

    Assessment (15 Q's)  →  GMM Clustering  →  Feature Engineering
                                ↓
                        45+ Behavioral Features
                                ↓
                    5-Tier LightGBM Cascade
                    (Health → Mind → Productivity
                     → Finance → Life Score)
                                ↓
                    Real-Time Score Updates
                                ↓
            LangChain Agent + User Context
                                ↓
        Personalized AI Recommendations
```

---

## 🎮 The User Journey

<div align="center">

### **Step 1️⃣: Assess**
Answer 15 quick questions about your life

🔽

### **Step 2️⃣: Profile**
GMM clusters you into a behavioral profile, expanding to 45+ features

🔽

### **Step 3️⃣: Score**
5-tier ML cascade calculates your health, finance, productivity, wellness, and life scores

🔽

### **Step 4️⃣: Advise**
AI counselor delivers personalized insights across all life domains

🔽

### **Step 5️⃣: Improve**
Every action updates your scores—watch your life balance evolve

</div>

---

## 🛠️ Tech Stack at a Glance

<table align="center">
<tr>
<th>Category</th>
<th>Technologies</th>
<th>Purpose</th>
</tr>
<tr>
<td>🎨 <strong>Frontend</strong></td>
<td>
  <code>React 19.1</code> <br/>
  <code>React Router 7.8</code> <br/>
  <code>Recharts 3.1</code> <br/>
  <code>Lucide React</code>
</td>
<td>Beautiful, responsive dashboard with real-time score visualization</td>
</tr>
<tr>
<td>🖥️ <strong>Backend</strong></td>
<td>
  <code>Node.js</code> <br/>
  <code>Express 5.1</code> <br/>
  <code>Mongoose 8.19</code> <br/>
  <code>bcryptjs</code> <br/>
  <code>JWT</code>
</td>
<td>Robust REST API, authentication, orchestration, scheduled jobs</td>
</tr>
<tr>
<td>💾 <strong>Database</strong></td>
<td>
  <code>MongoDB 4.4+</code>
</td>
<td>Flexible document storage for profiles, assessments, scores, history</td>
</tr>
<tr>
<td>🧠 <strong>ML Pipeline</strong></td>
<td>
  <code>Python 3.8+</code> <br/>
  <code>FastAPI</code> <br/>
  <code>scikit-learn</code> <br/>
  <code>LightGBM</code> <br/>
  <code>NumPy/Pandas</code>
</td>
<td>GMM clustering, feature engineering, cascade model inference</td>
</tr>
<tr>
<td>🤖 <strong>LLM Engine</strong></td>
<td>
  <code>LangChain</code> <br/>
  <code>Groq API</code> <br/>
  <code>Claude Haiku</code>
</td>
<td>Multi-step reasoning, context-aware recommendations, domain routing</td>
</tr>
</table>

---

## 📁 Project Structure

```
LifeSync/
│
├── 📦 Backend/                          
│   ├── src/
│   │   ├── 🚀 server.js                    # Server entry point
│   │   ├── ⚙️  app.js                      # Express middleware & routes
│   │   ├── config/
│   │   │   ├── db.js                      # MongoDB connection
│   │   │   └── env.js                     # Environment setup
│   │   ├── 🔐 controllers/
│   │   │   ├── auth.controller.js        # Register, login, JWT logic
│   │   │   ├── user.controller.js        # User data management
│   │   │   └── score.controller.js       # Score calculation & retrieval
│   │   ├── 🛣️  routes/
│   │   │   ├── auth.routes.js            # Authentication endpoints
│   │   │   ├── user.routes.js            # User management endpoints
│   │   │   └── score.routes.js           # Score endpoints
│   │   ├── 🗂️  models/
│   │   │   ├── User.js                   # User schema & methods
│   │   │   ├── Assessment.js             # Assessment responses
│   │   │   ├── Score.js                  # Life scores
│   │   │   └── Conversation.js           # Chat history
│   │   ├── 🛡️  middleware/
│   │   │   ├── auth.middleware.js        # JWT verification
│   │   │   ├── errorHandler.js           # Global error handling
│   │   │   └── validation.js             # Request validation
│   │   └── ⏰ jobs/
│   │       └── score.job.js              # Cron-based score updates
│   ├── .env.example
│   ├── package.json
│   └── package-lock.json
│
├── 🎨 Frontend/                         
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   └── manifest.json
│   ├── src/
│   │   ├── 🎯 index.js
│   │   ├── 📄 App.js
│   │   ├── 📑 pages/
│   │   │   ├── Dashboard.js              # Main life score dashboard
│   │   │   ├── Assessment.js             # 15-question onboarding
│   │   │   ├── Chat.js                   # AI counselor chat
│   │   │   ├── Profile.js                # User profile & insights
│   │   │   └── Login.js                  # Authentication page
│   │   ├── 🧩 components/
│   │   │   ├── Navbar.js                 # Top navigation
│   │   │   ├── ScoreCard.js              # Individual score display
│   │   │   ├── LineChart.js              # Score trends
│   │   │   ├── ChatBox.js                # Message interface
│   │   │   └── Sidebar.js                # Navigation sidebar
│   │   ├── 🔌 services/
│   │   │   ├── api.js                    # Axios instance & HTTP config
│   │   │   └── auth.js                   # Auth token management
│   │   ├── 🎨 styles/
│   │   │   ├── App.css
│   │   │   ├── Dashboard.css
│   │   │   └── vars.css                  # Design tokens
│   │   └── 🏠 utils/
│   │       ├── formatters.js
│   │       └── constants.js
│   ├── .env.example
│   ├── package.json
│   └── public/
│
├── 🧠 Models/                           # ML Pipeline
│   ├── 🚀 main.py                        # FastAPI server entry
│   ├── 📊 preprocessing.py              # Feature engineering logic
│   ├── models/
│   │   ├── gmm_cluster.py               # Gaussian Mixture Model
│   │   ├── cascade_predictor.py         # 5-tier LightGBM cascade
│   │   └── feature_extractor.py         # Feature computation
│   ├── data/
│   │   ├── training_data.csv
│   │   └── model_config.json
│   ├── 📓 notebooks/
│   │   ├── 01_exploratory_analysis.ipynb
│   │   ├── 02_feature_engineering.ipynb
│   │   └── 03_model_training.ipynb
│   ├── requirements.txt
│   └── .env.example
│
├── 💬 LLM/                              # AI Counselor Engine
│   ├── 🚀 main.py                        # FastAPI server entry
│   ├── 🤖 agent.py                       # LangChain orchestrator
│   ├── 📋 prompts/
│   │   ├── system_prompt.txt            # Main agent personality
│   │   ├── health_domain.txt            # Health-specific reasoning
│   │   ├── finance_domain.txt           # Finance-specific reasoning
│   │   ├── productivity_domain.txt      # Work/productivity guidance
│   │   └── wellness_domain.txt          # Mental wellness support
│   ├── 🧠 memory/
│   │   ├── conversation.py              # Chat history management
│   │   └── user_context.py              # Dynamic user injection
│   ├── 🔧 config.py                      # Groq API configuration
│   ├── requirements.txt
│   └── .env.example
│
├── 📄 README.md                         # This file
├── 📋 LICENSE                           # MIT License
├── .gitignore
└── 🐳 docker-compose.yml (optional)    # Docker orchestration

```

---

## 🚀 Quick Start

### 📋 Prerequisites

Before you begin, ensure you have:

```
✅ Node.js v16+ (https://nodejs.org/)
✅ Python 3.8+ (https://www.python.org/)
✅ MongoDB (local or MongoDB Atlas: https://www.mongodb.com/cloud/atlas)
✅ Groq API Key (free tier: https://console.groq.com)
✅ Git (https://git-scm.com/)
```

### 🔧 Environment Setup

**Create `.env` files for each service:**

#### Backend (Backend/.env)
```bash
# 🖥️ Server Config
PORT=4000
NODE_ENV=development

# 💾 Database
MONGODB_URI=mongodb://localhost:27017/lifesync
# For MongoDB Atlas: mongodb+srv://user:password@cluster.mongodb.net/lifesync

# 🔐 Security
JWT_SECRET=your_super_secret_jwt_key_here_minimum_32_characters

# 🔗 Service URLs
ML_SERVICE_URL=http://localhost:8000
LLM_SERVICE_URL=http://localhost:9000
```

#### Frontend (Frontend/.env)
```bash
# 🌐 API Endpoints
REACT_APP_API_URL=http://localhost:4000
REACT_APP_ML_URL=http://localhost:8000
REACT_APP_LLM_URL=http://localhost:9000
```

#### ML Service (Models/.env)
```bash
# 💾 Database
MONGODB_URI=mongodb://localhost:27017/lifesync

# 🧠 Model Config
MODEL_PATH=./models/
DEBUG=true
```

#### LLM Service (LLM/.env)
```bash
# 🤖 LLM Config
GROQ_API_KEY=your_groq_api_key_here
MONGODB_URI=mongodb://localhost:27017/lifesync
LLM_MODEL=mixtral-8x7b-32768
TEMPERATURE=0.7
```

### ⚡ Installation & Running

**Clone the repository:**
```bash
git clone https://github.com/DevSharma03/LifeSync.git
cd LifeSync
```

**Open 5 terminals and run these commands:**

#### Terminal 1️⃣ — MongoDB
```bash
# Using Docker (recommended)
docker run -d -p 27017:27017 --name lifesync-db mongo:latest

# OR using local MongoDB
mongod --dbpath /path/to/your/data
```

#### Terminal 2️⃣ — Backend
```bash
cd Backend
npm install
npm start
# 🎉 Backend running on http://localhost:4000
```

#### Terminal 3️⃣ — Frontend
```bash
cd Frontend
npm install
npm start
# 🎉 Frontend opens on http://localhost:3000
```

#### Terminal 4️⃣ — ML Service
```bash
cd Models
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
# 🎉 ML API on http://localhost:8000/docs (Swagger UI)
```

#### Terminal 5️⃣ — LLM Service
```bash
cd LLM
pip install -r requirements.txt
python main.py
# 🎉 LLM API running on http://localhost:9000
```

**That's it! 🎊**
- Dashboard: [http://localhost:3000](http://localhost:3000)
- API Docs: [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 🧠 Core Components Explained

### 1. **GMM Cold-Start Profiler** 🎲
<details open>
<summary><strong>Click to expand</strong></summary>

**What it does:**
- Takes 15 assessment answers
- Uses Gaussian Mixture Modeling to cluster users
- Outputs behavioral profile + probability distribution

**Why it matters:**
- ⚡ Instant user profiling (no cold-start problem)
- 🎯 Personalization from day one
- 🔬 Mathematically rigorous clustering

**Technical Details:**
- Input: 15-dimensional assessment vector
- Algorithm: GMM with 12 components
- Output: Cluster ID + feature vector (45+ dimensions)

```python
# Example Usage
from Models.preprocessing import GMM_Profiler

profiler = GMM_Profiler(n_clusters=12)
profile = profiler.cluster(assessment_vector)
# Returns: { cluster: 3, features: [...], probability: 0.89 }
```

</details>

---

### 2. **Feature Engineering Pipeline** 🔧
<details open>
<summary><strong>Click to expand</strong></summary>

**What it does:**
- Expands 15 questions into 45+ behavioral features
- Applies domain-specific transformations
- Creates composite indices

**Why it matters:**
- 📈 Dense feature vectors improve ML accuracy
- 🎯 Captures nuanced behavioral patterns
- 🔗 Enables cross-domain insights

**Features Generated:**

| Domain | Sample Features | Count |
|--------|---|---|
| 💪 **Health** | Sleep Quality Index, Exercise Consistency, Nutrition Score | 12 |
| 💰 **Finance** | Savings Rate, Debt Ratio, Investment Diversity | 10 |
| 🎯 **Productivity** | Focus Hours/Week, Goal Completion %, Context Switches | 11 |
| 🧘 **Wellness** | Stress Resilience, Mindfulness Score, Social Engagement | 12 |

</details>

---

### 3. **Cascade LightGBM Models** 🔀
<details open>
<summary><strong>Click to expand</strong></summary>

**Architecture:**
```
Features (45+)
    ↓
[Model 1] → Health Score
    ↓
[Model 2] → Wellness Score (uses Health output)
    ↓
[Model 3] → Productivity Score
    ↓
[Model 4] → Finance Score
    ↓
[Model 5] → Life Score (uses all previous outputs)
```

**Why Cascade?**
- 🎯 Preserves domain dependencies
- 📊 Improves prediction accuracy
- 🔄 Enables recursive refinement

**Real-Time Updates:**
- After each user action, features update
- Cascade re-runs (milliseconds)
- Life scores refresh instantly

</details>

---

### 4. **LangChain AI Counselor** 🤖
<details open>
<summary><strong>Click to expand</strong></summary>

**Components:**
1. **Memory System**: Stores conversation history + user context
2. **Prompt Router**: Selects domain-specific templates
3. **LLM Integration**: Claude Haiku via Groq API
4. **Context Injector**: Injects real-time user data

**Multi-Step Reasoning:**

```
User Query
    ↓
[Analyze Intent] → Determine domain(s)
    ↓
[Retrieve Context] → Fetch user profile + scores
    ↓
[Route Prompt] → Select domain-specific template
    ↓
[Chain Reasoning] → LLM performs multi-step analysis
    ↓
[Generate Response] → Personalized, multi-step guidance
    ↓
User Receives Insight
```

**Example:**
```
User: "I'm stressed but also want to save more money"

System:
1. Identifies domains: Wellness + Finance
2. Fetches user's wellness_score (0.65) & finance_score (0.71)
3. Routes to combined wellness-finance prompt
4. LLM reasons about stress-savings relationship
5. Delivers nuanced recommendation

Output: "High stress often leads to emotional spending. 
Let's tackle stress first with 10-min daily meditation, 
which research shows reduces impulsive purchases by 23%..."
```

</details>

---

## 📊 API Endpoints

### Authentication 🔐
```
POST /api/auth/register    # Create new user
POST /api/auth/login       # User login
GET  /api/auth/profile     # Get user profile
```

### Scores 📈
```
GET  /api/scores           # Get latest scores
POST /api/scores/update    # Trigger score recalculation
GET  /api/scores/history   # Get score trends
```

### Chat 💬
```
POST /api/chat             # Send message to AI counselor
GET  /api/chat/history     # Get conversation history
```

### ML Service 🧠
```
POST /infer-profile        # Generate profile from assessment
POST /predict-scores       # Predict life scores
GET  /docs                 # Swagger API documentation
```

---

## 🎯 Key Features Breakdown

| Feature | What It Does | Why It Rocks |
|---------|---|---|
| 🧪 **Cold-Start Profiling** | 15 Q's → 45+ features | Instant personalization, no data collection nightmare |
| 📊 **Real-Time Scoring** | Updates after each action | See how choices affect life balance immediately |
| 🤖 **AI Counselor** | Multi-step reasoning assistant | Connects all life domains, not siloed advice |
| 🔐 **JWT Authentication** | Secure token-based auth | Enterprise-grade security |
| 💾 **MongoDB Storage** | Persistent data with indexes | Fast queries, scalable storage |
| 📱 **Responsive UI** | Mobile-first React dashboard | Beautiful on all devices |
| ⚡ **Real-Time Updates** | WebSocket-ready architecture | Live score changes |
| 🧠 **Domain-Specific AI** | Specialized prompts per domain | Context-aware, nuanced responses |

---

## 🗺️ Roadmap

### ✅ Phase 1: MVP (Current)
- [x] User authentication & profiles
- [x] 15-question assessment
- [x] GMM clustering
- [x] Feature engineering
- [x] LightGBM cascade models
- [x] Real-time score updates
- [x] Groq API integration
- [x] Basic AI counselor

### 🔜 Phase 2: Personalization (Q3 2026)
- [ ] Advanced temporal feature engineering
- [ ] Wearable data integration (Apple Health, Fitbit)
- [ ] RAG-based prompt generation
- [ ] Custom user profiles per domain

### 🔜 Phase 3: Social (Q4 2026)
- [ ] Peer comparison & leaderboards
- [ ] Group challenges
- [ ] Social sharing
- [ ] Community insights

### 🔜 Phase 4: Mobile (2027)
- [ ] React Native app
- [ ] Offline-first architecture
- [ ] Push notifications
- [ ] Wearable app support

---

## 🤝 Contributing

We ❤️ contributions! Here's how to get involved:

### 1. Fork & Clone
```bash
git clone https://github.com/YOUR_USERNAME/LifeSync.git
cd LifeSync
git checkout -b feature/amazing-feature
```

### 2. Make Your Changes
```bash
# Code with style
# Add comments for complex logic
# Follow existing conventions
```

### 3. Commit with Conventional Commits
```bash
git commit -m "feat: Add amazing feature

- Detail about what you added
- Why it matters
- Closes #123"
```

### 4. Push & Open PR
```bash
git push origin feature/amazing-feature
# Open PR on GitHub with clear description
```

### 📋 Code Guidelines
- ✅ Use camelCase for JS/Python variables
- ✅ Keep functions focused (single responsibility)
- ✅ Add meaningful comments
- ✅ Write tests for new features
- ✅ Update documentation

### 🐛 Reporting Bugs
Found an issue? [Open a bug report](https://github.com/DevSharma03/LifeSync/issues/new) with:
- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Environment details

---

## 📞 Support & Contact

<div align="center">

**Got questions? We're here to help!**

| Channel | Contact |
|---------|---------|
| 🔗 GitHub | [@DevSharma03](https://github.com/DevSharma03) |
| 💼 LinkedIn | [devashish-sharma](https://linkedin.com/in/devashish-sharma) |
| 📧 Issues | [Report bugs](https://github.com/DevSharma03/LifeSync/issues) |
| 💬 Discussions | [Join community](https://github.com/DevSharma03/LifeSync/discussions) |

</div>

---

## 📄 License

MIT License © 2026 Devashish Sharma

You're free to use, modify, and distribute LifeSync in personal and commercial projects. See [LICENSE](LICENSE) for details.

---

<div align="center">

## 🌟 Show Your Support

If LifeSync helped you achieve better life balance, please:

⭐ **Star the repository** on GitHub  
🍴 **Fork and contribute** new features  
📢 **Share** with your network  
💬 **Join discussions** and help others  

<br/>

### Built with ❤️ by [Devashish Sharma](https://github.com/DevSharma03)

**Version:** 1.0.0  
**Last Updated:** June 2026  
**Status:** 🚀 Actively Maintained

<br/>

<img src="https://media.giphy.com/media/hvRJCLFzcasrng815IWW6HqWmwKPttkzt/giphy.gif" width="50" alt="success">

### Ready to transform your life? [Get started now →](https://github.com/DevSharma03/LifeSync#-quick-start)

</div>