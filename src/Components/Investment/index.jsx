import React, { useState, useEffect } from 'react'
import "../Investment/investment.css"
import cardImg from "../../Images/fire.png"
import Send from "../../Images/send.png"
import Arrow from "../../Images/back_arrow.png"
import { useNavigate } from 'react-router'
import Navbars from '../Navbar/Navbars'
import Footer from '../Footer/Footer'

const Investment = () => {


    const [color, setColor] = useState("1")
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

    ]
    const investmentCardData = [
        {
            id: 1,
            price: "$ 3,120,49",
            cardtext: "Total İnvestments"
        },
        {
            id: 2,
            price: "$ 3,120,49",
            cardtext: "Total Reward Distribution"
        },
        {
            id: 3,
            price: "12",
            cardtext: "Incubated  Projects"
        },
    ]


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])
    return (
        < >

            <Navbars />
            <div className="container_wrapper">
                <div className="content_wrapper">
                    <div className="d-flex justify-content-between arrow_section5">
                        <div className="back_arrow d-flex justify-content-center align-items-center" onClick={() => {
                            history(-1)
                        }} >   <img src={Arrow} /></div>
                        <div className="membership">Investments</div>
                    </div>
                    <div className="investment_card_wrapper">
                        {
                            investmentCardData.map((cardData) => {
                                return (
                                    <div className={color === cardData.id ? "d-flex justify-content-center align-items-center investment_top_card bg_change" : "d-flex justify-content-center align-items-center investment_top_card"} onClick={() =>
                                        setColor(cardData.id)
                                    }>
                                        <div>
                                            <div className="i_card_price text-center">
                                                {
                                                    cardData.price
                                                }
                                            </div>
                                            <div className={color === cardData.id ? "i_card_text text_bg" : "i_card_text"}>
                                                {
                                                    cardData.cardtext
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className="investment_sub_card_wrapper">
                        {
                            subcard.map((subcard) => {
                                return (
                                    <>
                                        <div className="investment_sub_card d-flex align-items-center">
                                            <div className="ml-3 investment_card_img d-flex justify-content-center align-items-center">
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

export default Investment
