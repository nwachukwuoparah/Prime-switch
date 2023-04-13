import React, { useState, useEffect } from "react"
import './header.css'
import logo from './Logo 1.png'
import { BsArrowRight } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
const Header = (props) => {
    const [scroll, setScroll] = useState(false)
    const navigate = useNavigate()

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
                <img onClick={() => navigate('/')} src={logo} className="header_image" />
                <nav className="header_nav">
                    <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to={'/about'}><p>About</p></NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to={'/service'} ><p>Our Services</p></NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to={'/tresure'}><p>Treasura</p></NavLink>
                </nav>
                <NavLink to={'/contact'} className="header_contact" >
                    <p>Contact Us</p>
                    <BsArrowRight />
                </NavLink>
            </div>
        </header>
    )
};

export default Header;
