
from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_get_categories():
    response = client.get("/api/categories")

    assert response.status_code == 200

    data = response.json()

    assert data["success"] is True
    assert len(data["categories"]) == 6


def test_prepare_prompt_success():
    payload = {
        "task": "Build an AI-powered chatbot using Python",
        "category": "ai_ml",
        "target_ai": "ChatGPT",
        "complexity": "intermediate",
        "instructions": "Use clean architecture"
    }

    response = client.post(
        "/api/prompts/prepare",
        json=payload
    )

    assert response.status_code == 200

    data = response.json()

    assert data["success"] is True
    assert data["data"]["target_ai"] == "ChatGPT"
    assert data["data"]["category"] == "ai_ml"


def test_prepare_prompt_invalid_category():
    payload = {
        "task": "Build an AI-powered chatbot using Python",
        "category": "invalid_category",
        "target_ai": "ChatGPT",
        "complexity": "intermediate",
        "instructions": ""
    }

    response = client.post(
        "/api/prompts/prepare",
        json=payload
    )

    assert response.status_code == 422


def test_prepare_prompt_short_task():
    payload = {
        "task": "AI",
        "category": "ai_ml",
        "target_ai": "ChatGPT",
        "complexity": "beginner",
        "instructions": ""
    }

    response = client.post(
        "/api/prompts/prepare",
        json=payload
    )

    assert response.status_code == 422
