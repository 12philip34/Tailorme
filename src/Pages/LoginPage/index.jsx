import React from 'react'
import style from './style.module.css'
import Logo from '../../Images/Downloads/logo.png'
import LogoTwo from '../../Images/Downloads/footer.png'


const LoginPage = () => {

    return (
        <div>
            <div className={style.registerAsContainer}>
                <div className={style.leftSection}>
                   <div className={style.leftSectionInnerContainer}>
                    <img src={Logo} alt=""/>
                    <h3>Welcome back</h3>
                       <h1>Log into your account</h1>
                       <div className={style.inputBox}>
                           <label htmlFor="number">Phone Number</label>
                           <input type="text" id="number" placeholder="type here"/>
                       </div>
                       <div className={style.inputBox}>
                           <label htmlFor="password">Password</label>
                           <input type="password" id="password" placeholder="........."/>
                           <a className={style.forgotPassword} href="#forgotpassword">Forgot password?</a>
                       </div>
                       <a className={style.loginBtn} href="/">Login</a>
                       <h5>Do not have an account? <a href="/signin">Sign up</a></h5>
                   </div>
                </div>
                <div className={style.rightSection}>
                    <img src={LogoTwo} alt="logotwo.png"/>
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
export default LoginPage;