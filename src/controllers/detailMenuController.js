
import { fetchDetailData } from '../models/detailMenuModel';

export const fetchAndMapDetailData = async () => {
  try {
    const data = await fetchDetailData();
    return mapDetailData(data);
  } catch (error) {
    console.error(error);
    return null;
  }
};

const mapDetailData = (data) => {
    return {
      totalNotUploaded: data.totalNotUploaded,
      totalUploaded: data.totalUploaded,
      totalVerified: data.totalVerified
      // Add more mappings as needed
    };
  };