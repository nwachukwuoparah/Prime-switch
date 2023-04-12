import React from "react"
import './component3.css'
import Image1 from './image/Image 1.png'
import Image2 from './image/Image 2.png'


const Component3 = (props) => {



    return (
        <div className="component3">
            <div className="component3_wrap">
                <div className="component3_left">
                    <p>We Make A Difference</p>
                    <span>The First Choice For Major Enterprises Worldwide.</span>
                    <button>Contact Us</button>
                </div>
                <div className="component3_right">
                    <div className="component3_right_image1"><img className="component3_right_Image" src={Image1} /></div>
                    <div className="component3_right_image2"><img className="component3_right_Image" src={Image2} /></div>
                </div>
            </div>
        </div>
    )
};

export default Component3;
