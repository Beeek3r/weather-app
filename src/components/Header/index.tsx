import React from 'react';
import './index.scss';

const Header = () => {
  return (
    <div className="Header-Wrapper">
      <h1 className="Heading">
        <i className="fas fa-cloud-sun " /> Weather App
      </h1>
      <p className="Slogan">stay ahead of the weather</p>
    </div>
  );
};

export default Header;
