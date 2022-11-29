import React from 'react'
import './style.css'

const MainBoxTwo = (props) => {

    return (
        <div>
                <div className="secondGridCard">
                    <div className="secondCard">
                        <img src={props.SecondImage} alt=""/>
                        <div className="SecontCardContent">
                            <p>{props.secondText}</p>
                            <div className="secondFooterCardText">
                                <span>instore:{props.secondInstore}</span>
                                <span>{props.secondPrice}/yd</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default MainBoxTwo;