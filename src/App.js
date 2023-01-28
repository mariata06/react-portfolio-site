import React from 'react';
//Global Style
import GlobalStyle from './components/GlobalStyle';
//import pages
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import Nav from './components/Nav';
//Router
//New Syntax
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<AboutUs />}>
        </Route>
        <Route path="/contact" element={<ContactUs />}>
        </Route>
        <Route path="/work" element={<OurWork />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
