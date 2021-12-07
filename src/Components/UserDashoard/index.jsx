import React from 'react'
import "../UserDashoard/userdashoard1.css"
import Fire from "../../Images/fire.png"
import Arrow from "../../Images/back_arrow.png"

const UserDashoard1 = () => {
    const Userdashboard = [
        {
            id: 1,
            heading: "Huobi Capital",
            text: "Launchpool",
            subtext: "Next Claim in",
            spantext: "18D 20H 16M 22 S",
            img: Fire
        },
        {
            id: 1,
            heading: "Huobi Capital",
            text: "Launchpool",
            subtext: "Next Claim in",
            spantext: "18D 20H 16M 22 S",
            img: Fire
        },
        {
            id: 1,
            heading: "Huobi Capital",
            text: "Launchpool",
            subtext: "Next Claim in",
            spantext: "18D 20H 16M 22 S",
            img: Fire
        },
    ]
    return (
        <div>


            <div className="container_wrapper">
                <div className="d-flex justify-content-between">
                    <div className="back_arrow d-flex justify-content-center align-items-center">   <img src={Arrow} /></div>
                    <div className="membership">User Dashboard</div>
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
                                            <button className="btn dashboard-btn">Claim</button>
                                        </div>
                                    </div>


                                </>
                            )
                        })
                    }

                </div>
            </div>

        </div>
    )
}
export default UserDashoard1