import logo from './logo.svg';
import React from "react"
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Components/Home/home';
import Navbars from './Components/Navbar/Navbars';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbars />} />
      </Routes>

    </>
  );
}

export default App;
