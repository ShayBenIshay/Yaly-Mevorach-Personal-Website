import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#hero" className="navbar__logo">Yaly Mevorach</a>
      <div className="navbar__links">
        <a href="#about" className="navbar__link">About</a>
        <a href="#studies" className="navbar__link">Studies</a>
        <a href="#vision" className="navbar__link">Vision</a>
      </div>
      <a href="#contact" className="navbar__btn">
        Contact Me
      </a>
    </nav>
  );
}
