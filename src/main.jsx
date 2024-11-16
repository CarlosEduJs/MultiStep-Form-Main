import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

import { SummaryProvider } from "./context/SummaryContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SummaryProvider>
        <App />
      </SummaryProvider>
    </BrowserRouter>
  </StrictMode>
);
