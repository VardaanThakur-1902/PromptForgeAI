
import { Clock3, Sparkles, Plus } from "lucide-react";

function History({ setActivePage }) {

  return (
    <div className="page-content">

      <div className="page-heading">
        <div>
          <h2>Your prompt history</h2>
          <p>Access and manage your previously generated prompts.</p>
        </div>

        <button
          className="primary-button"
          onClick={() => setActivePage("generator")}
        >
          <Plus size={18} />
          New Prompt
        </button>
      </div>

      <div className="empty-state">
        <div className="empty-state-icon">
          <Clock3 size={35} />
        </div>

        <h3>No prompts yet</h3>

        <p>
          Your generated prompts will appear here.
          Start creating your first prompt to build your history.
        </p>

        <button
          className="primary-button"
          onClick={() => setActivePage("generator")}
        >
          <Sparkles size={18} />
          Create your first prompt
        </button>
      </div>

    </div>
  );
}

export default History;
