// src/controllers/splashScreenController.js
import { useEffect, useState } from 'react';
import { getSplashScreenData } from '../models/splashScreenModel';

export const useSplashScreenController = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Initializing data could be more complex in a real-world scenario
    const initData = getSplashScreenData();
    setData(initData);
  }, []);

  // Return the data and any methods needed for interaction
  return {
    data
  };
};
