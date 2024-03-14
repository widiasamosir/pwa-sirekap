// ScannerScreen.js
import React, { useEffect } from 'react';
import Webcam from "react-webcam";
import './ScannerScreen.css';
import {ScannerController} from '../../controllers/scannerController';
import Header from '../Header/Header';


const handleNavigateBack = () => {
  console.log('Navigating to the previous screen...'); // Replace with actual navigation logic
};


const videoConstraints = {
  width: 320,
  height: 506,
  facingMode: "environment"
};

export const ScannerScreen = () => {
  const { goToVerificationScreen } = ScannerController();
  return (
    <div className="scanner-screen">
      <Header title="Scan Form C" onNavigateBack={handleNavigateBack} />
      <Webcam
        audio={false}
        height={videoConstraints.height}
        width={videoConstraints.width}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        className="webcam-view"
      />
      <footer className="scanner-footer">
        <button onClick={goToVerificationScreen}>Skip this Scan</button>
        <h2>Petunjuk</h2>
        <p>Scan Form C berlangsung secara otomatis apabila dokumen telah terdeteksi melalui bingkai dokumen. Mohon tunggu hingga proses selesai.</p>
      </footer>
    </div>
  );
};

export default ScannerScreen;
