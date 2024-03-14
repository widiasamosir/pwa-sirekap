// VerificationModel.js
import { useState } from 'react';

const VerificationModel = () => {
  const [formData, setFormData] = useState({
    step1: '',
    step2: '',
    step3: '',
    step4: ''
  });

  return {
    formData,
    setFormData
  };
};

export default VerificationModel;
