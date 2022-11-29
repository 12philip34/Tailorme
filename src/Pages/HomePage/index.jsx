import React from 'react'
import style from './style.module.css'
import Slider from "../../component/Slider";
import GridContainer from "../../component/GridContainer";
import ReviewComponents from "../../component/ReviewComponents";
import FooterContainer from "../../component/Footer";

const HomePage = () => {

    return (
        <div>
            <Slider />
            <GridContainer />
            <FooterContainer />
        </div>
    )
}

export default HomePage;