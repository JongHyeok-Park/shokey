import './Login.css';
import useLogin from '../hooks/useLogin';
import { Link } from 'react-router-dom';

function Login() {
  const {
    handleIdChange,
    handlePwChange,
    handleSubmit
  } = useLogin();

  return (
    <main className="login">
      <h1 className='login-title'>로그인</h1>
      <form className='form-container'>
        <div className='input-container'>
          <input
            id="id"
            type="text"
            onChange={handleIdChange}
            placeholder="id"
          />
          <input
            id="password"
            type="password"
            onChange={handlePwChange}
            placeholder="password"
          />
        </div>
        <button onClick={handleSubmit}>로그인</button>
        <Link to='/register'>회원가입</Link>
      </form>
    </main>
  );
}

export default Login;