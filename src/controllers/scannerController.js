import { useNavigate } from 'react-router-dom';

export const ScannerController = () => {
  const navigate = useNavigate();

  const goToVerificationScreen = () => {
    navigate('/verification', { replace: false });
  };

  return { goToVerificationScreen }; // Export the function
};
