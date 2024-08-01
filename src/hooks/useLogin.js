import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { postLogin } from "../apis/authApi";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [cookies, setCookie] = useCookies(["accessToken", "refreshToken"]);
  const navigate = useNavigate();
  const accessTokenExpiration = 2 * 60 * 60 * 1000; // 2시간
  const refreshTokenExpiration = 7 * 24 * 60 * 60 * 1000; // 7일

  useEffect(()=>{
    if (cookies.accessToken && cookies.refreshToken) {
      navigate('/');
    }
  }, [cookies.accessToken, cookies.refreshToken, navigate]);

  const handleIdChange = (e) => {
    setId(e.target.value);
  }
  const handlePwChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id.trim()) {
      alert('아이디를 입력해주세요.');
      return ;
    }
    if (!password.trim()) {
      alert('비밀번호를 입력해주세요.');
      return ;
    }

    postLogin({ id, password })
    .then(res => {
      console.log(res.statusMsg);

      setCookie("accessToken", res.data.accessToken, {
        path: "/",
        expires: new Date(Date.now() + accessTokenExpiration),
      });
      setCookie("refreshToken", res.data.refreshToken, {
        path: "/",
        expires: new Date(Date.now() + refreshTokenExpiration),
      });
    })
    .catch(error => {
      alert(error.message);
      console.log(error.message);
    })
  }

  return {
    handleIdChange,
    handlePwChange,
    handleSubmit };
};

export default useLogin;