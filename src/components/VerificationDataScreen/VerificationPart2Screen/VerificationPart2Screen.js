// VerificationPart1Screen.js
import React, { useState } from 'react';
import './VerificationPart2Screen.css';

const VerificationPart1Screen = ({ formData, setFormData }) => {


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="verification-part1-screen">
      <div className="sub-title-2">
      <div>Halaman 1 part II & III</div>
      <div className="description"> Verifikasi data dengan Form-C </div>
      </div>

      <div className="form-title">
      Data Penggunaan Surat Suara
      </div>
      
      <div className="row-2">
      
        <div className="column-2">
          <div className='data-title'>Jumlah yang diterima</div>
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
          <div className='data-title'>Jumlah yang digunakan</div>
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
          <div className='data-title'>Jumlah yang dikembalikan</div>
          <input
            type="number"
            name="input3"
            value={formData.input3}
            onChange={handleChange}
          />
        </div>
      
      </div>

      <div className="row-2">
      
        <div className="column-2">
          <div className='data-title'>Jumlah yang tidak digunakan</div>
          <input
            type="number"
            name="input4"
            value={formData.input4}
            onChange={handleChange}
          />
        </div>
      
      </div>

      <div className="form-title">
      Data Pemilih Disabilitas
      </div>
      

      <div className="row-2">
        <div className="column-div-3">
          <div className='data-title'>Laki-Laki</div>
          <input
            type="number"
            name="input5"
            value={formData.input5}
            onChange={handleChange}
          />
        </div>
        <div className="column-div-3">
          <div className='data-title'>Perempuan</div>
          <input
            type="number"
            name="input6"
            value={formData.input6}
            onChange={handleChange}
          />
        </div>
        <div className="column-div-3">
          <div className='data-title'>Total</div>
          <input
            type="number"
            name="input7"
            value={formData.input7}
            onChange={handleChange}
          />
        </div>
      </div>

    </div>
  );
};

export default VerificationPart1Screen;
