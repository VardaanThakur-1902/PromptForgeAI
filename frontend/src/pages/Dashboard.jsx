
import {
  Sparkles,
  Code2,
  Brain,
  Globe,
  BookOpen,
  ArrowRight,
  WandSparkles
} from "lucide-react";

function Dashboard({ setActivePage }) {

  const categories = [
    {
      title: "Software Development",
      description: "Build complete applications and software projects.",
      icon: Code2
    },
    {
      title: "AI / Machine Learning",
      description: "Create ML models, AI applications and agents.",
      icon: Brain
    },
    {
      title: "Web Development",
      description: "Build websites and full-stack applications.",
      icon: Globe
    },
    {
      title: "Research & Writing",
      description: "Generate prompts for research and documentation.",
      icon: BookOpen
    }
  ];

  return (
    <div className="page-content">

      <section className="welcome-banner">
        <div className="welcome-content">
          <div className="welcome-tag">
            <Sparkles size={15} />
            YOUR AI PROMPT ENGINEERING ASSISTANT
          </div>

          <h2>
            Turn your ideas into
            <span> powerful AI prompts.</span>
          </h2>

          <p>
            Describe what you want to achieve. PromptForge AI
            will help transform your idea into detailed,
            structured instructions for your favourite AI.
          </p>

          <button
            className="primary-button"
            onClick={() => setActivePage("generator")}
          >
            <WandSparkles size={18} />
            Create a new prompt
            <ArrowRight size={17} />
          </button>
        </div>

        <div className="welcome-decoration">
          <div className="decoration-circle circle-one"></div>
          <div className="decoration-circle circle-two"></div>
          <div className="decoration-icon">
            <Sparkles size={62} />
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <h3>Explore categories</h3>
            <p>What would you like to create today?</p>
          </div>
        </div>

        <div className="category-grid">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                className="category-card"
                key={category.title}
                onClick={() => setActivePage("generator")}
              >
                <div className="category-icon">
                  <Icon size={23} />
                </div>

                <h4>{category.title}</h4>
                <p>{category.description}</p>

                <div className="category-arrow">
                  <ArrowRight size={18} />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <h3>How PromptForge works</h3>
            <p>From a simple idea to a complete AI instruction.</p>
          </div>
        </div>

        <div className="workflow-grid">
          <div className="workflow-card">
            <span className="workflow-number">01</span>
            <h4>Describe your idea</h4>
            <p>Tell us what you want to build or accomplish.</p>
          </div>

          <div className="workflow-card">
            <span className="workflow-number">02</span>
            <h4>Analyze requirements</h4>
            <p>Our agents will understand your requirements.</p>
          </div>

          <div className="workflow-card">
            <span className="workflow-number">03</span>
            <h4>Generate your prompt</h4>
            <p>Get a structured prompt ready for your AI.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Dashboard;
