async function fetchAPI(endpoint, options = {}) {
  const url = import.meta.env.VITE_APP_API_URL+'/api/'+endpoint;
  const res = await fetch(url, options);

  if (!res.ok) {
    const message = await res.json();
    throw new Error(message);
  }

  return res.json();
}

export const postLogin = async ({id, password}) => {
  return fetchAPI('login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, password }),
  });
}

export const postReissue = async () => {
  return fetchAPI('reissue', {
    method: 'POST',
    credentials: 'include',
  });
}