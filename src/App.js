import logo from './logo.svg';
import React from "react"
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Components/Home/home';
import Navbars from './Components/Navbar/Navbars';
import Footer from './Components/Footer/Footer';
import Member from './Components/MemberShip/Member';
import Stake from './Components/Stake/Stake';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbars />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/member" element={<Member />} />
        <Route path="/stake" element={<Stake />} />
      </Routes>

    </>
  );
}

export default App;
