import React from 'react'
import NavbarDashBoard from "../../component/DashBoardNavBar";
import Slider from "../../component/Slider";
import GridContainer from "../../component/GridContainer";
import FooterContainer from "../../component/Footer";
import RenderItems from "../../component/RenderItems";

const DashBoardPage = () => {

    return (
        <div>
            <NavbarDashBoard />
           <RenderItems />
            <FooterContainer />
        </div>
    )
}

export default DashBoardPage;