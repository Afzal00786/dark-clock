import React from "react";
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Components/Home/Home';
import Investment from './Components/Investment';
import Partner from './Components/Partner';
import Navbars from './Components/Navbar/Navbars';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/navbar" element={<Navbars />} />
      </Routes>

    </>
  );
}

export default App;
