import logo from './logo.svg';
import React from "react"
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Components/Home/home';
import Navbars from './Components/Navbar/Navbars';
import Footer from './Components/Footer/Footer';
import Member from './Components/MemberShip/Member';
import Stake from './Components/Stake/Stake';
import Stake1 from './Components/Stake/Stake1';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbars />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/member" element={<Member />} />
        <Route path="/stake" element={<Stake />} />
        <Route path="/stake1" element={<Stake1 />} />
      </Routes>

    </>
  );
}

export default App;
