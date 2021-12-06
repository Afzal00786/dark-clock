import React from 'react'
import { Navbar, Nav } from "react-bootstrap"
import "./Navbars.css"
import logo from "../../Assets/logo.png"
import seacrh from "../../Assets/seacrh.png"
function Navbars() {
    return (
        <>
            <div className="Navbar_main_Div">
                <div className="container-fluid Navbar_innerDiv">
                    <Navbar collapseOnSelect expand="lg" className="Navbar_padding">

                        <Navbar.Brand href="#home">
                            <img className="Navbar_logo" src={logo} />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <div className="Navbar_searchDivMain">
                                    <div className="Navbar_searchDiv">
                                        <img className="search_navbarImg" src={seacrh} />
                                        <input className="search_navbarInput" placeholder="Search" />

                                    </div>
                                </div>
                                <button className="Navbar_walletButton">Connect Wallet</button>

                            </Nav>

                        </Navbar.Collapse>

                    </Navbar>
                </div>
            </div>

        </>
    )
}

export default Navbars
