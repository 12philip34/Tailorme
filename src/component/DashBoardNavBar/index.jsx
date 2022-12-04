import React from 'react'
import './style.css'
import 'bootstrap'
import Logo from '../../Images/Downloads/logo.png'
import Person2Icon from '@mui/icons-material/Person2';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavbarDashBoard = () => {

    const NavIcon ={
        color: 'purple',
        cursor: 'pointer'
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid m-2">
                    <a className="navbar-brand" href="#">
                        <img className="logoImage" src={Logo} alt=""/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse smallScreenDesign" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ulClass">
                            <li className="nav-item">
                                <a className="navlink active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="navlink" href="/about">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="navlink" href="/contact">Contact Us</a>
                            </li>
                        </ul>
                        <form className="d-flex navbarIcons">
                                <MessageIcon style={NavIcon} />
                                <NotificationsIcon style={NavIcon} />
                                 <ShoppingCartIcon style={NavIcon} />
                            <a className="" href="/">
                                <Person2Icon style={NavIcon} />
                            </a>
                        </form>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default NavbarDashBoard;