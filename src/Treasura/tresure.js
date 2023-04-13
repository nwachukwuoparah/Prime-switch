import React, { useEffect } from "react"
import Component1 from "../components/component1/component1";
import Component2 from "../components/component2/component2";
import Component3 from "../components/component3/component3";
import Africa from './Image (A).png'

const Tresure = (props) => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])

    const obj = {
        h4: 'Treasura',
        Image: Africa,
        h2: 'Manage Your Foreign Exchange Risks & Optimize Your International Payments',
        p: 'Our secure and reliable platform allows you to easily send and receive payments, as well as exchange foreign currencies at competitive rates. Our platform is designed to meet all your international payment and foreign exchange needs.',
        cta2: 'Contact Us',
        color: true
    }

    return (
        <div className="tresure ">
            <Component1 {...obj} />
            <Component2 border={true} />
            <Component3 />
        </div>
    )
};

export default Tresure;
