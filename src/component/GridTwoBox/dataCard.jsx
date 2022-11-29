import React from 'react'
import './style.css'
import MainBoxTwo from "./index";
import ImageOne from '../../Images/Downloads/image 8.png'
import ImageTwo from '../../Images/Downloads/image 9.png'
import ImageThree from '../../Images/Downloads/image 10.png'
import ImageFour from '../../Images/Downloads/image 11.png'
import ImageFive from '../../Images/Downloads/image 12.png'
import ImageSix from '../../Images/Downloads/image 13.png'
import ImageSeven from '../../Images/Downloads/image 14.png'

const SecondDataCard = (props) => {

    return (
        <div className='rightContainer'>
                <div className="secondTopHearder">
                        <p className='subMenu'>Trending product</p>
                </div>
                <div className='GridCard'>
                        <MainBoxTwo
                            SecondImage={ImageOne}
                            secondText="Rossberry Platinum Yellow with Red Pattern Ankara Fabric"
                            instore="500yr+"
                            secondPrice="N500"
                        />
                        <MainBoxTwo
                            SecondImage={ImageTwo}
                            secondText="Rossberry Platinum Yellow with Red Pattern Ankara Fabric"
                            secondInstore="500yr+"
                            secondPrice="N500"
                        />
                        <MainBoxTwo
                            SecondImage={ImageThree}
                            secondText="Rossberry Platinum Yellow with Red Pattern Ankara Fabric"
                            secondInstore="500yr+"
                            secondPrice="N500"
                        />
                        <MainBoxTwo
                            SecondImage={ImageFour}
                            secondText="Rossberry Platinum Yellow with Red Pattern Ankara Fabric"
                            secondInstore="500yr+"
                            secondPrice="N500"
                        />
                        <MainBoxTwo
                            SecondImage={ImageFive}
                            secondText="Rossberry Platinum Yellow with Red Pattern Ankara Fabric"
                            secondInstore="500yr+"
                            secondPrice="N500"
                        />
                        <MainBoxTwo
                            SecondImage={ImageSix}
                            secondText="Rossberry Platinum Yellow with Red Pattern Ankara Fabric"
                            secondInstore="500yr+"
                            secondPrice="N1000"
                        />
                        <MainBoxTwo
                            SecondImage={ImageSeven}
                            secondText="Rossberry Platinum Yellow with Red Pattern Ankara Fabric"
                            secondInstore="500yr+"
                            secondPrice="N600"
                        />
                        <MainBoxTwo
                            SecondImage={ImageOne}
                            secondText="Rossberry Platinum Yellow with Red Pattern Ankara Fabric"
                            secondInstore="500yr+"
                            secondPrice="N600"
                        />
                        <MainBoxTwo
                            SecondImage={ImageTwo}
                            secondText="Rossberry Platinum Yellow with Red Pattern Ankara Fabric"
                            secondInstore="500yr+"
                            secondPrice="N1000"
                        />
                        <MainBoxTwo
                            SecondImage={ImageThree}
                            secondText="Rossberry Platinum Yellow with Red Pattern Ankara Fabric"
                            secondInstore="500yr+"
                            secondPrice="N1000"
                        />
                        <MainBoxTwo
                            SecondImage={ImageFour}
                            secondText="Rossberry Platinum Yellow with Red Pattern Ankara Fabric"
                            secondInstore="500yr+"
                            secondPrice="N1000"
                        />
                        <MainBoxTwo
                            SecondImage={ImageFive}
                            secondText="Rossberry Platinum Yellow with Red Pattern Ankara Fabric"
                            secondInstore="500yr+"
                            secondPrice="N1000"
                        />
                </div>
        </div>
    )
}

export default SecondDataCard;