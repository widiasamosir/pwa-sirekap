import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginScreen from './components/login/LoginScreen';
import MainMenuScreen from './components/MainMenuScreen/MainMenuScreen';
import DetailMenuScreen from './components/DetailMenuScreen/DetailMenuScreen';
import ScannerScreen from './components/ScannerScreen/ScannerScreen';
import VerificationDataScreen from './components/VerificationDataScreen/VerificationDataScreen';
import DetailPemilihanScreen from './components/DetailPemilihanScreen/DetailPemilihanScreen';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(token ? true : false);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/main-menu" />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route
          path="/main-menu"
          element={isLoggedIn ? <MainMenuScreen /> : <Navigate to="/login" />}
        />
        {isLoggedIn && (
          <>
            <Route path="/detail-menu" element={<DetailMenuScreen />} />
            <Route path="/scanner" element={<ScannerScreen />} />
            <Route path="/verification" element={<VerificationDataScreen />} />
            <Route path="/detail-pemilihan" element={<DetailPemilihanScreen />} />
          </>
        )}
        {!isLoggedIn && <Route path="*" element={<Navigate to="/" replace />} />}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
