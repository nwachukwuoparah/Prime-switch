import React from "react"
import './component1.css'
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const Component1 = (props) => {

    const navigate = useNavigate()


    return (
        <div className="component1" style={{ backgroundColor: props.color && '#F9F9FB', paddingTop: props.top && 50 }}>
            {props.h4 && <h4>{props.h4}</h4>}
            <div className={(props.reverse ? "component1_cont1" : "component1_cont")} style={{ borderBottom: props.border && " 1px solid #DCDFEA " }} >
                <div className="component1_cont_img">
                    <img src={props.Image} />
                </div>
                <div className={props.reverse ? "component1_cont_text1" : "component1_cont_text"} >
                    <h2>{props.h2}</h2>
                    <p>{props.p}</p>
                    {props.h5 && <h5>{props.h5}</h5>}
                    {props.cta1 && <div onClick={() => navigate('/about')} className="component1_cont_cta">
                        {props.cta1}
                        <BsArrowRight />
                    </div>}

                    {props.cta2 && <button className="component1_cont_cta2">{props.cta2}</button>}
                </div>
            </div>
        </div>
    )
};

export default Component1;
