import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <span className="footer__logo">Yaly Mevorach</span>
          <a href="#contact" className="footer__btn">
            Contact Me
          </a>
        </div>

        <hr className="footer__divider" />

        <div className="footer__legal">
          <p className="footer__copyright">© {new Date().getFullYear()} Yaly Mevorach. All rights reserved.</p>
          <p className="footer__credit">
            Designed and developed by <strong>Shay Tech Solutions</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
