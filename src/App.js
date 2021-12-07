import React from "react";
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Components/Home/home';
import Investment from './Components/Investment';
import Partner from './Components/Partner';
import Navbars from './Components/Navbar/Navbars';
import Footer from './Components/Footer/Footer';
import Member from './Components/MemberShip/Member';
import Stake from './Components/Stake/Stake';
import Stake1 from './Components/Stake/Stake1';
import UserDashoard1 from "./Components/UserDashoard";
import UserDashoard2 from "./Components/UserDashoard2";
import Launchpool from "./Components/Launchpool";
// import FAQ from "../src/Components/FAQ"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userdashoard" element={<UserDashoard1 />} />
        <Route path="/userdashoard2" element={<UserDashoard2 />} />
        <Route path="/launchpool" element={<Launchpool />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/navbar" element={<Navbars />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/member" element={<Member />} />
        <Route path="/stake" element={<Stake />} />
        <Route path="/stake1" element={<Stake1 />} />
        {/* <Route path="/faq" element={<FAQ />} /> */}
      </Routes>

    </>
  );
}

export default App;
