import React, { useState } from 'react'
import './style.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const DashBoardListItems = (props) => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    return (
        <div>
            {/*{*/}
            {/*    filter.map((products) => {*/}
            {/*        return (*/}
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
                                <a className="addToCart" href='#sss'><AddShoppingCartIcon /></a>
                            </div>
                        </div>
                {/*    )*/}
                {/*})*/}
            {/*}*/}
        </div>
    )
}
export default DashBoardListItems;