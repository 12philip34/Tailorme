import React from 'react'
import style from './style.module.css'
import congrats from '../../Images/Downloads/welcomback.png'

const LoginCongratsPage = () => {

    return (
        <div>
            <div className={style.registerAsContainer}>
                <div className={style.leftSection}>
                   <div className={style.leftSectionInnerContainer}>
                       <img src={congrats} alt="congrats.png"/>
                       <h1>Welcome back</h1>
                       <h4>Been a while, let’s make great </h4>
                       <h4>things together</h4>
                       <a href="">Proceed to Dashboard</a>
                   </div>
                </div>
                <div className={style.rightSection}>
                    <div className={style.contentTwo}>
                        <h1>
                            Newly stocked
                        </h1>
                        <h1>materials available</h1>
                        <h3>We have all kinds of ankara materials</h3>
                        <h3> and well experieced stylist. Get involed</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginCongratsPage;