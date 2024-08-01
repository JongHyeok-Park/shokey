import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { postLogin } from "../apis/loginApi";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [userId, setUserId] = useState();
  const [userPassword, setUserPassword] = useState();
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
    setUserId(e.target.value);
  }
  const handlePwChange = (e) => {
    setUserPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!userId.trim()) {
          alert('아이디를 입력해주세요.');
          return ;
        }
        if (!userPassword.trim()) {
          alert('비밀번호를 입력해주세요.');
          return ;
        }

      const res = await postLogin({ userId, userPassword });

      if (res.code === 4001) {
        alert(res.statusMsg);
        console.log(res.statusMsg); // 아이디 또는 비밀번호가 잘못 되었습니다.
        return;
      }

      if (res.code !== 2000) {
        alert("로그인에 실패하였습니다.");
        console.log("로그인에 실패하였습니다.");
        return;
      }

      setCookie("accessToken", res.data.accessToken, {
        path: "/",
        expires: Date.now() + accessTokenExpiration,
      });
      setCookie("refreshToken", res.data.refreshToken, {
        path: "/",
        expires: Date.now() + refreshTokenExpiration,
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