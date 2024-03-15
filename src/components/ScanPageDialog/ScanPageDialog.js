import React from 'react';
import './ScanPageDialog.css';

const ScanPageDialog = ({ title, options, onCancel, onOptionSelected }) => {
  const handleOptionSelected = (page) => {

    localStorage.setItem(`currentlyScanPage`, page);
    onOptionSelected(); // Close dialog after option selected
  };

  return (
    <div className="confirm-dialog-screen">
      <div className="dialog-box">
        <h1 className="dialog-title">{title}</h1>
        <div className="options-container">
          {options.map((option, index) => (
            <div className="option-row" key={index} onClick={() => handleOptionSelected(option.value)}>
              <button className="option-button">
                {option.label}
              </button>
            </div>
          ))}
        </div>
        <div className="dialog-actions">
          <button className="cancel-button" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default ScanPageDialog;
