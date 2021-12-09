import React, { useState, useEffect } from "react";
import { Container, Accordion } from "react-bootstrap";
import "./faq.css";
import Navbars from "../Navbar/Navbars";
import arrow from "../../Assets/back_arrow.png";
import QueMark from "../../Assets/Path 20697.png";
import layerArrow from "../../Assets/Layer13.png";
import { useNavigate } from "react-router-dom"
import Footer from '../Footer/Footer'
const FAQ = () => {
  const history = useNavigate()
  const [imgId, setImgId] = useState(null);

  const rotate = (id) => {
    setImgId(imgId == id ? null : id);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])

  return (
    <>
      <Navbars />
      <Container className="dao_mainContainer">
        <div className="faq-section">
          <div className="nav-row">
            <div className="faq_bgImg" onClick={() => {
              history(-1)
            }}>
              <img src={arrow}></img>
            </div>
            <div>
              <h4 className="text1">FAQ</h4>
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
                          Please keep in mind that some issues cannot be addressed without a client-side p
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
                Please keep in mind that some issues cannot be addressed without a client-side p
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
                          Please keep in mind that some issues cannot be addressed without a client-side p
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
                Please keep in mind that some issues cannot be addressed without a client-side p
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default FAQ;
