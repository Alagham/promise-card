import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import LandingPage from "../src/Pages/MainPages/LandingPage";
import Dashboard from "./Pages/MainPages/Dashboard";
import CardCreation from "./Pages/MainPages/CardCreation";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-card" element={<CardCreation />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
