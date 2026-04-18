import Image from "next/image";
import "./Navbar.css";

const instagramIcon = "/instagram-icon.png";
const linkedinIcon = "/linkedin-icon.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#hero" className="navbar__logo">
        Yaly Mevorach
      </a>
      <div className="navbar__links">
        <a href="#about" className="navbar__link">
          About
        </a>
        <a href="#studies" className="navbar__link">
          Studies
        </a>
        <a href="#vision" className="navbar__link">
          Vision
        </a>
      </div>
      <div className="navbar__follow-links">
        <a
          href="https://www.instagram.com/yaly_mev?igsh=MXBpbG55cGZzYTkxZg%3D%3D"
          className="navbar__icon-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={instagramIcon} alt="Instagram" width={28} height={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/yaly-mevorach-024a1810a"
          className="navbar__icon-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={linkedinIcon} alt="LinkedIn" width={28} height={28} />
        </a>
      </div>
    </nav>
  );
}
