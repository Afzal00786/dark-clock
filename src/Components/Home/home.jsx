import React, { useState } from 'react'
import Carousel from "../../Images/carousel1.png"
import "./home.css"
import MemberShipg from "../../Images/member.png"
import Seed from "../../Images/seed.png"
import Stake from "../../Images/stake.png"
import Vote from "../../Images/vote.png"
import Invest from "../../Images/invest.png"
import Partner from "../../Images/partners.png"
import Dashbord from "../../Images/dashboard.png"
import FAQ from "../../Images/faq.png"
import { Link } from "react-router-dom"
import Navbars from '../Navbar/Navbars'
import Footer from '../Footer/Footer'

const Home = () => {
    const [color, setColor] = useState("1");

    const homeCard = [

        {
            id: 1,
            text: "Membership",
            subText: "Be part of Hoopoe family",
            img: MemberShipg,
            route: "/member"
        },
        {
            id: 2,
            text: "Launchpool",
            subText: "Invest promising projects",
            img: Seed,
            route: "/launchpool"

        },
        {
            id: 3,
            text: "Stake",
            subText: "Earn Passive income",
            img: Stake,
            route: "/stake"

        },
        {
            id: 4,
            text: "DAO",
            subText: "Vote for future",
            img: Vote,
            route: "membership"

        },
        {
            id: "5",
            text: "Investments",
            subText: "View our investments",
            img: Invest,
            route: "/investment"

        },
        {
            id: "6",
            text: "Partners",
            subText: "View our Ecosystem",
            img: Partner,
            route: "/partner"

        },
        {
            id: "7",
            text: "Dashboard",
            subText: "Follow your investments",
            img: Dashbord, route: "/userdashoard"

        },
        {
            id: "8",
            text: "FAQ",
            subText: "Fraequently asked questions",
            img: FAQ,
            route: "membership"

        },

    ]



    return (
        <>
            <Navbars />
            <div style={{ backgroundColor: "#26282b" }}>
                <div className="container_wrapper">
                    {/* <=======Banner Carousel==========> */}
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src={Carousel} alt="First slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src={Carousel} alt="Second slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src={Carousel} alt="Third slide" />
                            </div>
                        </div>
                        {/* <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a> */}
                    </div>
                    <div className="home_page_card">
                        {
                            homeCard.map((cardData) => {
                                return (
                                    <>
                                        <Link className="link_home" to={cardData.route}>
                                            <div className={color === cardData.id ? "d-flex justify-content-center align-items-center home_tab_wrapper bg_chage" : "d-flex justify-content-center align-items-center home_tab_wrapper "} onClick={() => {
                                                setColor(cardData.id)
                                            }}>
                                                <div><img src={cardData.img} className="home_card_img" /></div>
                                                <div className="ml-4" style={{ background: "transparent" }}><div className="card_text">{cardData.text}</div>
                                                    <div className="card_subtext">{cardData.subText}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </>
                                )
                            })
                        }

                    </div>
                    {/* <div className="row main-row">
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex home_tab_wrapper shadow">

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex home_tab_wrapper shadow">

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex home_tab_wrapper shadow">

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex home_tab_wrapper shadow">

                        </div>
                    </div>
                </div> */}

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home
