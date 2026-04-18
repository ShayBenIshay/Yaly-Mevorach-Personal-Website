"use client";

import { useState, useEffect } from "react";
import "./Hero.css";

const FULL_NAME = "Yaly Mevorach";

export default function Hero() {
  const [displayed, setDisplayed] = useState(FULL_NAME[0]);
  const [showRest, setShowRest] = useState(false);

  useEffect(() => {
    let i = 1;
    const id = setInterval(() => {
      i++;
      setDisplayed(FULL_NAME.slice(0, i));
      if (i === FULL_NAME.length) {
        clearInterval(id);
        setTimeout(() => setShowRest(true), 200);
      }
    }, 80);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero-section" id="hero">
      <div className="hero-section__overlay" />
      <div className="hero-section__content">
        <h1 className="hero-section__name" aria-label={FULL_NAME}>
          {displayed}
        </h1>

        <h3
          className={`hero-section__title${showRest ? " hero-section__reveal" : ""}`}
        >
          Whale and dolphin biologist
        </h3>
        <ul className="hero-section__list">
          <li
            className={`hero-section__subtitle${showRest ? " hero-section__reveal hero-section__reveal--d1" : ""}`}
          >
            PhD student, University of Haifa
          </li>
          <li
            className={`hero-section__subtitle${showRest ? " hero-section__reveal hero-section__reveal--d1" : ""}`}
          >
            Field biologist, Project CETI
          </li>
          <li
            className={`hero-section__subtitle${showRest ? " hero-section__reveal hero-section__reveal--d1" : ""}`}
          >
            Head of the Israeli deep diving cetacean project
          </li>
        </ul>
      </div>

      <a
        href="#about"
        className="hero-section__scroll"
        aria-label="Scroll down"
      >
        <span className="hero-section__scroll-line" />
      </a>
    </section>
  );
}
