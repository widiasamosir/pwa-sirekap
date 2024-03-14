// VerificationDataScreen.js
import React, { useState } from 'react';
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
  const { formData, setFormData } = VerificationModel();
  const [step, setStep] = useState(1);
  const controller = VerificationController();

  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  
  const nextStep = () => {
    if (controller.validateStep(step, formData)) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    setShowConfirmDialog(true);
  };
  const navigate = useNavigate();

  const handleConfirm = () => {
    const formData = {
      step1: formData1,
      step2: formData2,
      step3: formData3,
      step4: formDataFinal
    };

    controller.submitForm(formData);
    setShowConfirmDialog(false);
    
    navigate('/main-menu', { replace: true });
  };

  const handleCancel = () => {
    setShowConfirmDialog(false);
  };

  return (
    <div className="verification-screen">
        <Header title="Verifikasi Data"  />

      {step === 1 && (
        <VerificationPart1Screen formData={formData1} setFormData={setFormData1} />      )}
      {step === 2 && (
        <VerificationPart2Screen formData={formData2} setFormData={setFormData2} />      )}
      {step === 3 && (
         <VerificationPart3Screen formData={formData3} setFormData={setFormData3} />      )}
      {step === 4 && (
        <FinalVerificationScreen formData={formDataFinal} setFormData={setFormDataFinal} />      )}
        {step !== 1 && (
        <Button className="action-back-button" onClick={prevStep}>Kembali</Button>
        
      )}
      {step !== 4 && step === 1 && (
        <Button className="action-button-center" onClick={nextStep}>Lanjut</Button>
    )}
    {step !== 4 && step !== 1 && (
        <Button className="action-button" onClick={nextStep}>Lanjut</Button>
    )}
      
      {step === 4 && (
        <Button className="action-button" onClick={handleSubmit}>Kirim</Button>
        
      )}
      {showConfirmDialog && (
        <ConfirmDialogScreen onConfirm={handleConfirm} onCancel={handleCancel} />
      )}
      <footer className="scanner-footer">
        <h2>Petunjuk</h2>
        <p>Verifikasi data yang ditampilkan dengan data pada form-c yang sebelumnya diupload.</p>
      </footer>
    </div>
  );
};

export default VerificationDataScreen;
