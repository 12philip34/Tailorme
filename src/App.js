import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
// import Contact from './pages/Contact';
import About from './pages/About';
import ContactUs from './pages/contact/Contact';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
