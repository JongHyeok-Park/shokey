import { useCookies } from 'react-cookie';
import { postRefresh } from '../apis/authApi';
import { useEffect } from 'react';

const useRefresh = () => {
  const [cookies, setCookie, ] = useCookies(['accessToken', 'refreshToken']);
  const accessTokenExpiration = 2 * 60 * 60 * 1000;
  const refreshTokenExpiration = 7 * 24 * 60 * 60 * 1000;

  useEffect(()=>{
	if (!cookies.accessToken) {
		refresh;
	}
  }, [cookies.accessToken])

  const refresh = async () => {
    try {
      const res = await postRefresh();
      console.log(res.statusMsg);
    } catch (error) {
      console.log(error.message);
      alert(error.message);
      return;
    }

    setCookie('accessToken', res.data.accessToken, {
      path: '/',
      expires: new Date(Date.now() + accessTokenExpiration)
    });
    setCookie('refreshToken', res.data.refreshToken, {
      path: '/',
      expires: new Date(Date.now() + refreshTokenExpiration )
    });
  };
}

export default useRefresh;