import React, { useState, useEffect } from "react"
import './header.css'
import logo from './Logo 1.png'
import { BsArrowRight, BsArrowDown } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
const Header = (props) => {
    const [scroll, setScroll] = useState(false)
    const [active, setActive] = useState(false)
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
                    <NavLink className={({ isActive }) => isActive ? "header_nav_N1" : "header_nav_N"} to={'/about'}><p>About</p></NavLink>
                    <NavLink className={({ isActive }) => isActive ? "header_nav_N1" : "header_nav_N"} to={'/service'} ><p>Our Services</p></NavLink>
                    <NavLink className={({ isActive }) => isActive ? "header_nav_N1" : "header_nav_N"} to={'/tresure'}><p>Treasura</p></NavLink>
                </nav>
                <NavLink to={'/contact'} style={({ isActive }) => isActive ? setActive(true) : setActive(false)} className="header_contact" >
                    <p>Contact Us</p>
                    {active ? <BsArrowDown /> : < BsArrowRight />}
                </NavLink>
                <div className="menu"></div>
            </div>
        </header>
    )
};

export default Header;
