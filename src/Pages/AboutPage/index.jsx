import React from 'react'
import style from './style.module.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NavbarSection from "../../component/navbarSection";

const AboutPage = () => {
    const showToasts = () => {
        toast.success("code sent", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <div>
            <NavbarSection />
            <div className="" id="aboutpage">
                aboutpage
                <button onClick={showToasts}>Show Toast !</button>
                <ToastContainer />
            </div>
        </div>
    )
}

export default AboutPage;