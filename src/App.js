import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "./Pages/HomePage"
import NavbarSection from "./component/navbarSection"
import AboutPage from "./Pages/AboutPage"
import RegisterAs from "./Pages/RegisterAs"
import ContactPage from "./Pages/ContactPage"
import Reset from "./component/Reset/Reset"
import SigninPage from "./Pages/SignIn";
import CongratsPage from "./Pages/SignInCongrats";
import LoginCongratsPage from "./Pages/LoginCongrats";
import LoginPage from "./Pages/LoginPage";

const App = () => {

    return (
    <div>
        <BrowserRouter>
            <NavbarSection/>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/registeras" element={<RegisterAs/>}/>
                <Route path="/signin" element={<SigninPage/>}/>
                <Route path="/congratsBox" element={<CongratsPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
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
