// src/controllers/MainMenuController.js
import React, { useState, useEffect } from 'react';
import { getMenuData, fetchData } from '../models/mainMenuModel';
import MainMenuView from '../components/MainMenuScreen/MainMenuScreen';
import { useNavigate } from 'react-router-dom';

export const MainMenuController = () => {
  const [sections, setSections] = useState([]);
  

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await getMenuData();
    setSections(data.sections);
  };

  

  const handleSectionClick = (index) => {
    // Handle the click event on a section
    const updatedSections = sections.map((section, i) => ({
      ...section,
      active: i === index,
    }));
    setSections(updatedSections);
  };

  // Pass data and event handlers to the view.
  return (
    <MainMenuView sections={sections} onSectionClick={handleSectionClick} />
  );
};
export const getKppsRole = () => {
  const role = localStorage.getItem('role');
  return role;
};

export const fetchAndMapData = async () => {
  try {
    const data = await fetchData();

    return mapDataToScreen(data);
  } catch (error) {
    console.error(error);
    // Handle error (e.g., show error message to user)
    return null;
  }
};


export const HandleScan = () => {
  const navigate = useNavigate();
  
  return () => {
    navigate('/scanner', { replace: false });
  };
};

const mapDataToScreen = (data) => {
  return {
    id: data.id,
    province: data.province,
    regency: data.regency,
    kelurahan: data.village,
    kecamatan: data.subdistrict,
    tpsName: data.tpsName,
    tpsCode: data.tpsCode,
    totalOriDptMale: data.totalOriDptMale,
    totalOriDptFemale: data.totalOriDptFemale,
    totalDptMale: data.totalDptMale,
    totalDptFemale: data.totalDptFemale,
    totalDptbMale: data.totalDptbMale,
    totalDptbFemale: data.totalDptbFemale,
    totalDpkMale: data.totalDpkMale,
    totalDpkFemale: data.totalDpkFemale,
    totalDpt: data.totalDpt,
    totalDptb: data.totalDptb,
    totalDpk: data.totalDpk
  };
};