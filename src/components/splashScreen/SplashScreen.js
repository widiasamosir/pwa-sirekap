// src/components/SplashScreen.js
import React from 'react';
import { useSplashScreenController } from '../../controllers/splashScreenController';

const SplashScreen = () => {
  const { data } = useSplashScreenController();
//   console.log("data.logoSrc:", data.title);
  if (!data) return null;

  return (
    <div className="splashScreen">
      <div className="splashScreen_logo">
        <img src={require('../../assets/logo.png')} alt="Logo"  /> 
      </div>
      <h1  className="splashScreen_title">{data.title}</h1>
    </div>
  );
};

export default SplashScreen;
