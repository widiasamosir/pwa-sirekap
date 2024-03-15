import { fetchDetailData } from '../models/detailPemilihanModel';
import { useNavigate } from 'react-router-dom';

export const fetchAndMapDetailData = async () => {
  try {
    const data = await fetchDetailData();
    
    
    const mappedData = {
      dataPage1: {
        isScan: localStorage.getItem('isScanPage1') || false,
        isUpload: data.dataPage1.upload,
        isVerified: data.dataPage1.verified
      },
      dataPage2: {
        isScan: localStorage.getItem('isScanPage2') || false,
        isUpload: data.dataPage2.upload,
        isVerified: data.dataPage2.verified
      },
      dataPage3: {
        isScan: localStorage.getItem('isScanPage3') || false,
        isUpload: data.dataPage3.upload,
        isVerified: data.dataPage3.verified
      }
    };

    return mappedData;
  } catch (error) {
    console.error(error);
    return null;
  }
};
