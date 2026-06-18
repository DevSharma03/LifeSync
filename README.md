# LifeSync – AI-Powered Personal Life Management Platform

<div align="center">

[![GitHub Stars](https://img.shields.io/github/stars/DevSharma03/LifeSync?style=social)](https://github.com/DevSharma03/LifeSync)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active_Development-brightgreen.svg)](#)

**Transform your life with intelligent AI insights across health, productivity, finance, and mental wellness**

[View Repository](https://github.com/DevSharma03/LifeSync) • [Report Issues](https://github.com/DevSharma03/LifeSync/issues) • [Discussions](https://github.com/DevSharma03/LifeSync/discussions)

</div>

---

## What is LifeSync?

LifeSync is a **full-stack personal assistant platform** that unifies health, mental wellness, productivity, and finance tracking into one intelligent system powered by machine learning and AI.

Instead of juggling multiple apps, LifeSync:
- **Profiles you instantly** from 15 initial questions using AI clustering
- **Predicts your life scores** across 4 dimensions using cascade ML models
- **Provides personalized insights** through conversational AI
- **Connects the dots** between your health, mood, work, and finances

---

## Quick Start

### Prerequisites
```
Node.js v16+  |  Python 3.8+  |  MongoDB  |  Groq API Key
```

### Installation

```bash
# Clone repository
git clone https://github.com/DevSharma03/LifeSync.git
cd LifeSync

# Backend (Express + MongoDB)
cd Backend && npm install && npm start  # http://localhost:4000

# Frontend (React)
cd Frontend && npm install && npm start  # http://localhost:3000

# ML Service (FastAPI)
cd Models && pip install -r requirements.txt && uvicorn app:app --reload  # http://localhost:8000

# LLM Service (Groq AI)
cd LLM && pip install -r requirements.txt && python main.py  # http://localhost:9000
```

### Environment Setup

**Backend (.env)**
```
PORT=4000
MONGODB_URI=mongodb://localhost:27017/lifesync
JWT_SECRET=your_secret_key
ML_SERVICE_URL=http://localhost:8000
GROQ_API_KEY=your_groq_api_key
```

**Frontend (.env)**
```
REACT_APP_API_URL=http://localhost:4000
REACT_APP_ML_URL=http://localhost:8000
```

---

## Tech Stack

| Component | Technology |
|-----------|-----------|
| **Frontend** | React 19.1, React Router, Recharts |
| **Backend** | Node.js, Express 5.1, MongoDB |
| **ML/AI** | Python, FastAPI, scikit-learn, LightGBM |
| **LLM** | Groq API, Google Gemini |

---

## Project Structure

```
LifeSync/
├── Backend/          # Express API + MongoDB
├── Frontend/         # React dashboard
├── LLM/             # Groq AI agent (FastAPI)
├── Models/          # ML models + training pipelines
└── README.md
```

---

## Core Features

✨ **Cold-Start Profiling** – Generate complete user profiles from 15 questions  
🤖 **Cascade ML Pipeline** – 5-tier LightGBM models predicting health → mind → productivity → finance → life score  
🧠 **AI Insights** – Groq LLM provides personalized recommendations  
📊 **46+ Metrics** – Comprehensive tracking across 4 life dimensions  
✅ **Data Integrity** – Semantic firewall ensures logical consistency  

---

## How It Works

```
User Assessment (15 Q's)
    ↓
Gaussian Mixture Model (12 Clusters)
    ↓
Complete Profile (46 Features)
    ↓
5-Tier LightGBM Cascade
    ↓
Life Scores + AI Recommendations
```

---

## API Endpoints

### ML Service (Port 8000)
- `POST /infer-profile` – Generate user profile from assessment
- `POST /predict-scores` – Predict life scores
- `GET /docs` – Interactive API docs (Swagger)

### LLM Service (Port 9000)
- `POST /query` – Chat with AI assistant
- `POST /api/recommend` – Get personalized recommendations

### Backend (Port 4000)
- `POST /api/auth/register` – User registration
- `POST /api/auth/login` – User login
- `GET /api/scores` – Fetch user scores
- `POST /api/scores/calculate` – Calculate new scores

---

## Contributing

We welcome contributions! Here's how:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "feat: Add feature description"`
4. Push and create a Pull Request

**Code Guidelines:**
- Follow existing code style
- Add meaningful commit messages
- Update documentation

---

## License

MIT License – see [LICENSE](LICENSE) for details.

---

## Contact

**Developer:** Devashish Sharma

- 🔗 GitHub: [@DevSharma03](https://github.com/DevSharma03)
- 💼 LinkedIn: [devashish-sharma](https://linkedin.com/in/devashish-sharma)
- 📧 Issues: [Report bugs](https://github.com/DevSharma03/LifeSync/issues)

---

<div align="center">

⭐ **Found LifeSync helpful? Please star us on GitHub!**

Built with ❤️ by [Devashish Sharma](https://github.com/DevSharma03)

</div>
