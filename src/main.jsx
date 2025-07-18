import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import App from "./App.jsx";

// Ensure DOM is ready before mounting React
function mountApp() {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    createRoot(rootElement).render(<App />);
  }
}

// Wait for DOM to be ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountApp);
} else {
  mountApp();
}
