import { useState } from 'react';
import { login as modelLogin } from '../models/loginModel';
import { useNavigate } from 'react-router-dom';

export const useLoginController = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const navigate = useNavigate(); // Corrected hook name to useNavigate

  const handleLogin = async () => {
    try {
      const response = await modelLogin(username, password);
      setLoginStatus(response);
      console.log(response); // Check if response is 'success'
      // If login is successful, navigate to MainMenuScreen
      if (response === 'success') {
        console.log("Login successful"); // Check if this log is printed
        navigate('/main-menu', { replace: true }); // Corrected navigation syntax
      }
      
    } catch (error) {
      setLoginStatus(error);
    }
  };

  return {
    username,
    password,
    setUsername,
    setPassword,
    handleLogin,
    loginStatus
  };
};
