/* eslint-disable no-unused-vars */
import apiCall from './api';

export const getAllProducts = async data => {
  return await apiCall({
    url: '/api/products',
    method: 'GET',
    data
  });
};

export const getProduct = async (name, data) => {
  return await apiCall({
    url: `/api/products/${name}`,
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

export const updateProduct = async ( data) => {
  console.log('updateProduct',data)
  return await apiCall({
    url: `/api/product/${data.name}`,
    method: 'PUT',
    data
  });
};