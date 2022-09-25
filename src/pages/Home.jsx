import React from 'react';
import Introduction from '../components/Introduction';
import Slider from '../components/Slider';
import "../css/home.css";
import AboutImage from "../images/pexels-pixabay-357743.jpg";
import delicious from "../images/delicious.jpg";
import one from "../images/2.jpg";
import two from "../images/4.jpg";
import three from "../images/6.jpg";
import Carou from '../components/Carousel';
import Footer from '../components/Footer';
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import AOS from 'aos';


function Home() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  AOS.init();

  return (
    <div className='home'>
      <Introduction />
      <Slider />

      {/* About */}
      <section className="about">
        <div data-aos="flip-left" className="aboutText">
          <h1>About</h1>
          <p>
            Cookies is an award-winning food and drink website visited by over
            7 million hungry faces every month. Our audience comes to us for rigorously
            tested recipes, science-driven cooking techniques, robust equipment reviews,
            and stories that offer cultural and historical context to the foods we love to eat.
          </p>
          <p>
            In our case, serious doesn’t mean exclusive or highbrow.
            Our approach to our work in the kitchen is serious,
            but the results are for everyone, whether you’re a hardcore food nerd making
            a special-occasion feast or a casual, once-a-week cook who’s just looking for your next dinner.
          </p>

          <div className="rating" data-aos="flip-right">
            <label>
              <span>41</span>
              <span>Proffesionals</span>
            </label>
            <label>
              <span>400</span>
              <span>Recepies</span>
            </label>
            <label>
              <span>30</span>
              <span>Branches</span>
            </label>
          </div>
        </div>
        <div className="aboutImage" data-aos="flip-up">
          <img src={AboutImage} alt="AboutImage.png" />
        </div>
      </section>
      {/* delicious */}
      <section className="deliciousLooks">
        <div className="looksImage" data-aos="flip-down">
          <img src={delicious} alt="delicious.png" />
        </div>
        <div className="looksText" data-aos="zoom-in-up">
          <h1>This looks Delicious</h1>
          <p>
            Search, watch, look and cook every single (coookies) you love to.
            Dont wait, start!..
          </p>
          <p>
            Get to know your produce—how to pick it out,
            how to clean it, and how to prepare it—with our
            vegetables guides that answer all your burning questions.
          </p>
          <Button type='button' ref={target} onClick={() => setShow(!show)}>Discover More!</Button>
          <Overlay target={target.current} show={show} placement="right">
            {(props) => (
              <Tooltip id="overlay-example" {...props}>
                Not yet Updated!...
              </Tooltip>
            )}
          </Overlay>
        </div>

      </section>

      {/* How it works!! */}
      <section className="Works">
        <label>
          <div className="card">
            <div className="text">
              <span>01</span>
              <h4 className="card-text">Great Brief</h4>
              <p>
                Complete recipe with simple description about the meal..
              </p>
            </div>
            <img src={one} alt="Brief.png" />
          </div>
        </label>
        <label id='second'>
          <div className="card">
            <div className="text">
              <span>02</span>
              <h4 className="card-text">Proffesional</h4>
              <p>
                Our official chefs, start creating unique recipe.
              </p>
            </div>
            <img src={two} alt="Brief.png" />
          </div>
        </label>
        <label>
          <div className="card">
            <div className="text">
              <span>03</span>
              <h4 className="card-text">Get your Recipe</h4>
              <p>
                Get your meal online or pick it up from us..
                Wanna eat!
              </p>
            </div>
            <img src={three} alt="Brief.png" />
          </div>
        </label>
      </section>
      <div className="carosel">
        <Carou />
      </div>
      <Footer />

    </div>
  );
}

export default Home;
