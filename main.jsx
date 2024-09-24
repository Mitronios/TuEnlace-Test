import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/components/App";
import "bootstrap/dist/css/bootstrap.min.css";

const root = createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
