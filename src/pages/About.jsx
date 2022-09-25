import React from 'react';
import Footer from '../components/Footer';
import "../css/AboutContact.css";
import * as FaIcons from 'react-icons/fa';
import about from "../images/abouts.jpg";
import aboutTwo from "../images/abouttwo.jpg";

const About = () => {
  return (
    <div className='About'>
      <section className="aboutContainer">
        <div className="BigText">
          <h1>About Us</h1>
          <img src={about} alt="About Us.png" />
        </div>
        <div className="Text">
          <span className='LogoSpan'><h3 className='logos'>C<FaIcons.FaEarlybirds />okies</h3></span>
          <h5>
            We ignite the power of community to nourish people facing hunger.
          </h5>
          <p>
            We are the largest hunger-relief organization in the Rocky Slopy region.
            That makes us uniquely suited to answer the enormous challenge of hunger,
            which affects 1 out of 8 people in our communities.
          </p>
        </div>
      </section>
      <section className="aboutContainer">
        <div className="Text">
          <span className='LogoSpan'><h3 className='logos'>C<FaIcons.FaEarlybirds />okies</h3></span>
          <h5>
            The difference we make together.
          </h5>
          <p>
            We distribute more than 1.5 million meals every week on average.
            But for those in need, we provide more than just food. We give
            hope and open a future. Because when you can’t provide for your
            family today, it’s hard to even think about tomorrow.
          </p>
        </div>
        <div className="BigText">
          <img src={aboutTwo} alt="About_Us.png" />
        </div>
      </section>
      <section className="support">
        <label className='absolute'> 
        <i>Exquisite</i>
        <a rel='noopener noreferrer' href="" target="_blank">Support Us!..</a>
        </label>
      </section>
      <Footer />
    </div>
  );
}

export default About;
