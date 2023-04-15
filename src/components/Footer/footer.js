
import React from "react"
import './footer.css'
import Image from './Logo 1.png'
import { SlLocationPin } from "react-icons/sl";
import Select from "./select";
const footer = (props) => {


    const item = [
        {
            id: 1,
            title: "Company",
            arr: [
                {
                    id: 1,
                    li1: "Home",
                },
                {
                    id: 2,
                    li1: "About",

                },
                {
                    id: 3,
                    li1: "Team"
                },
                {
                    id: 4,
                    li1: "Career",

                },
            ]
        },
        {
            id: 1,
            title: "Our Services",
            arr: [
                {
                    id: 1,
                    li1: "Treasury",

                },
                {
                    id: 2,
                    li1: "Payments",

                }, {
                    id: 3,
                    li1: "Foreign Exchange",

                }, {
                    id: 4,
                    li1: "Foreign Technology",

                },
            ]
        },
    ]



    return (
        <div className="footer">
            <div className="footer_wrap">
                <div className="footer_wrap_top">
                    <div className="footer_wrap_top_left">
                        <div className="footer_wrap_top_left1">
                            <img src={Image} />
                            <p>Growing frontier markets through Fintech-powered FX, Treasury, & Payments services.</p>
                        </div>

                        <div className="footer_wrap_top_left2">
                            <span>
                                <h5>Company</h5>
                                <ul>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Team</li>
                                    <li>Career</li>
                                </ul>
                            </span>
                            <span>
                                <h5>Our Services</h5>
                                <ul>
                                    <li>Treasury</li>
                                    <li>Payments</li>
                                    <li>Foreign Exchange</li>
                                    <li>Foreign Technology</li>
                                </ul>
                            </span>
                        </div>
                    </div>
                    {item?.map((i) => (< Select {...i} />))}
                    
                    <div className="footer_wrap_top_right">
                        <span><SlLocationPin /><p>Canada</p></span>
                        <span className="footer_wrap_top_socials_mobile"><p>Facebook</p> <p>Twitter</p></span>
                        <p>info@primeswitch.com</p>
                    </div>

                    <div className="footer_wrap_top_right_mobile">
                        <p>info@primeswitch.com</p>
                        <div className="footer_wrap_top_socials_mobile"><p>Facebook</p> <p>Twitter</p></div>
                        <span><SlLocationPin /><p>Canada</p></span> <div className="footer_wrap_top_socials_mobile_small"><p>Facebook</p> <p>Twitter</p></div>
                    </div>
                </div>



                <div className="footer_wrap_bottom">
                    <p>Copyright © 2021 Primeswitch. All Rights reserved</p>
                    <span><p>Facebook</p> <p>Twitter</p></span>
                </div>
            </div>
        </div>
    )
};

export default footer;
