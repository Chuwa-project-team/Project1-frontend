/* eslint-disable no-unused-vars */
import apiCall from './api';

export const getAllProducts = async data => {
  return await apiCall({
    url: '/api/products',
    method: 'GET',
    data
  });
};