
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import Generator from "./pages/Generator";
import History from "./pages/History";
import Settings from "./pages/Settings";

import "./App.css";

function App() {

  const [activePage, setActivePage] = useState("dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);

  function renderPage() {

    switch (activePage) {

      case "dashboard":
        return (
          <Dashboard setActivePage={setActivePage} />
        );

      case "generator":
        return <Generator />;

      case "history":
        return (
          <History setActivePage={setActivePage} />
        );

      case "settings":
        return <Settings />;

      default:
        return (
          <Dashboard setActivePage={setActivePage} />
        );
    }
  }

  return (
    <div className="app-layout">

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <div className="main-area">

        <Header
          activePage={activePage}
          setMobileOpen={setMobileOpen}
        />

        <main className="main-content">
          {renderPage()}
        </main>

      </div>

    </div>
  );
}

export default App;
