import './Footer.css';
import logo from '/public/logo.png';

export default function Footer() {
  return (
    <footer>
      <div className='footer-wrapper'>
        <section className="footer-top">
          <div className="logo">
            <img src={logo} alt="logo" />
            <span>
              SHOKEY
            </span>
          </div>
          <span id="shokey-description">
            Join millions of people who organize work and life with SHOKEY.
          </span>
        </section>
        <hr />
        <section className="footer-bottom">
          <span id="copyright">
            © SHOKEY - Design by Hoang Kim Quoc
          </span>
          <a id="terms" href="/terms">
            약관
          </a>
        </section>
      </div>
    </footer>
  )
}