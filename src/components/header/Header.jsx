import { useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import Navbar from "./Navbar";
import logo from '/logo.png';
import { useUserStore } from '../../store/useUserStore';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { getMyInfo } from '../../apis/authApi';

function Header() {
  const navigate = useNavigate();
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

  return (
    <header>
      <section className="header-inner">
        <span className="logo">
          <img src={logo} alt="logo" />
          SHOKEY
        </span>
        <Navbar />
        {
          info ? <span className="header-profile">{info.userName}</span> : 
          <div className="button-container">
            <button id="login-btn" onClick={() => { navigate('/login') }}>
              Login
            </button>
            <button id="sign-up-btn" onClick={() => { navigate('/register') }}>
              Sign up
            </button>
          </div>
        }
        
      </section>
    </header>
  )
}

export default Header;