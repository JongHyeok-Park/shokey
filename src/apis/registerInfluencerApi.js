const registerInfluencer = async ({ userId, channelId, subscribers, niche, profileImage }) => {
	const res = await fetch(import.meta.env.VITE_APP_API_URL + '/api/influencers', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json',
	  },
	  credentials: 'include',
	  body: JSON.stringify({
      userId,
      channelId,
      subscribers,
      niche,
      profileImage,
	  }),
	});

	if (!res.ok) {
	  const message = await res.json().statusMsg;
	  throw new Error(message);
	}

	return res.json();
  };

  export default registerInfluencer;