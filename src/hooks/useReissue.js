import { useCookies } from 'react-cookie';
import { postReissue } from '../apis/auth';

export const useAuth = () => {
  const [, setCookie, ] = useCookies(['accessToken', 'refreshToken']);
  const accessTokenExpiration = 2 * 60 * 60 * 1000;
  const refreshTokenExpiration = 7 * 24 * 60 * 60 * 1000;

  const reissue = async () => {
    try {
      const response = await postReissue();

      if (response.status === 4001) { // 아직 api 명세서 안나왔음
        console.log(response.statusMsg);
        alert(response.statusMsg);
        return;
      }

      const result = await response.json();

      setCookie('accessToken', result.data.accessToken, { path: '/', expires: Date.now() + accessTokenExpiration});
      setCookie('refreshToken', result.data.refreshToken, { path: '/', expires: Date.now() + refreshTokenExpiration });

      console.log(response.statusMsg);
      return;
    } catch (error) {
      console.log('refresh token 재발급에 실패하였습니다.', error);
      alert('refresh token 재발급에 실패하였습니다.', error);
      return;
    }
  };

  return { reissue };
}