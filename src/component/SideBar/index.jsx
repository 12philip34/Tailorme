import React, { useState } from 'react'
import './style.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import SlidingPanel from 'react-sliding-side-panel'
import MenuIcon from '@mui/icons-material/Menu'

const SideBar = () => {
    const [openPanel, setOpenPanel] = useState(false);
    const toggle = () => setOpenPanel(!openPanel);
    const sideBtn = {
        // position: 'absolute'
        color: 'white',
        cursor: 'pointer'
    }
    return (
        <div className='sliderBox'>
            <div className="sideButton">
                <MenuIcon onClick={toggle} style={sideBtn} />
            </div>
            <div className="sideBarContainer" style={{width: openPanel ? "320px" : "0px"}}>
                    <div>
                        <div className="product" style={{display: openPanel ? "block" : "none"}}>
                            <h4>New Products</h4>
                            <p>stylist</p>
                            <p>Design</p>
                            <hr/>
                            <div className="accordion" id="accordionPanelsStayOpenExample">
                                <div className="backaccord">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                        <button className="accordionBtn" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                                aria-controls="panelsStayOpen-collapseOne">
                                            <p>Men's clothing</p>
                                            <KeyboardArrowDownIcon />
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
                                         aria-labelledby="panelsStayOpen-headingOne">
                                        <div className="accordion-body">
                                            overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="backaccord">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                        <button className="accordionBtn" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true"
                                                aria-controls="panelsStayOpen-collapseTwo">
                                            <p>Womens's clothing</p>
                                            <KeyboardArrowDownIcon />
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                                         aria-labelledby="panelsStayOpen-headingTwo">
                                        <div className="accordion-body">
                                            overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="backaccord">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                        <button className="accordionBtn" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true"
                                                aria-controls="panelsStayOpen-collapseThree">
                                            <p>Children's clothing</p>
                                            <KeyboardArrowDownIcon />
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                                         aria-labelledby="panelsStayOpen-headingThree">
                                        <div className="accordion-body">
                                            overflow.
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="accordion" id="accordionPanelsStayOpenExample">
                                <div className="backaccord">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                                        <button className="accordionBtn" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="true"
                                                aria-controls="panelsStayOpen-collapseFour">
                                            <p>caps and hats</p>
                                            <KeyboardArrowDownIcon />
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse show"
                                         aria-labelledby="panelsStayOpen-headingFour">
                                        <div className="accordion-body">
                                            overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="backaccord">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                                        <button className="accordionBtn" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="true"
                                                aria-controls="panelsStayOpen-collapseFive">
                                            <p>Foot wears</p>
                                            <KeyboardArrowDownIcon />
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse"
                                         aria-labelledby="panelsStayOpen-headingFive">
                                        <div className="accordion-body">
                                            overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="backaccord">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                                        <button className="accordionBtn" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="true"
                                                aria-controls="panelsStayOpen-collapseSix">
                                            <p>Materials</p>
                                            <KeyboardArrowDownIcon />
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse"
                                         aria-labelledby="panelsStayOpen-headingSix">
                                        <div className="accordion-body">
                                            overflow.
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="filter" style={{display: openPanel ? "block" : "none"}}>
                            <h4>Filtered by:</h4>
                            <div className="accordion" id="accordionPanelsStayOpenExample">
                                <div className="backaccord">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingSeven">
                                        <button className="accordionBtn" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="true"
                                                aria-controls="panelsStayOpen-collapseSeven">
                                            <p>Type</p>
                                            <KeyboardArrowDownIcon />
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse show"
                                         aria-labelledby="panelsStayOpen-headingSeven">
                                        <div className="accordion-body">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    <p>
                                                        basic
                                                    </p>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                                       checked />
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                    <p> pattern</p>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    <p>
                                                        hoddy
                                                    </p>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                                       checked />
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                    <p>  zipper</p>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion" id="accordionPanelsStayOpenExample">
                                <div className="backaccord">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingEight">
                                        <button className="accordionBtn" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="true"
                                                aria-controls="panelsStayOpen-collapseEight">
                                            <p>Size</p>
                                            <KeyboardArrowDownIcon />
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseEight" className="accordion-collapse collapse show"
                                         aria-labelledby="panelsStayOpen-headingEight">
                                        <div className="accordion-body">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    <p>
                                                        basic
                                                    </p>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                                       checked />
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                    <p> pattern</p>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    <p>
                                                        hoddy
                                                    </p>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                                       checked />
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                    <p>  zipper</p>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="brand" style={{display: openPanel ? "block" : "none"}}>
                            <h4>Brand</h4>
                            <div className="accordion" id="accordionPanelsStayOpenExample">
                                <div className="backaccord">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingNine">
                                        <button className="accordionBtn" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="true"
                                                aria-controls="panelsStayOpen-collapseNine">
                                            <p>Type</p>
                                            <KeyboardArrowDownIcon />
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseNine" className="accordion-collapse collapse show"
                                         aria-labelledby="panelsStayOpen-headingNine">
                                        <div className="accordion-body">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    <p>
                                                        basic
                                                    </p>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                                       checked />
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                    <p> pattern</p>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    <p>
                                                        hoddy
                                                    </p>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                                       checked />
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                    <p>  zipper</p>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion" id="accordionPanelsStayOpenExample">
                                <div className="backaccord">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingTen">
                                        <button className="accordionBtn" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseTen" aria-expanded="true"
                                                aria-controls="panelsStayOpen-collapseTen">
                                            <p>Size</p>
                                            <KeyboardArrowDownIcon />
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTen" className="accordion-collapse collapse show"
                                         aria-labelledby="panelsStayOpen-headingTen">
                                        <div className="accordion-body">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    <p>
                                                        basic
                                                    </p>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                                       checked />
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                    <p> pattern</p>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    <p>
                                                        hoddy
                                                    </p>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                                       checked />
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                    <p>  zipper</p>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default SideBar;