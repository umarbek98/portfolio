import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import App from "./App.jsx";

// Wait for DOM to be ready and ensure root element exists
function initializeApp() {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    createRoot(rootElement).render(<App />);
  } else {
    console.error("Root element not found");
  }
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}
