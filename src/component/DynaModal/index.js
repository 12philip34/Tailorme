import React from "react"
import './style.css'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const DynaModal =({isOpen}, props) => {

    return (
        <div>
            <div style={!isOpen ? {display: 'none'} : null}>
                <div className="modalContent">
                   <h5>{props.modalText}</h5>
                   <h6>Code sent</h6>
                </div>
            </div>
        </div>
    )
}
export default  DynaModal;