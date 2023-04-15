import React, { useEffect, useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md";
const Select = (props) => {
    const [drop, SetDrop] = useState(false)
    return (
        <div key={props.id} className="mobile_select">
            <div className="mobile_select_title">
                <h5>{props.title}</h5>
                <MdKeyboardArrowDown onClick={() => SetDrop(!drop)} />
            </div>
            {drop && <ul>
                {props?.arr?.map((i) => (
                    <li key={i.id} >{i.li1}</li>
                ))}
            </ul>}
        </div>
    )
};

export default Select;
