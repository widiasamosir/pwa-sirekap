// src/models/loginModel.js

export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    // API call to login would go here. For now we simulate an API call with a timeout.
    setTimeout(() => {
      if (username === 'user' && password === 'pass') {
        resolve('success');
      } else {
        reject('invalid');
      }
    }, 1000);
  });
};
