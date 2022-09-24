import React from 'react';
import "../css/slider.css";
import slideOne from "../images/1.jpg";
import slideTwo from "../images/2.jpg";
import slideThree from "../images/3.jpg";
import slideFour from "../images/4.jpg";
import slideFive from "../images/5.jpg";
import slideSix from "../images/6.jpg";
import slideseven from "../images/7.jpg";
import slideEight from "../images/8.jpg";
import slideNine from "../images/9.jpg";

const Slider = () => {
  return (
    <div className='body'>
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src={slideOne} alt="jpg" />
          </div>
          <div className="slide">
            <img src={slideTwo} alt="jpg" />
          </div>
          <div className="slide">
            <img src={slideThree} alt="jpg" />
          </div>
          <div className="slide">
            <img src={slideFour} alt="jpg" />
          </div>
          <div className="slide">
            <img src={slideFive} alt="jpg" />
          </div>
          <div className="slide">
            <img src={slideSix} alt="jpg" />
          </div>
          <div className="slide">
            <img src={slideseven} alt="jpg" />
          </div>
          <div className="slide">
            <img src={slideEight} alt="jpg" />
          </div>
          <div className="slide">
            <img src={slideNine} alt="jpg" />
          </div>
        </div>
      </div>
      <div className="centerSlide">
       <span>
       <p>
          Each of our recipes is methodically tested and tasted,
          over and over again, by our dedicated recipe developers
          and crosstesters, all of them skilled culinary professionals.
        </p>
        <h1>
          GOOD COOKS KNOW HOW. GREAT COOKS KNOW WHY.
        </h1>       
       </span>
      </div>
    </div>
  )
}

export default Slider;