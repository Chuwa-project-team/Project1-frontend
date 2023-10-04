/* eslint-disable no-unused-vars */
import apiCall from './api';

// export const signUp = async data => {
//   return await apiCall({
//     url: '/api/auth/signup',
//     method: 'POST',
//     data
//   });
// };

// export const signIn = async data => {
//   return await apiCall({
//     url: '/api/auth/signin',
//     method: 'POST',
//     data
//   });
// };

const testUser = {
    id: '6515f8d1ada7d28f635da35d',
    username: 'username1',
    email: 'test1@test.com',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTVmOGQxYWRhN2QyOGY2MzVkYTM1ZCIsInVzZXJuYW1lIjoidXNlcm5hbWUxIiwiZW1haWwiOiJ0ZXN0MUB0ZXN0LmNvbSIsInJvbGUiOjAsImlhdCI6MTY5NjE1OTc1Nn0.hiKMU98iMBdvjGQ0qn7yTUJlJbNScIXkMiCREUfyzQU'
  };
  
  export const signUp = async data => {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(testUser);
      }, 100);
    });
  };
  
  export const signIn = async data => {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(testUser);
      }, 100);
    });
  };