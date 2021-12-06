import React, { useState } from 'react'
import layer from "../../Assets/layer.png"
import twiter from "../../Assets/twiter.png"
import m from "../../Assets/m.png"
import git from "../../Assets/git.png"
import "./Footer.css"
function Footer() {
    const [active, setActive] = useState("1")
    return (
        <>
            <div className="Footer_mainDiv">

                <div></div>

                <div>
                    <h3 className="footer_text">All Right reserved Hoopoe Ventures</h3>
                </div>


                <div className="footer_buttonDiv">

                    <div className={`footer_iconDiv ${active == "1" && "activeBtnss"}`} onClick={() => setActive("1")}>
                        <img src={layer} />
                    </div>

                    <div className={`footer_iconDiv ${active == "2" && "activeBtnss"}`} onClick={() => setActive("2")}>
                        <img src={layer} />
                    </div>

                    <div className={`footer_iconDiv ${active == "3" && "activeBtnss"}`} onClick={() => setActive("3")}>
                        <img src={twiter} />
                    </div>

                    <div className={`footer_iconDiv ${active == "4" && "activeBtnss"}`} onClick={() => setActive("4")}>
                        <img src={m} />
                    </div>

                    <div className={`footer_iconDiv ${active == "5" && "activeBtnss"}`} onClick={() => setActive("5")}>
                        <img src={git} />
                    </div>


                </div>

            </div>
        </>
    )
}

export default Footer
