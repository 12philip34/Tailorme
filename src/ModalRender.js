import React, {useState} from 'react';
import Modal from './Pages/Modal';
import './App.css';

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        console.log("is open")
    }
    return (
        <div className="App">
            <Modal isOpen={isModalOpen} toggleModal={toggleModal} closeOnOutsideClick={true}>
                <div className="content">
                    Your content here...
                </div>
                <button className="closeBtn" onClick={toggleModal}>ok</button>
            </Modal>
            <button className="button" onClick={toggleModal}>Open Modal</button>
        </div>
    );
}
export default App;