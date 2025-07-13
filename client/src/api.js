
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const apiFetch = async (endpoint, options = {}) => {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    credentials: 'include', // if using cookies/auth
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || 'API error');
  }
  return data;
};
