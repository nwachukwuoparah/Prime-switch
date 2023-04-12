import React from "react"
import './component1.css'

import Image from './Image (1).png'
import { BsArrowRight } from "react-icons/bs";
const component1 = (props) => {
    return (
        <div className="component1">
            <h4>Across Africa and Beyond</h4>
            <div className="component1_cont">
                <div className="component1_cont_img">
                    <img src={Image} />
                </div>
                <div className="component1_cont_text">
                    <h2>Supporting businesses in 115+ countries, Primeswitch makes it easier to do business in Africa</h2>
                    <p>Primeswitch empowers companies from 115+ countries to accelerate their operations in frontier markets through better foreign exchange, treasury services, payments, and last-mile settlement.</p>

                    <div className="component1_cont_cta">
                        Learn More
                        <BsArrowRight />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default component1;
