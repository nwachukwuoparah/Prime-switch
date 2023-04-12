import React from "react"
import './component2.css'

const component2 = (props) => {
    return (
        <div className="component2">
            <div className="component2_top">
                <p style={{ color: '#667085' }} >Why Work With Primeswitch?</p>
                <p>Primeswitch offers a full range of Treasury, FX, and Payments services for pan-African and international enterprises.</p>
            </div>
            <div className="component2_bottom">
                <span>
                    <h1>1M+</h1>
                    <p>Transactions done.</p>
                </span>
                <span>
                    <h1>$3M+</h1>
                    <p>Funds transferred.</p>
                </span>
                <span>
                    <h1>35k+</h1>
                    <p>Customers</p>
                </span>
                <span>
                    <h1>99.6%</h1>
                    <p>Success rate.</p>
                </span>
            </div>
        </div>
    )
};


export default component2;

