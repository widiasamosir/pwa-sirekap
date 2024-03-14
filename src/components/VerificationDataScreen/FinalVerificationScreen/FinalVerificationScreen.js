
import React, {useState} from 'react';

const FinalVerificationScreen = ({ formData, setFormData }) => {


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="verification-part1-screen">
      <div className="sub-title-2">
      <div>Halaman 3</div>
      <div className="description"> Verifikasi data dengan Form-C </div>
      </div>

      <div className="form-title">
      Jumlah suara
      </div>
      
      <div className="row-2">
      
        <div className="column-2">
          <div className='data-title'>Sah</div>
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
          <div className='data-title'>Tidak Sah</div>
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
          <div className='data-title'>Keseluruhan</div>
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

export default FinalVerificationScreen;
