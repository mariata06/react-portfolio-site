import React from 'react';
//Global Style
import GlobalStyle from './components/GlobalStyle';
//import pages
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import Nav from './components/Nav';
import MovieDetail from './pages/MovieDetail';
//Router
//New Syntax
import { Routes, Route, useLocation } from "react-router-dom";
//Animation
//allows components to animate out when they're removed from the React tree
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<AboutUs />}>
          </Route>
          <Route path="/contact" element={<ContactUs />}>
          </Route>
          <Route path="/work" element={<OurWork />}>
          </Route>
          <Route path="/work/:id" element={<MovieDetail />}>
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
