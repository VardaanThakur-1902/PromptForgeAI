
from typing import Literal, Optional

from pydantic import BaseModel, Field, field_validator


class PromptRequest(BaseModel):
    task: str = Field(
        ...,
        min_length=10,
        max_length=10000,
        description="Description of the user's task"
    )

    category: Literal[
        "software",
        "ai_ml",
        "web_development",
        "research",
        "cybersecurity",
        "general"
    ]

    target_ai: Literal[
        "ChatGPT",
        "Claude",
        "Gemini",
        "Universal"
    ] = "Universal"

    complexity: Literal[
        "beginner",
        "intermediate",
        "advanced"
    ] = "intermediate"

    instructions: Optional[str] = Field(
        default="",
        max_length=5000
    )

    @field_validator("task")
    @classmethod
    def validate_task(cls, value: str) -> str:
        value = value.strip()

        if not value:
            raise ValueError("Task cannot be empty")

        return value

    @field_validator("instructions")
    @classmethod
    def clean_instructions(cls, value):
        if value is not None:
            return value.strip()

        return ""


class PromptPreparationResponse(BaseModel):
    success: bool
    message: str
    data: dict
