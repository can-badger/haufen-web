// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import CenteredImage from "./CenteredImage";
import MenuPage from "./MenuPage";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CenteredImage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
