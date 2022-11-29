import React from 'react'
import './style.css'
import reviewImg from '../../Images/Downloads/review.png'

const ReviewComponents = () => {
    return (
        <div>
          <div className="reviewContainer">
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner carouselSlider">
                      <div className="carousel-item active">
                       <div className="sideText">
                           <img src={reviewImg} alt=""/>
                           <h1>wilson godwin</h1>
                           <h5>
                               Lorem ipsum dolor sit
                           </h5>
                           <p>Lorem ipsum dolor sit amet, consectetur </p>
                           <p>adipisicing elit. Aliquam deserunt dolore facilis inventore iste neque.</p>
                       </div>
                      </div>
                      <div className="carousel-item">
                          <div className="sideText">
                              <img src={reviewImg} alt=""/>
                              <h1>andrew tate</h1>
                              <h5>
                                  Lorem ipsum dolor sit.
                              </h5>
                              <p>Lorem ipsum dolor sit amet, consectetur </p>
                              <p>adipisicing elit. Aliquam deserunt dolore facilis inventore iste neque.</p>
                          </div>
                      </div>
                      <div className="carousel-item">
                          <div className="sideText">
                              <img src={reviewImg} alt=""/>
                              <h1>hannah dansel</h1>
                              <h5>
                                  Lorem ipsum dolor sit.
                              </h5>
                              <p>Lorem ipsum dolor sit amet, consectetur </p>
                              <p>adipisicing elit. Aliquam deserunt dolore facilis inventore iste neque.</p>
                          </div>
                      </div>
                  </div>
                  <button className="carousel-control-prev prev" type="button" data-bs-target="#carouselExampleControls"
                          data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next next" type="button" data-bs-target="#carouselExampleControls"
                          data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                  </button>
              </div>
          </div>
        </div>
    )
}

export default ReviewComponents;