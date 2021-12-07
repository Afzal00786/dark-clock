import React, { useState } from 'react'
import "../Partner/partner.css"
import cardImg from "../../Images/fire.png"
import Send from "../../Images/send.png"
import Arrow from "../../Images/back_arrow.png"
import { useNavigate } from 'react-router'
import Navbar from '../Navbar/Navbars'
import Footer from '../Footer/Footer'

const Partner = () => {
    const history = useNavigate()


    const subcard = [
        {
            id: 1,
            heading: "Huobi Capital",
            text: "Learn More",
            img: cardImg
        },
        {
            id: 2,
            heading: "Avalaunch",
            text: "Learn More",
            img: Send
        },
        {
            id: 3,
            heading: "Avalaunch",
            text: "Learn More",
            img: Send
        },
        {
            id: 4,
            heading: "Huobi Capital",
            text: "Learn More",
            img: cardImg
        },
        {
            id: 5,
            heading: "Avalaunch",
            text: "Learn More",
            img: Send
        },
        {
            id: 6,
            heading: "Avalaunch",
            text: "Learn More",
            img: Send
        },
        {
            id: 7,
            heading: "Huobi Capital",
            text: "Learn More",
            img: cardImg
        },
        {
            id: 8,
            heading: "Avalaunch",
            text: "Learn More",
            img: Send
        },
        {
            id: 9,
            heading: "Avalaunch",
            text: "Learn More",
            img: Send
        },

    ]

    return (
        < >

            <Navbar />
            <div className="container_wrapper">
                <div className="content_wrapper">
                    <div className="d-flex justify-content-between">
                        <div className="back_arrow d-flex justify-content-center align-items-center" onClick={() => {
                            history(-1)
                        }}>   <img src={Arrow} /></div>
                        <div className="membership">Partners</div>
                    </div>

                    <div className="partner_sub_card_wrapper">
                        {
                            subcard.map((subcard) => {
                                return (
                                    <>
                                        <div className="investment_sub_card d-flex align-items-center shadow">
                                            <div className="ml-3 card_img shadow-lg d-flex justify-content-center align-items-center">
                                                <img src={subcard.img} />
                                            </div>
                                            <div>
                                                <div className="i_sub_card_text ml-3">{
                                                    subcard.heading}</div>
                                                <div className="i_sub_card_subtext ml-3">{
                                                    subcard.text
                                                }</div>
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

        </>




    )
}

export default Partner
