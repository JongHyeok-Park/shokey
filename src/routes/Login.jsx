import './Login.css';
import {useLogin} from '../hooks/useLogin';

function Login() {
  const {
    handleIdChange,
    handlePwChange,
    handleSubmit
  } = useLogin();

  return (
    <main className="login">
      <section className='login-wrapper'>
        <h1>로그인</h1>
        <form onSubmit={handleSubmit}>
          <div className='field'>
            <label htmlFor="id">이메일</label>
            <input
              id="id"
              type="text"
              onChange={handleIdChange}
              placeholder="id"
            />
          </div>
          <div className='field'>
            <label htmlFor="pw">패스워드</label>
            <input
              id="pw"
              type="pw"
              onChange={handlePwChange}
              placeholder="pw"
            />
          </div>
          <button onClick={handleSubmit}>Login</button>
        </form>
      </section>
    </main>
  );
}

export default Login;