from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from Agent import MainAgent  # ✅ Make sure this import path is correct

app = FastAPI(title="LifeSync Agent API")

# ✅ Enable CORS for frontend (React)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or ["http://localhost:3000"] if you want to restrict it
    allow_credentials=True,
    allow_methods=["*"],  # Important: allow OPTIONS preflight
    allow_headers=["*"],
)

# ✅ Request body model
class UserQuery(BaseModel):
    user_query: str
    messages: Optional[List[dict]] = []

# ✅ Initialize your main agent
agent = MainAgent()

# ✅ Main query route
@app.post("/query")
async def query_agent(payload: UserQuery):
    try:
        # Call your LLM or routing logic
        result = agent.handle_user_query(payload.user_query, messages=payload.messages)

        # Return a clean response format
        return {"response": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))



# To run this app use py -m uvicorn Agent_API:app --reload