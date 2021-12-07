import React from 'react'
import Footer from '../Footer/Footer'
import Navbars from '../Navbar/Navbars'
import arrow_b from "../../Assets/arrow_b.png"

import "./Member.css"
function Member() {
    return (
        <>
            <Navbars />
            <div className="memberMain">
                <div className="member_mainDiv">
                    <div className="name_memberShipDiv">
                        <div className="arrow_div">
                            <img src={arrow_b} />
                        </div>
                        <div className="name_div">
                            <h4 className="member_text">Membership</h4>
                        </div>
                    </div>

                    <div>
                        <div className="first_boxMember">
                            <div className="checkBox_orangeDiv">
                                <input className="checkBox_orange" type="checkbox" id="defaultChecked" />
                            </div>
                            <div>
                                <h3 className="first_boxText">For Pariticipating Hoopoe Family please hold at least 1 Hoopoe Token.</h3>
                                <p className="first_boxP">Buy Hoopoe Token</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            {/* <div> <Footer /></div> */}
        </>
    )
}

export default Member
