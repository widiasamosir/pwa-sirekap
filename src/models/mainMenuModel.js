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
    try {
      const response = await fetch('http://localhost:7000/tps/v1/search-by-id/43', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
          // Add any additional headers if required
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