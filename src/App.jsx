import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nabvar from './components/Nabvar'
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import OurProcess from './pages/OurProcess';

function App() {

  return (
    <BrowserRouter>
      <Nabvar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/price" element={<Pricing />} />
        <Route path="/ourProcess" element={<OurProcess />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
