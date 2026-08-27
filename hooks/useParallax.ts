import { useEffect, useRef } from "react";

/**
 * Attaches a scroll-driven translateY to `bgRef` relative to the bounds of
 * `sectionRef`, creating a parallax depth effect.
 *
 * @param speed  0 = fully fixed background, 1 = moves with content (no effect).
 *               0.35 is a good default — background scrolls at ~35% speed.
 */
export function useParallax<
  S extends HTMLElement = HTMLDivElement,
  B extends HTMLElement = HTMLDivElement,
>(speed = 0.35) {
  const sectionRef = useRef<S>(null);
  const bgRef = useRef<B>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;

    const update = () => {
      const rect = section.getBoundingClientRect();
      // How far the section centre is from the viewport centre
      const viewportCentre = window.innerHeight / 2;
      const sectionCentre = rect.top + rect.height / 2;
      const offset = (sectionCentre - viewportCentre) * speed;
      bg.style.transform = `translateY(${offset}px)`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [speed]);

  return { sectionRef, bgRef };
}
