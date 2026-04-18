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
          <div className="footer__follow">
            <div className="footer__follow-links">
              <a
                href="https://www.instagram.com/yaly_mevorach/"
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
                href="https://www.facebook.com/"
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
            Designed and developed by <strong>Shay Tech Solutions</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
