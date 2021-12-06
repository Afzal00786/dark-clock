import React from 'react'
import { Navbar, Nav } from "react-bootstrap"
import "./Navbars.css"
function Navbars() {
    return (
        <>
            <div>
                <div className="container">
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>

                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">More deets</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    Dank memes
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                    </Navbar>
                </div>
            </div>

        </>
    )
}

export default Navbars
