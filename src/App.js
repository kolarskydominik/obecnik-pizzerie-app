import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar, Footer, CopyrightFooter } from "./components";
import ScrollToTop from "./components/ScrollToTop";

import GlobalStyle from "./globalStyles";

import Restaurace from "./pages/Restaurace/Restaurace"
import Pizza from "./pages/Pizza/Pizza";
import Menu from "./pages/Menu/Menu";
import Galerie from "./pages/Galerie/Galerie";
import Kontakt from "./pages/Kontakt/Kontakt";



function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Restaurace />} />
        <Route path="/restaurace" element={<Restaurace />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
      <Footer />
      <CopyrightFooter/>
    </Router>
  );
}

export default App;
