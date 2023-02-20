import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import GlobalStyle from "./globalStyles";

// import Uvod  from "./pages/Uvod/Uvod";
import Rozvoz  from "./pages/Rozvoz/Rozvoz";
import { Fallback } from "./components";
// const Rozvoz = lazy(() => import("./pages/Rozvoz/Rozvoz"));
const Menu = lazy(() => import("./pages/Menu/Menu"));
const Uvod = lazy(() => import("./pages/Uvod/Uvod"))
// const Galerie = lazy(() => import("./pages/Galerie/Galerie"));
const Kontakt = lazy(() => import("./pages/Kontakt/Kontakt"));


const App = () =>  (
    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <ScrollToTop />
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/" exact element={<Rozvoz />} />
          <Route path="/uvod" element={<Uvod />} />
          <Route path="/jidelni-listek" element={<Menu />} />
          <Route path="/rozvoz" element={<Rozvoz />} />
          {/* <Route path="/galerie" element={<Galerie />} /> */}
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </Suspense>
    </Router>
  );

export default App;
