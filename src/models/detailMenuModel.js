// detailMenuModel.js

export const fetchDetailData = async () => {
    try {
      const cachedTpsCode = localStorage.getItem('tpsCode');
      const token = localStorage.getItem('token');

      const response = await fetch(`http://localhost:7000/form-c/v1/details/${cachedTpsCode}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch detail data');
      }
      const responseData = await response.json();
      const detailData = responseData.data; // Assuming the data is under 'data' property
      return detailData;
    } catch (error) {
      throw new Error('Error fetching detail data: ' + error.message);
    }
  };
  