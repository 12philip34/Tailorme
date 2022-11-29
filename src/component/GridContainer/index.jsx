import React from 'react'
import style from './style.module.css'
import SideBar from "../SideBar";
import MainBox from "../mainBox";
import DataCard from "../mainBox/dataCard";
import SecondDataCard from "../GridTwoBox/dataCard";
import ReviewComponents from "../ReviewComponents";

const GridContainer = () => {

    return (
        <div>
            <div className={style.container}>
              <div className={style.left}>
                  <SideBar />
              </div>
              <div className={style.right}>
                  <DataCard />
                  <SecondDataCard />
                  <ReviewComponents />
              </div>
            </div>
        </div>
    )
}

export default GridContainer;