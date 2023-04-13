import React,{useEffect} from "react"
import Component1 from "../components/component1/component1";
import Component2 from "../components/component2/component2";
import Component3 from "../components/component3/component3";
import Image from './Image (1).png'
const About = () => {



    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])
    const obj = {
        h4: 'About Primeswitch',
        Image: Image,
        h2: 'Simplifying International Transactions To Save You Money',
        p: 'Our secure and reliable platform allows you to easily send and receive payments, as well as exchange foreign currencies at competitive rates. Our platform is designed to meet all your international payment and foreign exchange needs.',
        cta2: 'Contact Us',
        color: true,
        top:true
    }

    return (
        <div className="about">
            <Component1 {...obj} />
            <Component2 border={true} />
            <Component3 />
        </div>
    )
};

export default About;
