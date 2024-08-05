const API_BASE_URL = import.meta.env.VITE_APP_API_URL;

const fetchAPI = async (endpoint, options = {}) => {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, options);

  if (!res.ok) {
    const message = await res.json();
    throw new Error(message.statusMsg);
  }

  return res.json();
};

const getUserInfo = (id) =>
  fetchAPI(`/api/users/${id}`, {
    method: 'GET',
  });

const getMyInfo = (accessToken) =>
  fetchAPI(`/api/me`, {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${accessToken}` },
  });

const patchUserInfo = ({ changedData, id, accessToken }) =>
  fetchAPI(`/api/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify(changedData),
  });

const deleteUserInfo = (accessToken) =>
  fetchAPI(`/api/users`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${accessToken}` },
  });

export {
  getMyInfo,
  getUserInfo,
  patchUserInfo,
  deleteUserInfo,
};