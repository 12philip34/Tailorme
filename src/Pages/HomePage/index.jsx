import React from 'react'
import style from './style.module.css'
import Slider from "../../component/Slider";
import GridContainer from "../../component/GridContainer";
import FooterContainer from "../../component/Footer";
import NavbarSection from "../../component/navbarSection";

const HomePage = () => {

    return (
        <div>
            <NavbarSection />
            <Slider />
            <GridContainer />
            <FooterContainer />
        </div>
    )
}

export default HomePage;