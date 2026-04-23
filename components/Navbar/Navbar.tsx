"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import "./Navbar.css";

const instagramIcon = "/instagram-icon.png";
const linkedinIcon = "/linkedin-icon.png";

// How many px must be scrolled in one direction before the navbar reacts
const SCROLL_THRESHOLD = 60;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const accumulatedDelta = useRef(0);

  // Hide on scroll-down, reveal on scroll-up, with a threshold to avoid jitter
  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      accumulatedDelta.current += delta;

      if (accumulatedDelta.current > SCROLL_THRESHOLD) {
        setHidden(true);
        setMenuOpen(false);
        accumulatedDelta.current = 0;
      } else if (accumulatedDelta.current < -SCROLL_THRESHOLD) {
        setHidden(false);
        accumulatedDelta.current = 0;
      }

      lastScrollY.current = currentY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  function handleNavLinkClick() {
    setMenuOpen(false);
  }

  return (
    <nav className={`navbar${hidden ? " navbar--hidden" : ""}`} ref={navRef}>
      <a href="#hero" className="navbar__logo">
        Yaly Mevorach
      </a>

      <div className={`navbar__links${menuOpen ? " navbar__links--open" : ""}`}>
        <a href="#about" className="navbar__link" onClick={handleNavLinkClick}>
          About
        </a>
        <a href="#projects" className="navbar__link" onClick={handleNavLinkClick}>
          Projects
        </a>
        <a href="#publications" className="navbar__link" onClick={handleNavLinkClick}>
          Publications
        </a>
        <a href="#studies" className="navbar__link" onClick={handleNavLinkClick}>
          Studies
        </a>
        <a href="#vision" className="navbar__link" onClick={handleNavLinkClick}>
          Vision
        </a>
      </div>

      <div className="navbar__right">
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

        <button
          className={`navbar__hamburger${menuOpen ? " navbar__hamburger--open" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
