import React, { useState } from 'react'
import "../Investment/investment.css"
import cardImg from "../../Images/fire.png"
import Send from "../../Images/send.png"
import Arrow from "../../Images/back_arrow.png"

const Investment = () => {
    const [color, setColor] = useState("1")
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
    return (
        < >


            <div className="container_wrapper">
                <div className="d-flex justify-content-between">
                    <div className="back_arrow d-flex justify-content-center align-items-center">   <img src={Arrow} /></div>
                    <div className="membership">Membership</div>
                </div>
                <div className="investment_card_wrapper">
                    {
                        investmentCardData.map((cardData) => {
                            return (
                                <div className={color === cardData.id ? "d-flex justify-content-center align-items-center investment_top_card shadow bg_change" : "d-flex justify-content-center align-items-center investment_top_card shadow"} onClick={() =>
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
                                    <div className="investment_sub_card d-flex align-items-center shadow">
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

        </>




    )
}

export default Investment
