import React, {useState} from 'react'
import { firebase, auth } from "../../FirebasePh"
import style from './style.module.css'
import Logo from '../../Images/Downloads/logo.png'
import LogoTwo from '../../Images/Downloads/footer.png'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import {useNavigate} from "react-router-dom";

const SigninPage = () => {


    // Inputs
    const [mynumber, setnumber] = useState(null);
    const [otp, setotp] = useState(null);
    const [show, setshow] = useState(false);
    const [final, setfinal] = useState(null);
    const navigate = useNavigate();

    // Sent OTP
    const signin = () => {

        if (mynumber === "" || mynumber.length < 10) return;

        let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        auth.signInWithPhoneNumber(mynumber, verify).then((result) => {
            setfinal(result);
            alert("code sent")
            setshow(true);
        })
            .catch((err) => {
                alert(err);
                window.location.reload()
            });
    }

    // Validate OTP
    const ValidateOtp = () => {
        if (otp === null || final === null)
            return;
        final.confirm(otp).then((result) => {
            // success
            // console.log('result = confirm')
            navigate("/congratsBox")
        })
            .catch((err) => {
                alert("Wrong code");
            })

    }

    return (
        <div>
            <div className={style.registerAsContainer}>
                <div className={style.leftSection}>
                   <div className={style.leftSectionInnerContainer}>
                       <img src={Logo} alt="logo.png"/>
                       <div className={style.contentBox}>
                           <a href="/registeras"> <ArrowBackIcon /></a>
                           <h4>Get started for free</h4>
                           <h1>Create account</h1>
                           <div className={style.inputBox}>
                               <label htmlFor="name">name</label>
                               <input type="text" id="name" placeholder="First and LastName"/>
                           </div>
                           <div className={style.inputBox}>
                               <label htmlFor="number">number</label>
                               <input value={mynumber} onChange={(e) => {
                                   setnumber(e.target.value) }} id="number" placeholder="(+234)"/>
                           </div>

                           <div className={style.inputBox}>
                               <label htmlFor="password">password</label>
                               <input type="password" id="password" placeholder="..........."/>
                           </div>
                           <div id="recaptcha-container" className={style.recaptcha}></div>
                           <button className={style.signinBtn} onClick={signin}>Create your account</button>
                           <div style={{ display: show ? "block" : "none" }} className={style.otpBox}>
                               <input type="text" placeholder={"Enter your OTP"}
                                      onChange={(e) => { setotp(e.target.value.trim()) }}></input>

                               <button onClick={ValidateOtp}>Verify</button>
                           </div>
                           <div className={style.ifPasswordIsAvaliable}>
                               <h5>Already have an account? <a href="/login">Login</a></h5>
                           </div>
                       </div>
                   </div>
                </div>
                <div className={style.rightSection}>
                    <img src={LogoTwo} alt="LogoTwo.png"/>
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
export default SigninPage;