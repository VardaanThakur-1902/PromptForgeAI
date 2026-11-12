
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import router

app = FastAPI(
    title="PromptForge AI",
    description="Universal AI Prompt Generation Agent",
    version="0.2.0"
)

# Frontend-backend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API routes
app.include_router(router, prefix="/api", tags=["Prompt Generation"])


@app.get("/")
async def root():
    return {
        "message": "Welcome to PromptForge AI",
        "status": "running"
    }


@app.get("/api/health")
async def health_check():
    return {
        "status": "healthy",
        "application": "PromptForge AI",
        "version": "0.2.0"
    }
