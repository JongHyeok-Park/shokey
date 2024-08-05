import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { getMyInfo } from '../apis/userInfoApi';
import useUserStore from '../store/userStore';

const useInitializeUserInfo = () => {
  const [cookies] = useCookies(['accessToken']);
  const { setId, setUserName } = useUserStore();

  useEffect(() => {
    const initializeUserInfo = async () => {
      if (cookies.accessToken) {
        try {
          const res = await getMyInfo(cookies.accessToken);
          setId(res.data.id);
          setUserName(res.data.userName);
        } catch (error) {
          alert(error.message);
        }
      }
    };

    initializeUserInfo();
  }, [cookies.accessToken]);
};

export default useInitializeUserInfo;