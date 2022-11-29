import React from 'react'
import './style.css'
import MainBox from "./index";
import ImageOne from '../../Images/Downloads/image 8.png'
import ImageTwo from '../../Images/Downloads/image 9.png'
import ImageThree from '../../Images/Downloads/image 10.png'
import ImageFour from '../../Images/Downloads/image 11.png'
import ImageFive from '../../Images/Downloads/image 12.png'
import ImageSix from '../../Images/Downloads/image 13.png'
import ImageSeven from '../../Images/Downloads/image 14.png'

const DataCard = (props) => {

    return (
        <div className='rightContainer'>
                <div className="topHearder">
                        <p><a href="/product">product</a></p>
                        <p><a href="/stylist">stylist</a></p>
                        <p><a href="/design">design</a></p>
                </div>
            <p className='subMenu'>New products</p>
                <div className='GridCard'>
                        <MainBox
                            Image={ImageOne}
                            text="Rossberry Platinum Yellow with Red Pattern Ankara Fabric"
                            instore="500yr+"
                            price="N500"
                        />
                        <MainBox
                            Image={ImageTwo}
                            text="Rossberry Platinum Yellow with Red Pattern Ankara Fabric"
                            instore="500yr+"
                            price="N500"
                        />
                        <MainBox
                            Image={ImageThree}
                            text="Rossberry Platinum Yellow with Red Pattern Ankara Fabric"
                            instore="500yr+"
                            price="N500"
                        />
                        <MainBox
                            Image={ImageFour}
                            text="Rossberry Platinum Yellow with Red Pattern Ankara Fabric"
                            instore="500yr+"
                            price="N500"
                        />
                        <MainBox
                            Image={ImageFive}
                            text="Rossberry Platinum Yellow with Red Pattern Ankara Fabric"
                            instore="500yr+"
                            price="N500"
                        />
                        <MainBox
                            Image={ImageSix}
                            text="Rossberry Platinum Yellow with Red Pattern Ankara Fabric"
                            instore="500yr+"
                            price="N1000"
                        />
                        <MainBox
                            Image={ImageSeven}
                            text="Rossberry Platinum Yellow with Red Pattern Ankara Fabric"
                            instore="500yr+"
                            price="N600"
                        />
                        <MainBox
                            Image={ImageOne}
                            text="Rossberry Platinum Yellow with Red Pattern Ankara Fabric"
                            instore="500yr+"
                            price="N600"
                        />
                        <MainBox
                            Image={ImageTwo}
                            text="Rossberry Platinum Yellow with Red Pattern Ankara Fabric"
                            instore="500yr+"
                            price="N1000"
                        />
                        <MainBox
                            Image={ImageThree}
                            text="Rossberry Platinum Yellow with Red Pattern Ankara Fabric"
                            instore="500yr+"
                            price="N1000"
                        />
                        <MainBox
                            Image={ImageFour}
                            text="Rossberry Platinum Yellow with Red Pattern Ankara Fabric"
                            instore="500yr+"
                            price="N1000"
                        />
                        <MainBox
                            Image={ImageFive}
                            text="Rossberry Platinum Yellow with Red Pattern Ankara Fabric"
                            instore="500yr+"
                            price="N1000"
                        />
                </div>
        </div>
    )
}

export default DataCard;