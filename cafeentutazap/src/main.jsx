import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import setVhVariable from "./utils/setVh";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// initialize --vh CSS variable for mobile viewport sizing
setVhVariable();
