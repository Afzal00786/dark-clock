import React from 'react'
import Navbars from "../Navbar/Navbars"
import arrow_b from "../../Assets/arrow_b.png"
import lamp from "../../Assets/lamp.png"
import "./Stake.css"
function Stake() {
    return (
        <>
            <Navbars />
            <div className="stake_mainDiv">

                {/* arrow div */}

                <div className="stake_divOne">
                    <div className="stake_divTwo">
                        <div className="stake_divArrow">
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
                                <h4 className="roco_text"><span className="orange_roco">ROCOE</span> ARNED</h4>
                                <h4 className="roco_text">O</h4>
                            </div>
                            <div className="claim_Div">
                                <button className="claim_button">Claim</button>
                            </div>
                        </div>


                        <div className="contract_mainDiv">
                            <button className="stakes_button">Stake</button>


                            <p className="view_contract">View Contract</p>

                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Stake
