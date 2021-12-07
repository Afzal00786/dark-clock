import React, { useState } from 'react'
import { Navbar, Nav } from "react-bootstrap"
import "./Navbars.css"
import logo from "../../Assets/logo.png"
import seacrh from "../../Assets/seacrh.png"
import checkred from "../../Assets/checkred.png"

function Navbars() {
    const [toggle, setToggle] = useState(true)
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
                                <div>
                                    {toggle ? <button className="Navbar_walletButton" onClick={() => { setToggle(!toggle) }}>Connect Wallet</button> :
                                        <div className="number_div crs" onClick={() => { setToggle(!toggle) }}>
                                            <h5 className="number_text">0x05698531.......60014536b</h5>
                                            <div className="boxes_mainDiv">
                                                <div className="">
                                                    <div className="member_innerMarginNumber">
                                                        <button className="checkBox_orangeDiv">

                                                            <img src={checkred} />
                                                        </button>

                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    }

                                </div>

                            </Nav>

                        </Navbar.Collapse>

                    </Navbar>
                </div>
            </div>

        </>
    )
}

export default Navbars
