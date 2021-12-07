import React, { useState } from "react";
import { Container, Accordion } from "react-bootstrap";
import "./FAQ.css";
import Navbars from "../Navbar/Navbars";
import arrow from "../../Assets/back_arrow.png";
import QueMark from "../../Assets/Path 20697.png";
import layerArrow from "../../Assets/Layer13.png";

const FAQ = () => {
  const [imgId, setImgId] = useState(null);

  const rotate = (id) => {
    setImgId(imgId == id ? null : id);
  };

  return (
    <>
      <Navbars />
      <Container>
        <div className="faq-section">
          <div className="nav-row">
            <div>
              <img src={arrow}></img>
            </div>
            <div>
              <h4 className="text">FAQ</h4>
            </div>
          </div>
          <Accordion defaultActiveKey="0"  >
            <Accordion.Item eventKey="1" className="acc_section" onClick={() => rotate(1)}>
              <Accordion.Header className="acc_header">
                <div className="faq_div">
                  <div className="row-icon2">
                    <div className="que_icon2">
                      <div className="queimg">
                        <img src={QueMark} alt="iconque"></img>
                      </div>
                      <div className="text_client">
                        <h4 className="text">
                          Would you like to invest Roco Seed sale?{" "}
                        </h4>
                      </div>
                    </div>
                    <div className="layer_arrow">
                      <img
                        style={{
                          transform: imgId == 1 ? "rotate(180deg)" : null,
                        }}
                        src={layerArrow}
                        alt="arrow"
                      ></img>
                    </div>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" onClick={() => rotate(2)}>
              <Accordion.Header>
                <div className="faq_div">
                  <div className="row-icon2">
                    <div className="que_icon2">
                      <div className="queimg">
                        <img src={QueMark} alt="iconque"></img>
                      </div>
                      <div className="text_client">
                        <h4 className="text">
                          Would you like to invest Roco Seed sale?{" "}
                        </h4>
                      </div>
                    </div>
                    <div className="layer_arrow">
                      <img
                      style={{
                        transform: imgId == 2 ? "rotate(180deg)" : null,
                      }}
                        className="arrowimg"
                        src={layerArrow}
                        alt="arrow"
                      ></img>
                    </div>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
    </>
  );
};

export default FAQ;
