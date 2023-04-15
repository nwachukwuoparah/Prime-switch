import React, { useState, useEffect } from "react"
import './header.css'
import logo from './Logo 1.png'
import { BsArrowRight, BsArrowDown } from "react-icons/bs";
import { MdClear } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
const Header = (props) => {
    const [scroll, setScroll] = useState(false)
    const [active, setActive] = useState(false)
    const [drop, setDrop] = useState(false)
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
                {drop ? <MdClear className="menu_close" onClick={() => setDrop(!drop)} /> : <div onClick={() => setDrop(!drop)} className="menu"></div>}

            </div>
            <div className={drop ? "menu_dropdown1" : "menu_dropdown"}>
                <div className="menu_dropdown_wrap" >
                    <span onClick={() => { setDrop(false); navigate('/about') }}><p>About</p></span>
                    <span onClick={() => { setDrop(false); navigate('/service') }} className="menu_dropdown_middle"><p>Our Services</p></span>
                    <span onClick={() => { setDrop(false); navigate('/tresure') }}><p>Treasura</p></span>
                    {/* <span onClick={() => { setDrop(false); navigate('/contact') }}><p>Contact Us</p></span> */}
                </div>
            </div>

        </header >
    )
};

export default Header;
