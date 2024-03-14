import React from 'react';
import './ConfirmDialogScreen.css';

const ConfirmDialogScreen = ({ onConfirm, onCancel }) => {
  return (
    <div className="confirm-dialog-screen">
      <div className="dialog-box">
        <h1 className="dialog-title">Are you sure the data is correct?</h1>
        <div className="dialog-actions">
          <button className="cancel-button" onClick={onCancel}>Cancel</button>
          <button className="submit-button" onClick={onConfirm}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialogScreen;
