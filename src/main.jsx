import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//IMPORT ROUTER
import { BrowserRouter as Router } from "react-router-dom";

//IMPORT SASS
import "./styles/main.sass";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);
