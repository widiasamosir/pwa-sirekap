import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import './Header.css';
import BackButton from '../BackButton/BackButton';

const Header = ({ title, onNavigateBack }) => {
  return (
    <header className="scanner-header">
      <BackButton className="back-button" size="24px" onClick={onNavigateBack} />
      <h1 className="header-title">{title}</h1>
      <div className="header-spacer"></div> {/* Spacer element */}
    </header>
  );
};

export default Header;
