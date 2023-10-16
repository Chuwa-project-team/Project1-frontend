import apiCall from './api';

export const validateCoupon = async (code, data) => {
  return await apiCall({
    url: `/api/coupon/${code}`,
    method: 'GET',
    data
  });
};