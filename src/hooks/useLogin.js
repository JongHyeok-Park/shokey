import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { postLogin } from "../apis/authApi";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
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

    try {
      if (!id.trim()) {
          alert('아이디를 입력해주세요.');
          return ;
        }
        if (!password.trim()) {
          alert('비밀번호를 입력해주세요.');
          return ;
        }

      const res = await postLogin({ id, password });

      if (res.code === 4001) {
        alert(res.statusMsg);
        console.log(res.statusMsg); // 아이디 또는 비밀번호가 잘못 되었습니다.
        return;
      }

      setCookie("accessToken", res.data.accessToken, {
        path: "/",
        expires: new Date(Date.now() + accessTokenExpiration),
      });
      setCookie("refreshToken", res.data.refreshToken, {
        path: "/",
        expires: new Date(Date.now() + refreshTokenExpiration),
      });
      console.log(res.statusMsg);
    } catch (error) {
      console.log("로그인에 실패하였습니다.", error);
      alert("로그인에 실패하였습니다.", error);
    }
  };

  return {
    handleIdChange,
    handlePwChange,
    handleSubmit };
};