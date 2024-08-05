import { useState, useEffect } from 'react';
import { getUserInfo, patchUserInfo, deleteUserInfo } from '../apis/userInfoApi';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const useUserInfo = (id) => {
  const [cookies, setCookie, removeCookies] = useCookies(['accessToken', 'refreshToken']);
  const navigate = useNavigate();
  const [initialUserInfo, setInitialUserInfo] = useState(null);
  const [userInfo, setUserInfo] = useState({
    userId: '',
    userName: '',
    userGender: true,
    userEmail: '',
    userRole: 0,
  });

  useEffect(() => {
    if (id) {
      fetchUserInfo();
    }
  }, [id]);

  /**사용자 정보를 삭제하고 token이 없어지면 '/'로 이동함 */
  useEffect(() => {
    if (!cookies.accessToken && !cookies.refreshToken) {
      navigate('/');
    }
  }, [cookies]);

  /**사용자 정보를 가져와서 userInfo에 담음 */
  const fetchUserInfo = async () => {
    try {
      const res = await getUserInfo(id);
      setUserInfo(res.data);
      setInitialUserInfo(res.data);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleUserIdChange = (e) => {
    setUserInfo(prev => ({ ...prev, userId: e.target.value }));
  }

  const handleUserNameChange = (e) => {
    setUserInfo(prev => ({ ...prev, userName: e.target.value }));
  };

  const handleUserEmailChange = (e) => {
    setUserInfo(prev => ({ ...prev, userEmail: e.target.value }));
  };

  const handleToggle = (field, value) => {
    setUserInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleEdit = () => {
    navigate(`/update-users/${id}`);
  };

  /** update된 부분만 changedData에 담아서 patch시킴 */
  const handleUpdateUserInfo = async () => {
    const changedData = Object.keys(userInfo).reduce((acc, key) => {
      if (userInfo[key] !== initialUserInfo[key]) {
        acc[key] = userInfo[key];
      }
      return acc;
    }, {});

    if (Object.keys(changedData).length === 0) {
      alert('변경된 정보가 없습니다.');
      return;
    }

    try {
      await patchUserInfo(changedData, id, cookies.accessToken);
      alert('사용자 정보가 수정되었습니다.');
    } catch (error) {
      alert(error.message);
    }
  };

  /**사용자 정보를 삭제한 후 cookie에 있는 token들을 없앰 */
  const handleDeleteUserInfo = async () => {
    try {
      await deleteUserInfo(cookies.accessToken);
      removeCookies('accessToken');
      removeCookies('refreshToken');
      alert('사용자 정보가 삭제되었습니다.');
    } catch (error) {
      alert(error.message);
    }
  };

  return {
    userInfo,
    handleUserIdChange,
    handleUserNameChange,
    handleUserEmailChange,
    handleEdit,
    handleUpdateUserInfo,
    handleToggle,
    handleDeleteUserInfo,
  };
}

export default useUserInfo
