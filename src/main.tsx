import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Leaderboard from "./components/Leaderboard";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<App />} />
        {/* Leaderboard page route */}
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
