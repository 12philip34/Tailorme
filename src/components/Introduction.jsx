import React from 'react'
import "../css/introduction.css";
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

const Introduction = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <div>
      <div className="containerss">
        <div className="containerBox">
          <h6>Agent of taste</h6>
          <h1>
            Discover your great taste with us!..
          </h1>
          <Button type='button' ref={target} onClick={() => setShow(!show)}>Order Now</Button>
          <Overlay target={target.current} show={show} placement="right">
            {(props) => (
              <Tooltip id="overlay-example" {...props}>
                Not yet Updated!...
              </Tooltip>
            )}
          </Overlay>
        </div>
      </div>
    </div>
  )
}

export default Introduction