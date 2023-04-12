import React, { useState, useEffect } from "react"
import './header.css'
import logo from './Logo 1.png'
import { BsArrowRight } from "react-icons/bs";
const Header = (props) => {
    const [scroll, setScroll] = useState(false)


    useEffect(() => {
        function handleScroll() {
            window.scrollY >= 20 ? setScroll(true) : setScroll(false)
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={scroll ? "headerS" : "header"}>
            <div className="header_wrap">
                <img src={logo} className="header_image" />
                <nav className="header_nav">
                    <p>About</p>
                    <p>Our Services</p>
                    <p>Treasura</p>
                </nav>
                <span className="header_contact" >
                    <p>Contact Us</p>
                    <BsArrowRight />
                </span>
            </div>
        </header>
    )
};

export default Header;
