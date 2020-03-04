import React from 'react';
import Modal from 'react-modal';
import './index.scss';

const Footer = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const handleOpenModal = (): void => {
    setIsOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsOpen(false);
  };

  return (
    <div className="Footer-Wrapper">
      <Modal className="Modal" isOpen={modalIsOpen} contentLabel="onRequestClose Example" onRequestClose={handleCloseModal} style={modalStyle}>
        <h1 className="Modal-Heading">About</h1>
        <p className="Modal-Text">This is a learning project that uses the openweathermap's API to provide current weather data and forecast for the next 5 days. Technologies used: HTML, SCSS/CSS, JavaScript/Typescript, and React.</p>
        <button className="Modal-Close" onClick={handleCloseModal}>
          CLOSE
        </button>
      </Modal>
      <a onClick={handleOpenModal}>About</a>
      <a href="https://github.com/Beeek3r">
        <i className="fab fa-github" /> Github
      </a>
    </div>
  );
};

export default Footer;

const modalStyle: any = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)'
  }
};
