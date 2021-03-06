import React, { useEffect } from 'react'
import Navbars from "../Navbar/Navbars"
import Footer from "../Footer/Footer"
import arrow_b from "../../Assets/arrow_b.png"
import lamp from "../../Assets/lamp.png"
import { Link } from "react-router-dom"
import "./Stake.css"
import { useNavigate } from 'react-router'
function Stake() {
    const history = useNavigate()
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])
    return (
        <>
            <Navbars />
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
                            <Link className="link_stake"
                                to="/stake1">
                                <button className="stakes_button">Stake</button>
                            </Link>


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
                            <Link className="link_stake" to="/stake1">
                                <button className="stakes_button">Stake</button>
                            </Link>


                            <p className="view_contract">View Contract</p>

                        </div>
                    </div>


                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default Stake
