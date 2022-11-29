import React from 'react'
import './style.css'

const MainBox = (props) => {

    return (
        <div>
                <div className="GridCard">
                    <div className="Card">
                        <img src={props.Image} alt=""/>
                        <div className="cardContent">
                            <p>{props.text}</p>
                            <div className="footerCardText">
                                <span>instore:{props.instore}</span>
                                <span>{props.price}/yd</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default MainBox;