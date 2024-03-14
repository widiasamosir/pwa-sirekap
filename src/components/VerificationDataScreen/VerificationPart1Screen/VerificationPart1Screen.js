// VerificationPart1Screen.js
import React, { useState } from 'react';
import './VerificationPart1Screen.css'; // Import your CSS file for styling

const VerificationPart1Screen = ({ formData, setFormData }) => {


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="verification-part1-screen">
      <div className="sub-title">
      <div>Halaman 1 part I</div>
      <div className="description"> Verifikasi data dengan Form-C </div>
      </div>

      <div className="form-title">
      Data Pemilih
      </div>
      
      <div className="row-form">
      
        <div className="column-form">
          <div className='data-title'>Laki-Laki</div>
          <input
            type="number"
            name="input1"
            value={formData.input1}
            onChange={handleChange}
          />
        </div>
        <div className="column-form">
          <div className='data-title'>Perempuan</div>
          <input
            type="number"
            name="input2"
            value={formData.input2}
            onChange={handleChange}
          />
        </div>
        <div className="column-form">
          <div className='data-title'>Total</div>
          <input
            type="number"
            name="input3"
            value={formData.input3}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-title">
      Pengguna Hak Pilih
      <div className="form-title-2">
      DPT
      </div>
      </div>
      

      <div className="row-form">
        <div className="column-form">
          <div className='data-title'>Laki-Laki</div>
          <input
            type="number"
            name="input4"
            value={formData.input4}
            onChange={handleChange}
          />
        </div>
        <div className="column-form">
          <div className='data-title'>Perempuan</div>
          <input
            type="number"
            name="input5"
            value={formData.input5}
            onChange={handleChange}
          />
        </div>
        <div className="column-form">
          <div className='data-title'>Total</div>
          <input
            type="number"
            name="input6"
            value={formData.input6}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-title-3">
      DPTb
      </div>
      <div className="row-form">
        <div className="column-form">
          <div className='data-title'>Laki-Laki</div>
          <input
            type="number"
            name="input7"
            value={formData.input7}
            onChange={handleChange}
          />
        </div>
        <div className="column-form">
          <div className='data-title'>Perempuan</div>
          <input
            type="number"
            name="input8"
            value={formData.input8}
            onChange={handleChange}
          />
        </div>
        <div className="column-form">
          <div className='data-title'>Total</div>
          <input
            type="number"
            name="input9"
            value={formData.input9}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-title-3">
      DPTb
      </div>
      <div className="row-form">
        <div className="column-form">
          <div className='data-title'>Laki-Laki</div>
          <input
            type="number"
            name="input10"
            value={formData.input10}
            onChange={handleChange}
          />
        </div>
        <div className="column-form">
          <div className='data-title'>Perempuan</div>
          <input
            type="number"
            name="input11"
            value={formData.input11}
            onChange={handleChange}
          />
        </div>
        <div className="column-form">
          <div className='data-title'>Total</div>
          <input
            type="number"
            name="input12"
            value={formData.input12}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default VerificationPart1Screen;
