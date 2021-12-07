import React, { useState, useHistory } from 'react'
import Footer from '../Footer/Footer'
import Navbars from '../Navbar/Navbars'
import arrow_b from "../../Assets/arrow_b.png"
import checkred from "../../Assets/checkred.png"
import checkgrey from "../../Assets/checkgrey.png"
import { useNavigate } from "react-router-dom"

import "./Member.css"
function Member() {
    const history = useNavigate()
    const [select, setSelect] = useState(true)
    const [select1, setSelect1] = useState(true)
    const [select2, setSelect2] = useState(true)
    return (

        <>
            <Navbars />
            <div className="memberMain">
                <div className="member_mainDiv">
                    <div className="name_memberShipDiv">
                        <div className="arrow_div" onClick={() => {
                            history(-1)
                        }}>
                            <img src={arrow_b} />
                        </div>
                        <div className="name_div">
                            <h4 className="member_text">Membership</h4>
                        </div>
                    </div>

                    <div className="boxes_mainDiv">
                        <div className="first_boxMember">
                            <div className="member_innerMargin">
                                <button className="checkBox_orangeDiv" onClick={() => { setSelect(!select) }}>

                                    <img src={select ? checkred : checkgrey} />
                                </button>
                                <div>
                                    <h3 className="first_boxText">For Pariticipating Hoopoe Family please hold at least 1 Hoopoe Token.</h3>
                                    <p className="first_boxP">Buy Hoopoe Token</p>
                                </div>
                            </div>


                        </div>

                        <div className="first_boxMember">
                            <div className="member_innerMargin">
                                <button className="checkBox_orangeDiv" onClick={() => { setSelect1(!select1) }}>

                                    <img src={select1 ? checkred : checkgrey} />
                                </button>
                                <div>
                                    <h3 className="first_boxText">Once you have 1 Hoop token verify your wallet by signing the contract.</h3>
                                    <p className="first_boxP">Verify your wallet</p>
                                </div>


                            </div>
                        </div>

                        <div className="first_boxMember">
                            <div className="member_innerMargin">
                                <button className="checkBox_orangeDiv" onClick={() => { setSelect2(!select2) }}>

                                    <img src={select2 ? checkgrey : checkred} />
                                </button>
                                <div>
                                    <h3 className="first_boxText">After verifying the contracts you will be directed to our private Telegram group.</h3>
                                    <p className="first_boxP">Send direct message to our Admins</p>
                                </div>
                            </div>


                        </div>

                        <div className="apply_buttonDiv">
                            <button className="apply_button">Apply</button>
                        </div>
                    </div>
                </div>
            </div>
            <div> <Footer /></div>
        </>
    )
}

export default Member
