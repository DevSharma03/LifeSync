from fastapi import FastAPI
from schemas import (
    UserColdStart,
    FullProfileInput,
    InferProfileResponse,
    PredictionScores
)
from loader import load_artifacts
from inference import infer_profile, predict_scores

app = FastAPI(
    title="LifeSync Inference API",
    version="2.0"
)

artifacts = load_artifacts()


@app.post("/infer-profile", response_model=InferProfileResponse)
def infer_user_profile(user: UserColdStart):
    return infer_profile(user.dict(), artifacts)


@app.post("/predict-scores", response_model=PredictionScores)
def predict_user_scores(profile: FullProfileInput):
    return predict_scores(profile.dict(), artifacts)

# to Run py -m uvicorn app:app --host 0.0.0.0 --port 9000 --reload 