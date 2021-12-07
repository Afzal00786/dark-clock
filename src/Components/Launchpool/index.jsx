import React from 'react'
import Fire from "../../Images/fire.png"
import "../Launchpool/launchpool.css"
import imgSec from "../../Images/imgSec.png"
import Arrow from "../../Images/back_arrow.png"


const Launchpool = () => {
    return (
        <>
            <div className="container_wrapper">
                <div className="d-flex justify-content-between">
                    <div className="back_arrow d-flex justify-content-center align-items-center">   <img src={Arrow} /></div>
                    <div className="membership">Launchpool</div>
                </div>
                <div className="launchpool_card_wrapper">
                    <div className="lauchpool_card">
                        <div className="d-flex">
                            <div className="lauchpool_card_img d-flex justify-content-center align-items-center ml-3">
                                <img src={Fire} />
                            </div>
                            <div className="ml-3">
                                <div className="launchpool_card_heading">Huobi Capital</div>
                                <div className="launchpool_card_text">Launchpool</div>
                            </div>
                        </div>
                        <div className="launchpool_card_text_wrapper">
                            <div className="d-flex justify-content-between">
                                <div className="name">Name</div>
                                <div className="value">50.66%</div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="name">Allocation/Member</div>
                                <div className="value">150 HBT</div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="name">Participating fee:</div>
                                <div className="value">10 Avax
                                    <div><span className="sub_fee">≈$680.080</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="lauchpool_btn_wrapper">
                            <div className="d-flex justify-content-center">
                                <div className="launchpool_btn_text"><span className="click">Click here</span> to see more details about Roco Token</div>

                            </div>
                            <div className="d-flex justify-content-center mt-3">
                                <button className="btn lounchpool_card_btn">Join Seed Sale</button>
                            </div>
                        </div>

                    </div>
                    <div className="luanchpool_img_section d-flex justify-content-center align-items-center">

                        <div>   <img src={imgSec} /></div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Launchpool
