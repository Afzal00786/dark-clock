import React, { useEffect } from 'react'
import "../UserDashoard/userdashoard1.css"
import Fire from "../../Images/fire.png"
import Arrow from "../../Images/back_arrow.png"
import Navbars from '../Navbar/Navbars'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router'


const UserDashoard2 = () => {
    const history = useNavigate()
    const Userdashboard = [
        {
            id: 1,
            heading: "Huobi Capital",
            text: "Launchpool",
            subtext: "Next Claim in",
            spantext: "18D 20H 16M 22 S",
            img: Fire,
            disable: true
        },
        {
            id: 2,
            heading: "Huobi Capital",
            text: "Launchpool",
            subtext: "Next Claim in",
            spantext: "18D 20H 16M 22 S",
            img: Fire,
            disable: false

        },
        {
            id: 3,
            heading: "Huobi Capital",
            text: "Launchpool",
            subtext: "Next Claim in",
            spantext: "18D 20H 16M 22 S",
            img: Fire,
            disable: true

        },
    ]
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])
    return (
        <div>

            <Navbars />
            <div className="container_wrapper">
                <div className="content_wrapper">
                    <div className="d-flex justify-content-between arrow_section2">
                        <div className="back_arrow d-flex justify-content-center align-items-center" onClick={() => {
                            history(-1)
                        }}>   <img src={Arrow} /></div>
                        <div className="membership">User Dashboard2</div>
                    </div>

                    <div className="dashoard_card_wrapper">
                        {
                            Userdashboard.map((dashboarddata) => {
                                return (
                                    <>
                                        <div className="dashoard_card">
                                            <div className="d-flex">
                                                <div className="dashboard_card_img d-flex justify-content-center align-items-center">
                                                    <img src={dashboarddata.img} />
                                                </div>
                                                <div className="ml-3">
                                                    <div className="dashboard_card_heading">{dashboarddata.heading}</div>
                                                    <div className="dashboard_card_text">{dashboarddata.text}</div>
                                                </div>
                                            </div>
                                            <div className="dashboard_card_subtext">
                                                {
                                                    dashboarddata.subtext
                                                }  <span className="inner_text">{dashboarddata.spantext}</span>
                                            </div>
                                            <div className="dashboard_card_btn">
                                                <button disabled={dashboarddata.disable} className="dashboard-btn">Claim</button>
                                            </div>
                                        </div>


                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}
export default UserDashoard2
