import React from 'react';
import "../css/introduction.css";
import { MDBFooter } from 'mdb-react-ui-kit';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

const Footer = () => {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
        <div>
            <span id='span'>
                Alert! Alert! Alert!. Are you ready..?
            </span>
            <div className="footers">
                <div className="containerBox">
                    <h6 id="h6">Interested!!</h6>
                    <h1>
                        Try it now, Shouldn't pass.
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
            <MDBFooter className='text-center text-lg-start text-muted footerColor'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="facebook-f" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="twitter" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="google" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="instagram" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="linkedin" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="github" />
                        </a>
                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon icon="gem" className="me-3" />
                                    Company name
                                </h6>
                                <p>
                                    So if you’re hungry for good food and great conversation with fellow cooks,
                                    we’re so happy you’re here! And there’s no better place to start than our
                                    community’s 75 Top-Rated Recipes of All Time, from five-star banana bread
                                    to our most-popular mac and cheese.
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Snacks
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Meals
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Toasted
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Recipes
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Facebook
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Twitter
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        LinkedIn
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Github
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact for webDesign!</h6>
                                <p>
                                    <MDBIcon icon="home" className="me-2" />
                                    16 uqua road, Eket..
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me-3" />
                                    bitcointalk46@gmail.com
                                </p>
                                <p>
                                    <MDBIcon icon="phone" className="me-3" /> +234-9032-127-081(Whatsapp)
                                </p>
                                <p>
                                    <MDBIcon icon="print" className="me-3" /> +234-80-571-11-353
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2021 Copyright:
                    <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                        Foodly.com
                    </a>
                </div>
            </MDBFooter>
        </div>
    )
}

export default Footer