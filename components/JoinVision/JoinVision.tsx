import Image from "next/image";
import "./JoinVision.css";

const joinText = `I believe the world of marine mammals and their fascinating vocalizations should be accessible to the curious public through media — including videos, posts, and of course, sound clips. I try to share this passion on my personal social media, and you're welcome to follow along. Tips, questions, or DMs are always welcome!`;

export default function JoinVision() {
  return (
    <section className="join-vision" id="contact">
      <div className="join-vision__images">
        <div className="join-vision__image-frame join-vision__image-frame--wide">
          <Image
            src="/images/ConventionBackground.png"
            alt="35th European Cetacean Society conference auditorium"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
          />
        </div>
        <div className="join-vision__image-frame join-vision__image-frame--portrait">
          <Image
            src="/images/YalySpeech-image.png"
            alt="Yaly Mevorach presenting at the 35th ECS Conference"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>
      </div>

      <div className="join-vision__content">
        <h2 className="join-vision__heading">Want to join my vision?</h2>
        <p className="join-vision__text">{joinText}</p>
      </div>
    </section>
  );
}
