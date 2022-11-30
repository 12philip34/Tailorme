import React from "react"
import './style.css'

const DynaModal =({isOpen},props) => {

    return (
        <div>
            <div className="">
                <div className="modalContent">
                   <h5>{props.text}</h5>
                </div>
            </div>
        </div>
    )
}
export default  DynaModal;