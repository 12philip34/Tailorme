import React from 'react';
import Introduction from '../components/Introduction';
import Slider from '../components/Slider';
import "../css/home.css"
import AboutImage from "../images/pexels-pixabay-357743.jpg"
import delicious from "../images/delicious.jpg"
import one from "../images/2.jpg"
import two from "../images/4.jpg"
import three from "../images/6.jpg"

function Home() {
  return (
    <div className='home'>
      <Introduction />
      <Slider />

      {/* About */}
      <section className="about">
        <div className="aboutText">
          <h1>About</h1>
          <p>
            Cookies is an award-winning food and drink website visited by over
            7 million hungry readers every month. Our audience comes to us for rigorously
            tested recipes, science-driven cooking techniques, robust equipment reviews,
            and stories that offer cultural and historical context to the foods we love to eat.
          </p>
          <p>
            In our case, serious doesn’t mean exclusive or highbrow.
            Our approach to our work in the kitchen is serious,
            but the results are for everyone, whether you’re a hardcore food nerd making
            a special-occasion feast or a casual, once-a-week cook who’s just looking for your next dinner.
          </p>

          <div className="rating">
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
        <div className="aboutImage">
          <img src={AboutImage} alt="AboutImage.png" />
        </div>
      </section>
      {/* delicious */}
      <section className="deliciousLooks">
        <div className="looksImage">
          <img src={delicious} alt="delicious.png" />
        </div>
        <div className="looksText">
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
          <button type="button">Discover Now..</button>
        </div>

      </section>

      {/* How it works!! */}
      {/* <section className="Works">
        <div className="slant">
          <label className='one label'>
            <h1>01</h1>
            <h4>exquisite</h4>
            <p>Complete food with great taste about nature!</p>
            <img id='image' src={one} alt="one.png" />
          </label>
          <label className='two label'>
            <h1>02</h1>
            <h4>Creative</h4>
            <p>Complete food with great taste about nature!</p>
            <img id='image' src={two} alt="two.png" />
          </label>
          <label className='three label'>
            <h1>02</h1>
            <h4>Digital</h4>
            <p>Complete food with great taste about nature!</p>
            <img id='image' src={three} alt="three.png" />
          </label>
        </div>
      </section> */}
    </div>
  );
}

export default Home;
