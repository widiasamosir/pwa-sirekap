export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    // Create the request body
    const requestBody = {
      username: username,
      password: password
    };
    const BASE_URL = 'https://0477-223-195-37-240.ngrok-free.app';
    const ENDPOINT = '/user/v1/login';
  
    // Make the HTTP POST request
    fetch(`${BASE_URL}${ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
    .then(response => {

      // Check if the response is successful
      if (response.ok) {
        // Parse JSON response
        return response.json();
      } else {
        // If response is not successful, reject with error message
        reject('Invalid credentials');
      }
    })
    .then(data => {
      // Check if data is available and complete
      if (data && data.data.status === 'SUCCESS' && data.data.userId && data.data.tpsCode && data.data.role && data.data.token) {
        // Resolve with userId and tpsCode
        resolve({
          userId: data.data.userId,
          tpsCode: data.data.tpsCode,
          role: data.data.role,
          token: data.data.token
        });
      } else {
        // If response data is incomplete, reject with error message
        reject('Incomplete response data');
      }
    })
    .catch(error => {
      // If there's an error making the request, reject with error message
      reject('Error occurred while logging in');
    });
  });
};
