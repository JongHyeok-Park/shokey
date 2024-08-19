import { useNavigate } from 'react-router-dom';
import './Header.css';
import Navbar from "./Navbar";
import logo from '/logo.png';
import useMyInfo from '../../hooks/useMyInfo';


function Header() {
  const navigate = useNavigate();
  const { info } = useMyInfo();

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