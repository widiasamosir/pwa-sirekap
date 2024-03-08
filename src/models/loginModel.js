export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    // Create the request body
    const requestBody = {
      username: username,
      password: password
    };

    // Make the HTTP POST request
    fetch('http://localhost:7000/user/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
    .then(response => {
      // Check if the response is successful
      if (response.ok) {
        // Resolve with success message
        resolve('success');
      } else {
        // If response is not successful, reject with error message
        reject('Invalid credentials');
      }
    })
    .catch(error => {
      // If there's an error making the request, reject with error message
      reject('Error occurred while logging in');
    });
  });
};
