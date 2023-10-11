/* eslint-disable no-unused-vars */
import apiCall from './api';

export const getAllProducts = async data => {
  return await apiCall({
    url: '/api/products',
    method: 'GET',
    data
  });
};

export const createNewProduct = async data => {
  return await apiCall({
    url: '/api/products',
    method: 'POST',
    data
  });
};

export const updateProduct = async data => {
  return await apiCall({
    url: '/api/product/:name',
    method: 'PUT',
    data
  });
};