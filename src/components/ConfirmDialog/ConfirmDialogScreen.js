import React from 'react';
import './ConfirmDialogScreen.css';

const ConfirmDialogScreen = ({ title, cancelButtonText, submitButtonText, onConfirm, onCancel }) => {
  return (
    <div className="confirm-dialog-screen">
      <div className="dialog-box">
        <h1 className="dialog-title">{title}</h1>
        <div className="dialog-actions">
          <button className="cancel-button" onClick={onCancel}>{cancelButtonText}</button>
          <button className="submit-button" onClick={onConfirm}>{submitButtonText}</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialogScreen;