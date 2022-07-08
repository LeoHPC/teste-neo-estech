// REACT
import React from "react";
import ReactDOM from "react-dom/client";

// COMPONENTS
import App from "./App";

// CSS
import "../styles/global.css";

// ANT-DESIGN
import "antd/dist/antd.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
