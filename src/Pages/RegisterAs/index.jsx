import React from 'react'
import style from './style.module.css'
import Logo from '../../Images/Downloads/logo.png'
import LogoTwo from '../../Images/Downloads/footer.png'


const RegisterAs = () => {

    return (
        <div>
            <div className={style.registerAsContainer}>
                <div className={style.leftSection}>
                    <img src={Logo} alt="logo.png"/>
                    <div className={style.contentBox}>
                        <h1>register as</h1>
                        <a href="/signin">
                            <div className="form-check" id={style.checkBtn}>
                                <input href="/register" className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                                       value="option1" checked />
                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                        tailor
                                    </label>
                            </div>

                            </a>
                        <a>
                            <div className="form-check" id={style.checkBtn}>
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                                       value="option2" />
                                    <label className="form-check-label" htmlFor="exampleRadios2">
                                        customer
                                    </label>
                            </div>

                        </a>
                    </div>
                </div>
                <div className={style.rightSection}>
                    <img src={LogoTwo} alt="LogoTwo.png"/>
                    <div className={style.contentTwo}>
                        <h1>
                            Join us, all round
                        </h1>
                        <h1>are dress and tailor</h1>
                        <h1>here for you</h1>
                        <h3>Be part of the community and let’s </h3>
                        <h3>make magic with dress</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterAs;