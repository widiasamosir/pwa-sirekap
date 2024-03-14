import React, { useState } from 'react';

const VerificationPart3Screen = ({ formData, setFormData }) => {

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="verification-part1-screen">
      <div className="sub-title-2">
      <div>Halaman 2</div>
      <div className="description"> Verifikasi data dengan Form-C </div>
      </div>

      <div className="form-title">
      Jumlah suara
      </div>
      
      <div className="row-2">
      
        <div className="column-2">
          <div className='data-title'>Paslon I</div>
          <input
            type="number"
            name="input1"
            value={formData.input1}
            onChange={handleChange}
          />
        </div>
      
      </div>

      <div className="row-2">
      
        <div className="column-2">
          <div className='data-title'>Paslon II</div>
          <input
            type="number"
            name="input2"
            value={formData.input2}
            onChange={handleChange}
          />
        </div>
      
      </div>

      <div className="row-2">
      
        <div className="column-2">
          <div className='data-title'>Paslon III</div>
          <input
            type="number"
            name="input3"
            value={formData.input3}
            onChange={handleChange}
          />
        </div>
      
      </div>

      
    </div>
  );
};

export default VerificationPart3Screen;
