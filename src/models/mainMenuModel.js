// src/models/MainMenuModel.js

// Placeholder function for fetching data
export const getMenuData = async () => {
    // This would be replaced with actual API call logic
    return {
      sections: [
        { title: "Main", active: true },
        { title: "Detail", active: false },
        // Add more sections if needed
      ],
      // ...other data
    };
  };

  export const fetchData = async () => {
  const BASE_URL = 'http://localhost:7000'
  const ENDPOINT = '/tps/v1/search-by-code/';

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
        throw new Error('Failed to fetch data');
      }
      const responseData = await response.json();
      const data = responseData.data; // Accessing the data property
      return data;
    } catch (error) {
      throw new Error('Error fetching data: ' + error.message);
    }
  };