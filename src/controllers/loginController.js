import { useState } from 'react';
import { login as modelLogin } from '../models/loginModel';
import { useNavigate } from 'react-router-dom';

export const useLoginController = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { userId, tpsCode, role } = await modelLogin(username, password);
      localStorage.setItem('userId', userId);
      localStorage.setItem('tpsCode', tpsCode);
      localStorage.setItem('role', role);

      setLoginStatus('success');

      navigate('/main-menu', { replace: true });
    } catch (error) {
      setLoginStatus(error);
      console.error('Login failed:', error);
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
