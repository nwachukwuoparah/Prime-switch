
import React from "react"
import './footer.css'
import Image from './Logo 1.png'
import { SlLocationPin } from "react-icons/sl";
const footer = (props) => {
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


                    <div className="footer_wrap_top_right">
                        <span><SlLocationPin /><p>Canada</p></span>
                        <p>info@primeswitch.com</p>
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
