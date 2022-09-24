import Carousel from 'react-bootstrap/Carousel';
import "../css/carousel.css";
import s1 from "../images/s1.jpg";
import s2 from "../images/s2.jpg";
import s3 from "../images/s3.jpg";
import s4 from "../images/s4.jpg";
import s5 from "../images/s5.jpg";

const Carou = () => {
  return (
   <section className="caroSection">
    <span>
      <h1>Client's Order</h1>
    </span>
     <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={s1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='h3'>Great taste</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={s2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='h3'>great quality</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={s3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='h3'>Exquisite</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={s4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='h3'>Very delicious</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={s5}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='h3'>Affordable Price</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   </section>
  );
}

export default Carou;