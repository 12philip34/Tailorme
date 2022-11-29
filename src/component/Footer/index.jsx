import React from 'react'
import style from './style.module.css'
import Logo from '../../Images/Downloads/footer.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const FooterContainer = () => {

    return (
        <div>
            <div className={style.footerContainer}>
                <div className={style.gridOne}>
                    <img src={Logo} alt="Logo.png"/>
                    <p>
                        We are concern about being
                    </p>
                    <p>
                        the connection
                    </p>
                    <p>
                        bridge between the client
                    </p>
                    <p>and the stylist.</p>
                </div>
                <div className={style.gridTwo}>
                    <h3>contact us</h3>
                    <span>info@tailorme.com </span>
                    <span>+234 705 786 2157 24</span>
                    <span> marinaa Road, Eket, Akwa Ibom State</span>
                </div>
                <div className={style.gridThree}>
                    <h3>our social handles</h3>
                    <span>twitter</span>
                    <span>facebook</span>
                    <span>linkedin</span>
                    <span>github</span>
                </div>
                <div className={style.gridFour}>
                    <h3>lets make what suit your personality</h3>
                    <button className={style.footerBtn}>get started <ArrowForwardIcon /></button>
                </div>
            </div>
        </div>
    )
}
export default FooterContainer;