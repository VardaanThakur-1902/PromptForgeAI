
import { Menu, Sparkles } from "lucide-react";

function Header({ activePage, setMobileOpen }) {

  const pageTitles = {
    dashboard: "Dashboard",
    generator: "Prompt Generator",
    history: "Prompt History",
    settings: "Settings"
  };

  return (
    <header className="app-header">

      <div className="header-left">
        <button
          className="mobile-menu-button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation"
        >
          <Menu size={22} />
        </button>

        <div>
          <h1>{pageTitles[activePage]}</h1>
          <p>Welcome to your AI prompt workspace</p>
        </div>
      </div>

      <div className="header-right">
        <div className="header-status">
          <span className="status-dot"></span>
          AI workspace
        </div>

        <div className="header-avatar">
          <Sparkles size={19} />
        </div>
      </div>

    </header>
  );
}

export default Header;
