// src/controllers/MainMenuController.js
import React, { useState, useEffect } from 'react';
import { getMenuData } from '../models/mainMenuModel';
import MainMenuView from '../views/MainMenuView';

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
