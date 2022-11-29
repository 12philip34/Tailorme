import React, {useState} from 'react';
import Modal from './Pages/Modal';
import  './App.css'

const ModalRender = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }
    return (
        <div className="App">
            <Modal isOpen={isModalOpen} toggleModal={toggleModal} closeOnOutsideClick={true}>
                <div className="content">
                    <h4>Your content here...</h4>
                    <p>This is a dynamic modal!!</p>
                </div>
            </Modal>
            <button className="button" onClick={toggleModal}>Open Modal</button>
        </div>
    );
}
export default ModalRender;