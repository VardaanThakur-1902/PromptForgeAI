
from fastapi import APIRouter

from app.schemas.prompt_schema import (
    PromptRequest,
    PromptPreparationResponse
)

router = APIRouter()


CATEGORIES = [
    {
        "id": "software",
        "name": "Software Development",
        "description": "Applications, programming and software projects"
    },
    {
        "id": "ai_ml",
        "name": "AI and Machine Learning",
        "description": "Machine learning, deep learning and AI projects"
    },
    {
        "id": "web_development",
        "name": "Web Development",
        "description": "Frontend, backend and full-stack applications"
    },
    {
        "id": "research",
        "name": "Research",
        "description": "Academic research, reports and paper writing"
    },
    {
        "id": "cybersecurity",
        "name": "Cybersecurity",
        "description": "Security analysis and cybersecurity projects"
    },
    {
        "id": "general",
        "name": "General",
        "description": "Other tasks and ideas"
    }
]


@router.get("/categories")
async def get_categories():
    return {
        "success": True,
        "categories": CATEGORIES
    }


@router.post(
    "/prompts/prepare",
    response_model=PromptPreparationResponse
)
async def prepare_prompt(request: PromptRequest):

    prepared_data = {
        "task": request.task,
        "category": request.category,
        "target_ai": request.target_ai,
        "complexity": request.complexity,
        "instructions": request.instructions
    }

    return {
        "success": True,
        "message": (
            "Requirements received and validated successfully. "
            "Ready for the next processing stage."
        ),
        "data": prepared_data
    }
