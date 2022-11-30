import React, {useState} from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "./Pages/HomePage"
import NavbarSection from "./component/navbarSection"
import AboutPage from "./Pages/AboutPage"
import RegisterAs from "./Pages/RegisterAs"
import ContactPage from "./Pages/ContactPage"
import Reset from "./component/Reset/Reset"
import SigninPage from "./Pages/SignIn"
import CongratsPage from "./Pages/SignInCongrats"
import LoginCongratsPage from "./Pages/LoginCongrats"
import LoginPage from "./Pages/LoginPage"
import DynaModal from "./component/DynaModal";
import Modal from "./Pages/Modal"

const App = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = (e) => {
        e.preventDefault();
        setIsModalOpen(!isModalOpen);
    }

    return (
    <div>
        <BrowserRouter>
            <NavbarSection />
            <DynaModal
            text="Code sent"
            // isOpen={isModalOpen}
            // toggleModal={toggleModal}
            />
            <button className="button" onClick={toggleModal}>Open Modal</button>
            {/*<Modal isOpen={isModalOpen} toggleModal={toggleModal} closeOnOutsideClick={true} />*/}
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/registeras" element={<RegisterAs/>}/>
                <Route path="/signin" element={<SigninPage />}/>
                <Route path="/congratsBox" element={<CongratsPage />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/logincongratsBox" element={<LoginCongratsPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/reset" element={<Reset/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
