// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginScreen from './components/login/LoginScreen';
import MainMenuScreen from './components/MainMenuScreen/MainMenuScreen';
import DetailMenuScreen from './components/DetailMenuScreen/DetailMenuScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/main-menu" element={<MainMenuScreen />} />
        <Route path="/detail-menu" element={<DetailMenuScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
