import React, { useState, useEffect } from "react"
import "./landing_page.css"
import { BsArrowDown } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import Component1 from "../components/component1/component1";
import Component2 from "../components/component2/component2";
import Component3 from "../components/component3/component3";
import Africa from './images/Image (A).png'
import Image1 from './images/Shape.svg'
import Image2 from './images/Shape (1).svg'
import Image3 from './images/Shape (2).svg'
import Image4 from './images/Shape (3).svg'
import Image5 from './images/Shape (4).svg'
import Image6 from './images/Shape (5).svg'
import Image7 from './images/Shape (6).svg'
import { useNavigate } from "react-router-dom";
const Landing_page = () => {
    const navigate = useNavigate()

    const obj = {
        h4: 'Across Africa and Beyond',
        Image: Africa,
        h2: 'Supporting businesses in 115+ countries, Primeswitch makes it easier to do business in Africa',
        p: 'Primeswitch empowers companies from 115+ countries to accelerate their operations in frontier markets through better foreign exchange, treasury services, payments, and last-mile settlement.',
        cta1: 'Learn More About Us',
    }

    // useEffect(() => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     })
    // }, [])

    const scroll = () => {
        window.scrollTo({
            top: 560,
            behavior: 'smooth'
        })
    }

    return (
        <div className="landing_page">
            <div className="landing_page_top">
                <div className="landing_page_wrap">
                    <span className="landing_page_nx1c_left">
                        <h1>Take Control Of All Your Payment, FX & Treasury Needs</h1>
                        <p>Powering the FX behind Africa’s trillion-dollar growth.</p>
                        <div className="landing_page_nx1c_cta">
                            <button onClick={() => navigate('/contact')} className="landing_page_nx1c_cta_button">Contact Us</button>
                            <span onClick={() => scroll()} className="landing_page_nx1c_cta_action">
                                <p>View Details</p>
                                <BsArrowDown />
                            </span>
                        </div>
                    </span>

                    <span className="landing_page_nx1c_right">
                        <div className="Img1 landing_page_nx1c_rightutc1"></div>
                        <div className="Img1 landing_page_nx1c_rightutc2"></div>
                        <div className="Img1 landing_page_nx1c_rightutc3"></div>
                        <div className="Img1 landing_page_nx1c_rightutc4"></div>
                    </span>
                </div>
            </div>


            <div className="what_we_do">
                <h2>What We Do</h2>
                <div className="what_we_do_wrap">
                    <div className="what_we_do_info">
                        <div className="what_we_do_info_icon" ><img src={Image1} /></div>
                        <div className="what_we_do_info_text">
                            <h4>Corporate Treasury</h4>
                            <p>We help businesses transfer funds in a quick and effortless manner.</p>
                        </div>
                        <div onClick={() => navigate('/about')} className="what_we_do_info_cta">
                            <p>Learn More</p>
                            <BsArrowRight />
                        </div>
                    </div>
                    <div className="what_we_do_info">
                        <div className="what_we_do_info_icon" ><img src={Image2} /></div>
                        <div className="what_we_do_info_text">
                            <h4>Foreign Exchange</h4>
                            <p>Our platform helps you make payments and manage assets across 115+ markets</p>
                        </div>
                        <div onClick={() => navigate('/about')} className="what_we_do_info_cta">
                            <p>Learn More</p>
                            <BsArrowRight />
                        </div>
                    </div>
                    <div className="what_we_do_info">
                        <div className="what_we_do_info_icon" ><img src={Image3} /></div>
                        <div className="what_we_do_info_text">
                            <h4>Payments & Settlements</h4>
                            <p>Our services can be accessed through API or web, providing you with flexibility.</p>
                        </div>
                        <div onClick={() => navigate('/about')} className="what_we_do_info_cta">
                            <p>Learn More</p>
                            <BsArrowRight />
                        </div>
                    </div>
                </div>
            </div>
            <Component1 {...obj} />
            <Component2 color={true} />

            <div className="benefits">
                <div className="benefits_wrap">
                    <div className="benefits_left">
                        <span>Are You Passionate About Empowering African Businesses And Bringing Global Business To The Continent?</span>
                        <p>Work With The Fastest-Growing African Fintech Company</p>
                        <div onClick={() => navigate('/contact')} className="benefits_cta">
                            <p>Contact Us</p>
                            <BsArrowRight />
                        </div>

                    </div>
                    <div className="benefits_right">
                        <div className="benefits_right_card">
                            <span>
                                <img src={Image4} />
                            </span>
                            <h4>Fast Settlement Times</h4>
                            <p>Rapid settlement within 48 hours.</p>
                        </div>
                        <div className="benefits_right_card">
                            <span>
                                <img src={Image5} />

                            </span>
                            <h4>Custom, Competitive Rates</h4>
                            <p>Transparent and volume-based pricing.</p>
                        </div>
                        <div className="benefits_right_card">
                            <span>
                                <img src={Image6} />

                            </span>
                            <h4>Wholesale Provider</h4>
                            <p>50+ currency pairs including intra-African and digital currencies</p>
                        </div>
                        <div className="benefits_right_card">
                            <span>
                                <img src={Image7} />
                            </span>
                            <h4>VIP Customer Support</h4>
                            <p>24/7 customer service reachable via WhatsApp, email, and phone</p>
                        </div>
                    </div>
                </div>
            </div>
            < Component3 />
        </div>
    )
}

export default Landing_page