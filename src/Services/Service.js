import React, { useEffect } from "react"
import Image from './Image (1).png'
import Image1 from './Image.png'
import Component1 from "../components/component1/component1";
import Component3 from "../components/component3/component3";
const Service = (props) => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])

    const item = [
        {
            h4: 'Our Services',
            Image: Image,
            h2: 'Your Go-To Destination For Payment, FX & Treasury Needs',
            p: 'Our secure and reliable platform allows you to easily send and receive payments, as well as exchange foreign currencies at competitive rates. We are determined to meet all your international payment and foreign exchange needs.',
            cta2: 'Contact Us',
            color: true,
            top: true
        },
        {
            Image: Image1,
            p: 'Corporate Treasury',
            h5: 'We help businesses move money easily.',
            cta1: 'Learn More',
            reverse: true,
            M: true
        },
        {
            Image: Image1,
            p: 'Foreign Exchange',
            h5: 'Make payments, and balance assets across 115+ markets',
            cta1: 'Learn More',
        },
        {
            Image: Image1,
            p: 'Payments & Settlement',
            h5: 'We provide services through an API solution or a web platform.',
            cta1: 'Learn More',
            reverse: true,
            border: true,
            M: true,

        },
    ]


    return (
        <div className="service"  >
            {item?.map((i) => (
                <Component1 {...i} />
            ))}
            <Component3 />
        </div>
    )
};

export default Service;


