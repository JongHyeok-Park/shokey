import { useCookies } from 'react-cookie';
import { postRefresh } from '../apis/authApi';

export const useRefresh = () => {
  const [, setCookie, ] = useCookies(['accessToken', 'refreshToken']);
  const accessTokenExpiration = 2 * 60 * 60 * 1000;
  const refreshTokenExpiration = 7 * 24 * 60 * 60 * 1000;

  const refresh = async () => {
    try {
      const response = await postRefresh();
      console.log(response.statusMsg);

      if (response.status !== 2019) {
        console.log(response.statusMsg);
        alert(response.statusMsg);
        return;
      }

      const result = await response.json();

      setCookie('accessToken', result.data.accessToken, {
        path: '/',
        expires: new Date(Date.now() + accessTokenExpiration)
      });
      setCookie('refreshToken', result.data.refreshToken, {
        path: '/',
        expires: new Date(Date.now() + refreshTokenExpiration )
      });

      console.log(response.statusMsg);
      return;
    } catch (error) {
      console.log('access token 재발급에 실패하였습니다.', error);
      alert('access token 재발급에 실패하였습니다.', error);
      return;
    }
  };

  return { refresh };
}