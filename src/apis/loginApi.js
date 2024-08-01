async function fetchAPI(endpoint, options = {}) {
  const url = import.meta.env.VITE_APP_API_URL+'/api/auth/'+endpoint;
  const res = await fetch(url, options);

  if (!res.ok) {
    const message = await res.json();
    throw new Error(message);
  }

  return res.json();
}

export const postLogin = async ({userId, userPassword}) => {
  return fetchAPI('login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, userPassword }),
  });
}

export const postReissue = async () => {
  return fetchAPI('refresh', {
    method: 'POST',
    credentials: 'include',
  });
}