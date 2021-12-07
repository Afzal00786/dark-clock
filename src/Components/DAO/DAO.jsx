import React from "react";
import { Container, ProgressBar } from "react-bootstrap";
import "./DAO.css";
import Navbars from "../Navbar/Navbars";
import arrow from "../../Assets/back_arrow.png";
import QueMark from "../../Assets/Path 20697.png";

const DAO = () => {
  return (
    <>
      <Navbars />
      <Container>
        <div className="dao-section">
          <div className="nav-row">
            <div>
              <img src={arrow}></img>
            </div>
            <div>
              <h4 className="text">FAQ</h4>
            </div>
          </div>
          <div className="dao_div">
            <div className="row-icon">
              <div className="que_icon">
                <img src={QueMark} alt="iconque"></img>
              </div>
              <div className="text_roco">
                <h4 className="text">
                  Would you like to invest Roco Seed sale?{" "}
                </h4>
                <p className="para_text">Total Member: 1000 </p>
              </div>
            </div>
            <div className="bar_count">
              <div>
                <p className="text">yes</p>
              </div>
              <div>
                <p className="text">No</p>
              </div>
            </div>
            <ProgressBar className="pro_bar" now={60} label={`60%`} />
            <div className="bottom_button">
            <button type="button" className="yes_button">yes</button>
            </div>
          </div>
        </div>
        
        
      </Container>
    </>
  );
};

export default DAO;
