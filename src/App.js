import React, { useEffect,useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginScreen from './components/login/LoginScreen';
import MainMenuScreen from './components/MainMenuScreen/MainMenuScreen';
import DetailMenuScreen from './components/DetailMenuScreen/DetailMenuScreen';
import ScannerScreen from './components/ScannerScreen/ScannerScreen';
import VerificationDataScreen from './components/VerificationDataScreen/VerificationDataScreen';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(token ? true : false);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={isLoggedIn ? <Navigate to="/main-menu" /> : <LoginScreen />} />
        <Route path="/main-menu" element={<MainMenuScreen />} />
        <Route path="/detail-menu" element={<DetailMenuScreen />} />
        <Route path="/scanner" element={<ScannerScreen />} />
        <Route path="/verification" element={<VerificationDataScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
