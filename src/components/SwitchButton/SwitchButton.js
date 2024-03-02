// src/components/SwitchButton.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './SwitchButton.css'; // Import the accompanying CSS file

const SwitchButton = () => {
  return (
    <div className="switch-container">
      <NavLink
        to="/main-menu"
        className={({ isActive }) => (isActive ? 'switch-btn active' : 'switch-btn')}
      >
        Main
      </NavLink>
      <NavLink
        to="/detail-menu"
        className={({ isActive }) => (isActive ? 'switch-btn active' : 'switch-btn')}
      >
        Detail
      </NavLink>
    </div>
  );
};

export default SwitchButton;
