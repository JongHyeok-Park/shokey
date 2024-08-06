import { useNavigate } from 'react-router-dom';
import './Header.css';
import Navbar from "./Navbar";
import logo from '/logo.png';
import useMyUserInfo from '../../hooks/useMyUserInfo';
import useLogout from '../../hooks/useLogout';

function Header() {
  const navigate = useNavigate();
  const { myUserInfo } = useMyUserInfo();
  const handleLogout = useLogout();

  return (
    <header>
      <section className="header-inner">
        <span className="logo">
          <img src={logo} alt="logo" />
          SHOKEY
        </span>
        <Navbar />
        <div className="button-container">
        {(myUserInfo.userName && myUserInfo.id) ? (
            <>
              <button id="mypage-btn" onClick={() => {navigate(`/mypage`)}}>
                {myUserInfo.userName}님
              </button>
              <button id="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button id="login-btn" onClick={() => { navigate('/login') }}>
                Login
              </button>
              <button id="sign-up-btn" onClick={() => { navigate('/register') }}>
                Sign up
              </button>
            </>
          )}
        </div>
      </section>
    </header>
  )
}

export default Header;