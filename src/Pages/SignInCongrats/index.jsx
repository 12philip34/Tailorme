import React from 'react'
import style from './style.module.css'
import congrats from '../../Images/Downloads/congrats.png'
import { auth } from "../../firebase"

const CongratsPage = () => {
    // const logout = () => {
    //     auth.signOut();
    // }

    const UserId = auth.currentUser.uid

    UserId.split(3,5)

    return (
        <div>
            <div className={style.registerAsContainer}>
                <div className={style.leftSection}>
                   <div className={style.leftSectionInnerContainer}>
                       <img src={congrats} alt="congrats.png"/>
                       <h1>Congratulations</h1>
                       <h3>Welcome{auth.currentUser.phoneNumber} ||{UserId}</h3>
                       <h4>{auth.curr} Your account setup was successful</h4>
                       <a href="/">Proceed to Dashboard</a>
                   </div>
                </div>
                <div className={style.rightSection}>
                    <div className={style.contentTwo}>
                        <h1>
                            Get a material and a
                        </h1>
                        <h1>tailor in one place</h1>
                        <h3>We have all kinds of ankara materials</h3>
                        <h3> and well experieced stylist. Get involed</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CongratsPage;