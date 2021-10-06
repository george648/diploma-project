const token = process.env.REACT_APP_TOKEN;

export const fetchUtil = (apiParams, method, body = {}) => {
  const options = {
    method,
    headers: {},
  };

  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }

  if (method !== 'GET' || method !== 'DELETE') {
    options.headers['Content-type'] = 'application/json';
    options.body = body;
  }

  return fetch(`${process.env.REACT_APP_API_URL}${apiParams}`, options);
};