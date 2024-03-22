import React, { useState, useEffect } from 'react';
import VerificationPart1Screen from './VerificationPart1Screen/VerificationPart1Screen';
import VerificationPart2Screen from './VerificationPart2Screen/VerificationPart2Screen';
import VerificationPart3Screen from './VerificationPart3Screen/VerificationPart3Screen';
import FinalVerificationScreen from './FinalVerificationScreen/FinalVerificationScreen';
import VerificationController from '../../controllers/verificationDataController';
import VerificationModel from '../../models/verificationDataModel';
import Header from '../Header/Header';
import Button from 'react-bootstrap/Button';
import ConfirmDialogScreen from '../ConfirmDialog/ConfirmDialogScreen';
import { useNavigate } from 'react-router-dom';

const VerificationDataScreen = () => {
  const currentPage = localStorage.getItem('currentlyScanPage');

  // Initialize form data based on currentPage
  const [formData1, setFormData1] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    input7: '',
    input8: '',
    input9: '',
    input10: '',
    input11: '',
    input12: '',
  });

  const [formData2, setFormData2] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    input7: '',
  });

  const [formData3, setFormData3] = useState({
    input1: '',
    input2: '',
    input3: '',
  });

  const [formDataFinal, setFormDataFinal] = useState({
    input1: '',
    input2: '',
    input3: '',
  });

  useEffect(() => {
    // Load form data from localStorage based on currentPage
    const savedFormData = JSON.parse(localStorage.getItem(`formData${currentPage}`));
    if (savedFormData) {
      setFormData1(savedFormData.step1 || formData1);
      setFormData2(savedFormData.step2 || formData2);
      setFormData3(savedFormData.step3 || formData3);
      setFormDataFinal(savedFormData.step4 || formDataFinal);
    }
  }, [currentPage]);

  const { formData, setFormData } = VerificationModel();
  const [step, setStep] = useState(1);
  const controller = VerificationController();
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showSubmitAllDialog, setShowSubmitAllDialog] = useState(false); // New state for submit all data dialog
  const navigate = useNavigate();

  const nextStep = () => {
    if (controller.validateStep(step, formData)) {
      // Show the confirm dialog before proceeding to the next step
      setShowConfirmDialog(true);
    }
  };

  const prevStep = () => {
    localStorage.removeItem('currentlyScanPage');
    navigate(-1, { replace: true });
  };


  const handleConfirm = () => {
    // Save form data to localStorage
    const formData = {
      step1: formData1,
      step2: formData2,
      step3: formData3,
      step4: formDataFinal
    };
    localStorage.setItem(`formData${currentPage}`, JSON.stringify(formData));
    
    // Hide the confirmation dialog
    setShowConfirmDialog(false);
    localStorage.removeItem('currentlyScanPage');
    navigate('/main-menu', { replace: true });
    
  };

  const handleCancel = () => {
    setShowConfirmDialog(false);
    localStorage.removeItem('currentlyScanPage');
  };

  const handleGoBack = () => {
    localStorage.removeItem('currentlyScanPage');
    navigate(-1, { replace: true }); // Go back to the previous route
    
  };


  return (
    <div className="verification-screen">
      <Header title="Verifikasi Data" onNavigateBack={handleGoBack} />

      {currentPage === '1' && (
        <>
          <VerificationPart1Screen formData={formData1} setFormData={setFormData1} />
          <VerificationPart2Screen formData={formData2} setFormData={setFormData2} />
        </>
      )}
      {currentPage === '2' && (
        <VerificationPart3Screen formData={formData3} setFormData={setFormData3} />
      )}
      {currentPage === '3' && (
        <FinalVerificationScreen formData={formDataFinal} setFormData={setFormDataFinal} />
      )}

        <Button className="action-back-button" onClick={prevStep}>Kembali</Button> 
        <Button className="action-button" onClick={nextStep}>Kirim</Button>
      {showConfirmDialog && (
        <ConfirmDialogScreen
          title="Are you sure you want to proceed this data?"
          cancelButtonText="Cancel"
          submitButtonText="Yes"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
     
      <footer className="scanner-footer">
        <h2>Petunjuk</h2>
        <p>Verifikasi data yang ditampilkan dengan data pada form-c yang sebelumnya diupload.</p>
      </footer>
    </div>
  );
};

export default VerificationDataScreen;
