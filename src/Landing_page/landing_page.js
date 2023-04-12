import "./landing_page.css"
import { BsArrowDown } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import Component1 from "../components/component1/component1";
import Component2 from "../components/component2/component2";


const landing_page = () => {





    return (
        <div className="landing_page">
            <div className="landing_page_top">
                <div className="landing_page_wrap">
                    <span className="landing_page_nx1c_left">
                        <h1>Take Control Of All Your Payment, FX & Treasury Needs</h1>
                        <p>Powering the FX behind Africa’s trillion-dollar growth.</p>
                        <div className="landing_page_nx1c_cta">
                            <button className="landing_page_nx1c_cta_button">Contact Us</button>
                            <span className="landing_page_nx1c_cta_action">
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
                        <div className="what_we_do_info_icon" >f</div>
                        <div className="what_we_do_info_text">
                            <h4>Corporate Treasury</h4>
                            <p>We help businesses transfer funds in a quick and effortless manner.</p>
                        </div>
                        <div className="what_we_do_info_cta">
                            <p>Learn More</p>
                            <BsArrowRight />
                        </div>
                    </div>
                    <div className="what_we_do_info">
                        <div className="what_we_do_info_icon" >f</div>
                        <div className="what_we_do_info_text">
                            <h4>Foreign Exchange</h4>
                            <p>Our platform helps you make payments and manage assets across 115+ markets</p>
                        </div>
                        <div className="what_we_do_info_cta">
                            <p>Learn More</p>
                            <BsArrowRight />
                        </div>
                    </div>
                    <div className="what_we_do_info">
                        <div className="what_we_do_info_icon" >f</div>
                        <div className="what_we_do_info_text">
                            <h4>Payments & Settlements</h4>
                            <p>Our services can be accessed through API or web, providing you with flexibility.</p>
                        </div>
                        <div className="what_we_do_info_cta">
                            <p>Learn More</p>
                            <BsArrowRight />
                        </div>
                    </div>
                </div>
            </div>
            <Component1 />
            <Component2 />
        </div>
    )
}

export default landing_page