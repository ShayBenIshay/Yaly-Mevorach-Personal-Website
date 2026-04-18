import AnimateOnScroll from "@/components/AnimateOnScroll/AnimateOnScroll";
import "./Vision.css";

const visionText = `My vision is to bridge science and society. I believe that even the most innovative research is more powerful when it's accessible and meaningful to the public. I aim to promote the conservation of the Eastern Mediterranean Sea by working side by side with fellow scientists and connecting local communities to the incredible marine life it holds and showing how human presence shapes this environment. I'm especially passionate about introducing people to the acoustic world of cetaceans - a world rich in communication, language, and culture. It may not be easily captured in a photograph, but once understood, it's truly captivating. I'm completely hooked - are you?`;

export default function Vision() {
  return (
    <section className="vision" id="vision">
      <div className="vision__overlay" />
      <AnimateOnScroll className="vision__content" animClass="anim-fade-up">
        <h2 className="vision__heading">Vision</h2>
        <p className="vision__text">{visionText}</p>
      </AnimateOnScroll>
    </section>
  );
}
