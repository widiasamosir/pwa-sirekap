import React, { useEffect, useState, useRef } from 'react';
import Webcam from "react-webcam";
import './ScannerScreen.css';
import { ScannerController } from '../../controllers/scannerController';
import Header from '../Header/Header';
import ScanPageDialog from '../ScanPageDialog/ScanPageDialog';
import { useNavigate } from 'react-router-dom';


const videoConstraints = {
  width: 320,
  height: 506,
  facingMode: "environment"
};

const ScannerScreen = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogShown, setDialogShown] = useState(false); // New state to track if the dialog has been shown
  const navigate = useNavigate();
  const webcamRef = useRef(null); 

  useEffect(() => {
    // Show the dialog when the component mounts and if it has not been shown before
    if (!dialogShown) {
      setShowDialog(true);
      setDialogShown(true); // Mark dialog as shown
    }
  }, [dialogShown]); // Rerun effect when dialogShown state changes

  const handleCancel = () => {
    console.log("Dialog canceled");
    setShowDialog(false);
    navigate(-1, { replace: true }); // Navigate to -1 with replace true when cancel button clicked
  };

  const handleOptionSelected = (optionLabel) => {
    setShowDialog(false); // Close dialog after option selected
  };

  const options = [
    { label: "Halaman 1", value: 1},
    { label: "Halaman 2" , value: 2},
    { label: "Halaman 3", value: 3}
  ];
  const { goToVerificationScreen } = ScannerController(webcamRef);

  const handleNavigateBack = () => {
    localStorage.removeItem(`currentlyScanPage`);
    navigate(-1, {replace: true}); // Go back to the previous route
  };
  return (
    <div className="scanner-screen">
      <Header title="Scan Form C" onNavigateBack={handleNavigateBack} />
      {showDialog && (
        <ScanPageDialog
          title="Pilih Halaman yang akan dipindai"
          options={options}
          onCancel={handleCancel}
          onOptionSelected={handleOptionSelected} // Pass option selection handler to the dialog
        />
      )}
      {!showDialog && (
        <>
          
          <Webcam
            audio={false}
            height={videoConstraints.height}
            width={videoConstraints.width}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            className="webcam-view"
            ref={webcamRef}
          />
          <footer className="scanner-footer">
            <button className="action-button-scanner" onClick={goToVerificationScreen}>Pindai Dokumen</button>
            <h2>Petunjuk</h2>
            <p>Scan Form C berlangsung secara otomatis apabila dokumen telah terdeteksi melalui bingkai dokumen. Mohon tunggu hingga proses selesai.</p>
          </footer>
        </>
      )}
    </div>
  );
};

export default ScannerScreen;
