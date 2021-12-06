import logo from './logo.svg';
import React from "react"
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Components/Home/home';
import Navbars from './Components/Navbar/Navbars';
import DAO from './Components/DAO/DAO';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbars />} />
        <Route path="/dao" element={<DAO />} />
      </Routes>

    </>
  );
}

export default App;
