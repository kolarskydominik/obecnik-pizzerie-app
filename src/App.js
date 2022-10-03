import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import GlobalStyle from "./globalStyles";

import Uvod from "./pages/Uvod/Uvod"
import Rozvoz from "./pages/Rozvoz/Rozvoz";
import Menu from "./pages/Menu/Menu";
import Galerie from "./pages/Galerie/Galerie";
import Kontakt from "./pages/Kontakt/Kontakt";



function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      
      <Routes>
        <Route path="/" exact element={<Uvod />} />
        <Route path="/uvod" element={<Uvod />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/rozvoz" element={<Rozvoz />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </Router>
  );
}

export default App;
