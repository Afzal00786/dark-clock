import React, { useState } from 'react'
import Navbars from "../Navbar/Navbars"
import Footer from "../Footer/Footer"
import arrow_b from "../../Assets/arrow_b.png"
import cross from "../../Assets/cross.png"
import lamp from "../../Assets/lamp.png"
import { Modal, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

import "./Stake.css"



function Stake1() {
    const history = useNavigate()
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow1, setModalShow1] = React.useState(false);

    return (
        <>
            <Navbars />
            <div>
                <div className="stake_mainDiv">

                    {/* arrow div */}

                    <div className="stake_divOne">
                        <div className="stake_divTwo">
                            <div className="stake_divArrow" onClick={() => {
                                history(-1)
                            }}>
                                <img src={arrow_b} />
                            </div>
                            <div className="stake_divStake">
                                <h4 className="stake_textStake">Stake</h4>
                            </div>
                        </div>
                    </div>


                    {/* cards */}

                    <div className="cards_mainDiv">

                        <div className="cardOne_stake">

                            <div className="top_divCard">
                                <div className="top_divLamp">
                                    <img src={lamp} />
                                </div>
                                <div>
                                    <h3 className="lamp_text">ROCO FINANCE</h3>
                                    <p className="lamp_p">Stake Pool</p>
                                </div>
                            </div>

                            <div className="stake_priceDiv">
                                <div>
                                    <h4 className="aprStake">APR</h4>
                                    <h4 className="aprStake">Earn</h4>
                                    <h4 className="aprStake">Total Liquidity</h4>
                                </div>
                                <div>
                                    <h4 className="aprPrice">50.66%</h4>
                                    <h4 className="aprPrice">ROCO</h4>
                                    <h4 className="aprPrice">$679.370</h4>
                                </div>

                            </div>

                            <div className="Roco_mainDiv">
                                <div className="roco_marginDiv">
                                    <h4 className="roco_text"><span className="orange_roco">ROCO</span> EARNED</h4>
                                    <h4 className="roco_text">0</h4>
                                </div>
                                <div className="claim_Div">
                                    <button className="claim_button">Claim</button>
                                </div>
                            </div>


                            <div className="contract_mainDiv">
                                <div className="unstake_div">
                                    <button className="unstakes_button margin_stakeTop" onClick={() => setModalShow(true)}>Stake</button>
                                    <button className="unstakes_button" onClick={() => setModalShow1(true)}>Unstake</button>
                                </div>

                                <p className="view_contract">View Contract</p>

                            </div>
                        </div>


                        <div className="cardOne_stake mobile_view_stack">

                            <div className="top_divCard">
                                <div className="top_divLamp">
                                    <img src={lamp} />
                                </div>
                                <div>
                                    <h3 className="lamp_text">ROCO FINANCE</h3>
                                    <p className="lamp_p">Stake Pool</p>
                                </div>
                            </div>

                            <div className="stake_priceDiv">
                                <div>
                                    <h4 className="aprStake">APR</h4>
                                    <h4 className="aprStake">Earn</h4>
                                    <h4 className="aprStake">Total Liquidity</h4>
                                </div>
                                <div>
                                    <h4 className="aprPrice">50.66%</h4>
                                    <h4 className="aprPrice">ROCO</h4>
                                    <h4 className="aprPrice">$679.370</h4>
                                </div>

                            </div>

                            <div className="Roco_mainDiv">
                                <div className="roco_marginDiv">
                                    <h4 className="roco_text"><span className="orange_roco">ROCO</span> EARNED</h4>
                                    <h4 className="roco_text">0</h4>
                                </div>
                                <div className="claim_Div">
                                    <button className="claim_button">Claim</button>
                                </div>
                            </div>


                            <div className="contract_mainDiv">
                                <div className="unstake_div">
                                    <button className="unstakes_button margin_stakeTop" onClick={() => setModalShow(true)}>Stake</button>
                                    <button className="unstakes_button" onClick={() => setModalShow1(true)}>Unstake</button>
                                </div>

                                <p className="view_contract">View Contract</p>

                            </div>
                        </div>


                    </div>
                </div>



                <div className="modalBox_stake">
                    <MyVerticallyCenteredModal

                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    <MyVerticallyCenteredModal1

                        show={modalShow1}
                        onHide={() => setModalShow1(false)}
                    />
                </div>
                <div>
                    <Footer />
                </div>

            </div>

        </>
    )
}

export default Stake1


function MyVerticallyCenteredModal(props) {


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >
            <div className="crossDiv">
                <div className="cross_divInner" onClick={props.onHide}>
                    <img src={cross} />
                </div>
            </div>
            <Modal.Header className="modal_header_stake">

                <Modal.Title id="contained-modal-title-vcenter">
                    <div className="top_divModal">
                        <div className="top_divLamp" >
                            <img src={lamp} />
                        </div>
                        <div>
                            <h3 className="lamp_text">ROCO FINANCE</h3>
                            <p className="lamp_p">Stake Pool</p>
                        </div>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="stake_modalBody">
                <div className="stake_priceDivModal">
                    <div>
                        <h4 className="aprStake">Your Liquidity</h4>
                    </div>
                    <div>
                        <h4 className="aprPrice">$679.370</h4>
                    </div>

                </div>

                <div className="Roco_mainDivModal">
                    <div className="roco_marginDiv">
                        <h4 className="roco_text"><span className="orange_roco">STAKE</span> ROCO</h4>
                        <h4 className="roco_text">0</h4>
                    </div>
                    <div className="claim_Div">
                        <button className="claim_button">Max</button>
                    </div>
                </div>

                <div className="contract_mainDivModal">
                    <button className="unstakes_button">Stake</button>

                </div>

            </Modal.Body>

        </Modal >
    );
}

function MyVerticallyCenteredModal1(props) {


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >
            <div className="crossDiv">
                <div className="cross_divInner" onClick={props.onHide}>
                    <img src={cross} />
                </div>
            </div>
            <Modal.Header className="modal_header_stake">

                <Modal.Title id="contained-modal-title-vcenter">
                    <div className="top_divModal">
                        <div className="top_divLamp" >
                            <img src={lamp} />
                        </div>
                        <div>
                            <h3 className="lamp_text">ROCO FINANCE</h3>
                            <p className="lamp_p">Stake Pool</p>
                        </div>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="stake_modalBody">
                <div className="stake_priceDivModal">
                    <div>
                        <h4 className="aprStake">Your Liquidity</h4>
                    </div>
                    <div>
                        <h4 className="aprPrice">$679.370</h4>
                    </div>

                </div>

                <div className="Roco_mainDivModal">
                    <div className="roco_marginDiv">
                        <h4 className="roco_text"><span className="orange_roco">UNSTAKE</span> ROCO</h4>
                        <h4 className="roco_text">0</h4>
                    </div>
                    <div className="claim_Div">
                        <button className="claim_button">Max</button>
                    </div>
                </div>

                <div className="contract_mainDivModal">
                    <button className="unstakes_button">Unstake</button>

                </div>

            </Modal.Body>

        </Modal >
    );
}