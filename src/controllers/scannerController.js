import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import Webcam from "react-webcam";

export const ScannerController = (webcamRef) => {
  const navigate = useNavigate();

  
  const goToVerificationScreen = () => {
    if (webcamRef.current) { // Ensure webcamRef is not null before accessing its methods
      const imageSrc = webcamRef.current.getScreenshot(); 
      if (imageSrc) {
        localStorage.setItem('capturedImage', imageSrc); 
      } else {
        console.error("Failed to capture image.");
      }
    } else {
      console.error("Webcam reference is null.");
    }
    navigate('/verification', { replace: false });
  };


  return { goToVerificationScreen }; // Export the function
};
