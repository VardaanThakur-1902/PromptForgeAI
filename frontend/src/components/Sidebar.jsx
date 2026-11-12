
import {
  LayoutDashboard,
  Plus,
  Clock3,
  Settings,
  Sparkles,
  PanelLeftClose
} from "lucide-react";

function Sidebar({ activePage, setActivePage, mobileOpen, setMobileOpen }) {

  const navigation = [
    {
      name: "Dashboard",
      id: "dashboard",
      icon: LayoutDashboard
    },
    {
      name: "New Prompt",
      id: "generator",
      icon: Plus
    },
    {
      name: "Prompt History",
      id: "history",
      icon: Clock3
    },
    {
      name: "Settings",
      id: "settings",
      icon: Settings
    }
  ];

  return (
    <>
      {mobileOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside className={`sidebar ${mobileOpen ? "sidebar-open" : ""}`}>

        <div className="sidebar-logo">
          <div className="logo-icon">
            <Sparkles size={23} />
          </div>

          <div>
            <h2>PromptForge</h2>
            <span>AI PROMPT STUDIO</span>
          </div>

          <button
            className="mobile-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation"
          >
            <PanelLeftClose size={19} />
          </button>
        </div>

        <button
          className="sidebar-new-button"
          onClick={() => {
            setActivePage("generator");
            setMobileOpen(false);
          }}
        >
          <Plus size={18} />
          <span>New Prompt</span>
        </button>

        <div className="sidebar-section-label">
          WORKSPACE
        </div>

        <nav className="sidebar-navigation">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                className={`nav-item ${
                  activePage === item.id ? "nav-item-active" : ""
                }`}
                onClick={() => {
                  setActivePage(item.id);
                  setMobileOpen(false);
                }}
              >
                <Icon size={19} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-plan">
            <div className="plan-icon">
              <Sparkles size={17} />
            </div>

            <div>
              <strong>PromptForge AI</strong>
              <p>Your ideas, engineered.</p>
            </div>
          </div>

          <div className="sidebar-version">
            Version 0.1.0 · Development
          </div>
        </div>

      </aside>
    </>
  );
}

export default Sidebar;
