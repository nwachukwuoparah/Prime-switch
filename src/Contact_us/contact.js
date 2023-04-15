import React, { useEffect } from "react"
import './contact.css'
import Component3 from "../components/component3/component3";
import Image from './Map 1.png'
const Contact = (props) => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])


    const item = [
        {
            id: 1,
            name: "name",
            placeholder: "Your name",
            type: 'text'
        },
        {
            id: 1,
            name: "name",
            placeholder: "E-mail",
            type: 'text'
        },
        {
            id: 1,
            name: "name",
            placeholder: "Phone",
            type: 'text'
        },
        {
            id: 1,
            name: "name",
            placeholder: "Your message",
            type: 'text'
        },
    ]

    return (
        <div className="contact">
            <div className="contact_wrap">
                <div className="contact_wrap_input">
                    <div className="contact_wrap_cont">
                        <div className="contact_wrap_cont_bottom">
                            <span className="contact_wrap_cont_top">
                                <h5>Contact Us</h5>
                                <p>Is the answer to your question missing? Get in touch with us.</p>
                            </span>
                            <div>
                                <p>Email</p>
                                <span>info@primeswitch.com</span>
                            </div>
                            <div>
                                <p>Phone</p>
                                <span>+1 (800) 123 45 67</span>
                            </div>
                            <div>
                                <p>Business hours</p>
                                <span>Monday to Friday 9:00am - 6:00pm (GMT+1)</span>
                            </div>
                            <img src={Image} />
                        </div>
                    </div>


                    <form className="contact_wrap_cont_right">
                        <h5>Contact Us</h5>
                        {item.map((i) => (
                            <input className="contact_wrap_cont_input" type={i.type} placeholder={i.placeholder} />
                        ))}
                        <label>
                            <input type="checkbox" />
                            I accept the terms and conditions.
                        </label>
                        <button className="contact_wrap_cont_button">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <Component3 />
        </div>
    )
};

export default Contact;
