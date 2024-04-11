import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "././pages/Bubble2";
import Contact from "././components/Layouts/Footer";
import OurMenu from "./pages/Bubble3";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<OurMenu />} />
      </Routes>
      
    </Router>
  );
}

export default App;


