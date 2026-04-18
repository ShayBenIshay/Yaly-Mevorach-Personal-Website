import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll/AnimateOnScroll";
import "./About.css";

const aboutText = `I fell in love with the sea at a very young age, ever since I couldn't understood why the Little Mermaid would give everything up to walk on land, when all I ever wanted was a set of fins. I'm fascinated by the deep sea and the secrets it holds - and with it, a deep passion for the world of deep-diving cetaceans, especially sperm whales.

Although sperm whales are found across the globe, I consider myself a true Mediterranean fan. The Mediterranean Sea holds a special place in my heart, and even though it's the busiest and most polluted sea in the world - or perhaps because of that - I'm deeply committed to protecting it and the species that call it home.

My dream is to work with and for the deep-diving cetaceans of the eastern Mediterranean, bringing together both scientific collaborations and public engagement to study and conserve these remarkable animals. I believe our greatest strength as scientists lies in working together and sharing knowledge to better understand and protect the natural world - all while maintaining a healthy work-life balance and appreciating the beauty that surrounds us.`;

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <AnimateOnScroll
          className="about__image-col"
          animClass="anim-fade-left"
        >
          <div className="about__image-frame">
            <Image
              src="/images/YalyMevorach-personal-image.png"
              alt="Yaly Mevorach in the field"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll
          className="about__text-col"
          animClass="anim-fade-right"
          delay={150}
        >
          <span className="about__label">About myself</span>
          <h2 className="about__heading">About myself</h2>
          <div className="about__body">
            {aboutText.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
