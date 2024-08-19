import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useUserStore } from '../store/useUserStore';
import { getMyInfo } from '../apis/authApi';

function useMyInfo() {
  const { info, setInfo } = useUserStore();
  const [ cookies ] = useCookies(['accessToken', 'refreshToken']);
  const location = useLocation();

  useEffect(() => {
    getMyInfo(cookies.accessToken)
    .then((res) => {
      setInfo(res.data);
    })
    .catch((err) => {
      alert(err.message);
    })
  }, [cookies, location])

  return { info }
}

export default useMyInfo;