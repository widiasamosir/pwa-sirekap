
import { fetchDetailData } from '../models/detailMenuModel';
import { useNavigate } from 'react-router-dom';
export const fetchAndMapDetailData = async () => {
  try {
    const data = await fetchDetailData();
    return mapDetailData(data);
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const HandleScan = () => {
    const navigate = useNavigate();
    
    return () => {
      navigate('/scanner', { replace: false });
    };
  };
const mapDetailData = (data) => {
    return {
      totalNotUploaded: data.totalNotUploaded,
      totalUploaded: data.totalUploaded,
      totalVerified: data.totalVerified
      // Add more mappings as needed
    };
  };