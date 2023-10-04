/* eslint-disable no-unused-vars */
import apiCall from './api';

const testUser = {
  id: 1,
  username: 'test',
  email: 'test@test.com',
  token: 'test'
};

export const signUp = async data => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(testUser);
    }, 1000);
  });
};

export const signIn = async data => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(testUser);
    }, 1000);
  });
};