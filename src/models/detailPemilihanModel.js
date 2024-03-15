export const fetchDetailData = async () => {
    const BASE_URL = 'http://localhost:7000'
    const ENDPOINT = '/form-c/v1/status/';
      try {
        const cachedTpsCode = localStorage.getItem('tpsCode');
        const token = localStorage.getItem('token');
  
        const response = await fetch(`${BASE_URL}${ENDPOINT}${cachedTpsCode}`, {
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
        const detailData = responseData.data; 
        return detailData;
      } catch (error) {
        throw new Error('Error fetching detail data: ' + error.message);
      }
    };
    