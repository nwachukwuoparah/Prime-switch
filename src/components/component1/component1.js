import React from "react"
import './component1.css'

import { BsArrowRight } from "react-icons/bs";
const component1 = (props) => {





    return (
        <div className="component1" style={{ backgroundColor: props.color && '#F9F9FB', paddingTop: props.top && 50 }}>
            {props.h4 && <h4>{props.h4}</h4>}
            <div className={props.reverse ? "component1_cont1" : "component1_cont"} style={{ borderBottom: props.border && " 1px solid #DCDFEA " }} >
                <div className="component1_cont_img">
                    <img src={props.Image} />
                </div>
                <div className="component1_cont_text" style={{ marginLeft: props.reverse && 60 }} >
                    <h2>{props.h2}</h2>
                    <p>{props.p}</p>
                    {props.h5 && <h5>{props.h5}</h5>}
                    {props.cta1 && <div className="component1_cont_cta">
                        {props.cta1}
                        <BsArrowRight />
                    </div>}


                    {props.cta2 && <button className="component1_cont_cta2">{props.cta2}</button>}
                </div>
            </div>
        </div>
    )
};

export default component1;
