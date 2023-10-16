const BASE_URL = 'http://localhost:3050';

export default async function apiCall({ url: apiUrl, method, data, headers }) {
  const url = new URL(apiUrl, BASE_URL).href;
  const defaultHeaders = {
    'Content-Type': 'application/json'
  };
  const user = JSON.parse(localStorage.getItem('user'));
  if (user?.token) {
    defaultHeaders['Authorization'] = `Bearer ${user.token}`;
  }
  const response = await fetch(url, {
    method,
    headers: {
      ...defaultHeaders,
      ...headers
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    
    const  error  = await response.json();

    throw new Error({message: error.message});
  }
  const result = await response.json();
  return result;
}