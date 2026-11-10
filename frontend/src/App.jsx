
import { useEffect, useState } from "react";

const API_URL =
  import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";

function App() {
  const [backendStatus, setBackendStatus] = useState("Checking...");
  const [error, setError] = useState("");

  useEffect(() => {
    async function checkBackend() {
      try {
        const response = await fetch(`${API_URL}/api/health`);

        if (!response.ok) {
          throw new Error("Backend health check failed");
        }

        const data = await response.json();
        setBackendStatus(data.status);
      } catch (err) {
        setBackendStatus("Disconnected");
        setError(err.message);
      }
    }

    checkBackend();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 px-8 py-5">
        <h1 className="text-2xl font-bold text-violet-400">
          PromptForge AI
        </h1>
        <p className="text-sm text-slate-400">
          Your universal AI prompt engineering assistant
        </p>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-20">
        <div className="text-center">
          <p className="mb-4 text-sm font-semibold text-violet-400">
            AI PROMPT GENERATOR
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Turn your ideas into
            <span className="block text-violet-400">
              powerful AI prompts.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Describe your project or task. PromptForge AI will
            help you create detailed instructions for ChatGPT,
            Claude and other AI platforms.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="mb-3 block font-medium">
            Describe what you want to build
          </label>

          <textarea
            disabled
            rows="5"
            placeholder="Example: I want to build an AI-powered attendance management system..."
            className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 p-4 text-white placeholder-slate-500 outline-none"
          />

          <div className="mt-5 flex items-center justify-between gap-4">
            <span className="text-sm text-slate-500">
              AI generation will be enabled in upcoming phases.
            </span>

            <button
              disabled
              className="rounded-xl bg-violet-600 px-5 py-3 font-semibold opacity-60"
            >
              Generate Prompt
            </button>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-5">
          <div className="flex items-center justify-between">
            <span className="font-medium">
              Backend Connection
            </span>

            <span className={
              backendStatus === "healthy"
                ? "text-green-400"
                : "text-yellow-400"
            }>
              {backendStatus}
            </span>
          </div>

          {error && (
            <p className="mt-2 text-sm text-red-400">
              {error}
            </p>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
