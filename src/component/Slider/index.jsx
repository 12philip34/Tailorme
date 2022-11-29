import React from 'react'
import './style.css'
import ImageOne from '../../Images/Downloads/image 3.png'
import ImageTwo from '../../Images/Downloads/image 7.png'
import ImageThree from '../../Images/Downloads/Group 26840.png'
import ImageFour from '../../Images/Downloads/Group 26841.png'
import ImageFive from '../../Images/Downloads/slide2(1).png'
import ImageSix from '../../Images/Downloads/slide2(2).png'
import ImageSeven from '../../Images/Downloads/Group 4.png'
import ImageEight from '../../Images/Downloads/image 31.png'
const Slider = () => {

    return (
        <div>
            <div className="SliderContainer">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                                aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner carouselBox">
                        <div className="carousel-item active carouselItem">
                            <img src={ImageOne} className="firstImage" alt="..." />
                            <div className="middleText">
                                <h1>We do everything fashion</h1>
                                <h1>and wears</h1>
                                <p>choose-sew-Deliver</p>
                                <a className="button" href="/registeras">Get started</a>
                            </div>
                                <img src={ImageTwo} className="lastImage" alt="..." />
                        </div>
                        <div className="carousel-item ">
                                <img src={ImageFour} className="firstImage" alt="..." />
                            <div className="middleText">
                                <h1>Get access to fabrics for</h1>
                                <h1>multi-purpose use</h1>
                                <p>All at first hand</p>
                                <a className="button" href="/registeras">Get started</a>
                            </div>
                            <img src={ImageThree} className="lastImage" alt="..." />
                        </div>
                        <div className="carousel-item ">
                            <img src={ImageFive} className="firstImage" alt="..." />
                            <div className="middleText">
                                <h1>We style according to </h1>
                                <h1>your way</h1>
                                <p>Your taste in a dress</p>
                                <a className="button" href="/registeras">Get started</a>
                            </div>
                                <img src={ImageSix} className="lastImage" alt="..." />
                        </div>
                        <div className="carousel-item ">
                            <img src={ImageEight} className="firstImage" alt="..." />
                            <div className="middleText">
                                <h1>Name any fabric, we have it </h1>
                                <h1>in stock</h1>
                                <p>Best qualities in stock</p>
                                <a className="button" href="/registeras">Get started</a>
                            </div>
                            <img src={ImageSeven} className="lastImage" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Slider;