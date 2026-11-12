
import { Settings as SettingsIcon, Sparkles, ShieldCheck } from "lucide-react";

function Settings() {

  return (
    <div className="page-content">

      <div className="page-heading">
        <div>
          <h2>Application settings</h2>
          <p>Manage your PromptForge AI preferences.</p>
        </div>
      </div>

      <div className="settings-card">
        <div className="settings-heading">
          <SettingsIcon size={21} />
          <h3>General</h3>
        </div>

        <div className="settings-row">
          <div>
            <strong>Application name</strong>
            <p>Your AI prompt engineering workspace.</p>
          </div>
          <span>PromptForge AI</span>
        </div>

        <div className="settings-row">
          <div>
            <strong>Version</strong>
            <p>Current application version.</p>
          </div>
          <span>0.1.0</span>
        </div>
      </div>

      <div className="settings-card">
        <div className="settings-heading">
          <Sparkles size={21} />
          <h3>AI configuration</h3>
        </div>

        <div className="settings-row">
          <div>
            <strong>Primary provider</strong>
            <p>LLM provider configured for the backend.</p>
          </div>
          <span>OpenAI</span>
        </div>

        <div className="settings-row">
          <div>
            <strong>Target platforms</strong>
            <p>Platforms for which prompts can be generated.</p>
          </div>
          <span>ChatGPT, Claude, Gemini</span>
        </div>
      </div>

      <div className="settings-card">
        <div className="settings-heading">
          <ShieldCheck size={21} />
          <h3>Security</h3>
        </div>

        <div className="settings-row">
          <div>
            <strong>API key protection</strong>
            <p>AI credentials are intended to remain on the backend.</p>
          </div>
          <span className="security-status">Backend only</span>
        </div>
      </div>

    </div>
  );
}

export default Settings;
