import Image from "next/image";
import "./Footer.css";

const instagramIcon = "/instagram-icon.png";
const linkedinIcon = "/linkedin-icon.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <span className="footer__logo">Yaly Mevorach</span>
          <nav className="footer__nav">
            <a href="#about" className="footer__nav-link">About</a>
            <a href="#studies" className="footer__nav-link">Studies</a>
            <a href="#vision" className="footer__nav-link">Vision</a>
            <a href="#projects" className="footer__nav-link">Projects</a>
            <a href="#publications" className="footer__nav-link">Publications</a>
          </nav>
          <div className="footer__follow">
            <div className="footer__follow-links">
              <a
                href="https://www.instagram.com/yaly_mev?igsh=MXBpbG55cGZzYTkxZg%3D%3D"
                className="footer__icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={instagramIcon}
                  alt="Instagram"
                  width={28}
                  height={28}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/yaly-mevorach-024a1810a/"
                className="footer__icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={linkedinIcon}
                  alt="LinkedIn"
                  width={28}
                  height={28}
                />
              </a>
            </div>
            <p className="footer__follow-text">Follow for more</p>
          </div>
        </div>
        <hr className="footer__divider" />
        <div className="footer__legal">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Yaly Mevorach. All rights reserved.
          </p>
          <p className="footer__credit">
            Designed and developed by{" "}
            <a
              href="https://www.shaytechsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Shay Tech Solutions</strong>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
