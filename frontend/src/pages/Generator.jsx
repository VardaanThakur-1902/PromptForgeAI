
import { useState } from "react";

import {
  Sparkles,
  Code2,
  Brain,
  Globe,
  BookOpen,
  Upload,
  FileText,
  X,
  WandSparkles,
  Info
} from "lucide-react";

function Generator() {

  const [task, setTask] = useState("");
  const [category, setCategory] = useState("software");
  const [targetAI, setTargetAI] = useState("ChatGPT");
  const [complexity, setComplexity] = useState("Advanced");
  const [instructions, setInstructions] = useState("");
  const [files, setFiles] = useState([]);

  const categories = [
    { id: "software", name: "Software Development", icon: Code2 },
    { id: "ai", name: "AI / ML", icon: Brain },
    { id: "web", name: "Web Development", icon: Globe },
    { id: "research", name: "Research", icon: BookOpen },
    { id: "general", name: "General Task", icon: Sparkles }
  ];

  function handleFileChange(event) {
    const selectedFiles = Array.from(event.target.files || []);

    setFiles((previous) => [
      ...previous,
      ...selectedFiles
    ]);

    event.target.value = "";
  }

  function removeFile(index) {
    setFiles((previous) =>
      previous.filter((_, i) => i !== index)
    );
  }

  function handleGenerate() {
    // Actual AI generation will be implemented in Phase 4.
    console.info("Prompt configuration:", {
      task,
      category,
      targetAI,
      complexity,
      instructions,
      files: files.map((file) => file.name)
    });

    window.alert(
      "Your configuration is ready. AI generation will be connected in Phase 4."
    );
  }

  return (
    <div className="page-content generator-page">

      <div className="generator-intro">
        <div className="welcome-tag">
          <Sparkles size={15} />
          PROMPT CREATION WORKSPACE
        </div>

        <h2>Create your perfect prompt</h2>

        <p>
          Give us your idea. We will help turn it into
          detailed instructions that another AI can follow.
        </p>
      </div>

      <div className="generator-layout">

        <div className="generator-form">

          <section className="form-section">
            <div className="form-section-heading">
              <span className="step-number">01</span>
              <div>
                <h3>Describe your task</h3>
                <p>Explain what you want the AI to accomplish.</p>
              </div>
            </div>

            <textarea
              className="task-textarea"
              value={task}
              onChange={(event) => setTask(event.target.value)}
              placeholder="Example: I want to build an AI-powered attendance management system using Python, OpenCV and MySQL. Guide me through the complete development process..."
              rows={7}
            />

            <div className="input-footer">
              <span>Be as descriptive as possible.</span>
              <span>{task.length} characters</span>
            </div>
          </section>

          <section className="form-section">
            <div className="form-section-heading">
              <span className="step-number">02</span>
              <div>
                <h3>Select task category</h3>
                <p>Choose the type of work you want to perform.</p>
              </div>
            </div>

            <div className="category-select-grid">
              {categories.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`select-category ${
                      category === item.id ? "selected" : ""
                    }`}
                    onClick={() => setCategory(item.id)}
                  >
                    <Icon size={19} />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>
          </section>

          <section className="form-section">
            <div className="form-section-heading">
              <span className="step-number">03</span>
              <div>
                <h3>Choose your target AI</h3>
                <p>Which AI will receive your generated prompt?</p>
              </div>
            </div>

            <div className="select-grid">
              {["ChatGPT", "Claude", "Gemini", "Universal"].map((model) => (
                <button
                  key={model}
                  type="button"
                  className={`model-option ${
                    targetAI === model ? "selected" : ""
                  }`}
                  onClick={() => setTargetAI(model)}
                >
                  <span className="model-symbol">
                    {model === "ChatGPT" ? "G" :
                     model === "Claude" ? "C" :
                     model === "Gemini" ? "✦" : "✧"}
                  </span>

                  <span>{model}</span>
                </button>
              ))}
            </div>
          </section>

          <section className="form-section">
            <div className="form-section-heading">
              <span className="step-number">04</span>
              <div>
                <h3>Project complexity</h3>
                <p>Choose the level of detail you expect.</p>
              </div>
            </div>

            <div className="select-grid">
              {["Beginner", "Intermediate", "Advanced", "Expert"].map((level) => (
                <button
                  key={level}
                  type="button"
                  className={`complexity-option ${
                    complexity === level ? "selected" : ""
                  }`}
                  onClick={() => setComplexity(level)}
                >
                  {level}
                </button>
              ))}
            </div>
          </section>

          <section className="form-section">
            <div className="form-section-heading">
              <span className="step-number">05</span>
              <div>
                <h3>Additional instructions</h3>
                <p>Specify preferences and restrictions.</p>
              </div>
            </div>

            <textarea
              className="task-textarea additional-textarea"
              value={instructions}
              onChange={(event) => setInstructions(event.target.value)}
              placeholder="Example: Use Python 3.11, explain every function, implement the project phase by phase and preserve existing code..."
              rows={4}
            />
          </section>

          <section className="form-section">
            <div className="form-section-heading">
              <span className="step-number">06</span>
              <div>
                <h3>Existing project files</h3>
                <p>Attach files to provide additional context.</p>
              </div>
            </div>

            <label className="upload-area">
              <Upload size={25} />

              <strong>Click to select project files</strong>

              <span>PDF, DOCX, TXT, Python and other source files</span>

              <input
                type="file"
                multiple
                hidden
                onChange={handleFileChange}
              />
            </label>

            {files.length > 0 && (
              <div className="selected-files">
                {files.map((file, index) => (
                  <div className="selected-file" key={`${file.name}-${index}`}>
                    <FileText size={17} />

                    <span>{file.name}</span>

                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      aria-label={`Remove ${file.name}`}
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>

          <div className="generation-notice">
            <Info size={18} />
            <span>
              AI generation and file processing will be connected
              in upcoming development phases.
            </span>
          </div>

          <button
            className="generate-button"
            type="button"
            disabled={!task.trim()}
            onClick={handleGenerate}
          >
            <WandSparkles size={19} />
            Prepare prompt configuration
          </button>

        </div>

        <aside className="generator-side-panel">

          <div className="side-panel-card">
            <div className="side-panel-icon">
              <Sparkles size={22} />
            </div>

            <h3>What happens next?</h3>

            <p>
              Your requirements will pass through our AI
              agents before a final prompt is generated.
            </p>

            <div className="mini-workflow">
              <div><span>1</span> Understand your task</div>
              <div><span>2</span> Analyze requirements</div>
              <div><span>3</span> Plan implementation</div>
              <div><span>4</span> Generate final prompt</div>
            </div>
          </div>

          <div className="side-panel-card configuration-card">
            <h3>Current configuration</h3>

            <div className="config-row">
              <span>Target AI</span>
              <strong>{targetAI}</strong>
            </div>

            <div className="config-row">
              <span>Complexity</span>
              <strong>{complexity}</strong>
            </div>

            <div className="config-row">
              <span>Category</span>
              <strong>
                {categories.find((item) => item.id === category)?.name}
              </strong>
            </div>

            <div className="config-row">
              <span>Attached files</span>
              <strong>{files.length}</strong>
            </div>
          </div>

        </aside>

      </div>
    </div>
  );
}

export default Generator;
