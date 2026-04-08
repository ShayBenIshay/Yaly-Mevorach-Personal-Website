import Image from "next/image";
import "./TextCard.css";

interface TextCardProps {
  title: string;
  text: string;
  imageSrc?: string;
  imageAlt?: string;
  buttonLabel?: string;
  buttonHref?: string;
  reverse?: boolean;
}

export default function TextCard({
  title,
  text,
  imageSrc,
  imageAlt = "",
  buttonLabel,
  buttonHref = "#",
  reverse = false,
}: TextCardProps) {
  return (
    <div className={`text-card${reverse ? " text-card--reverse" : ""}`}>
      {imageSrc && (
        <div className="text-card__image-wrapper">
          <div className="text-card__image-inner">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      )}
      <div className={`text-card__content${!imageSrc ? " text-card__content--full" : ""}`}>
        <h2>{title}</h2>
        <p className="text-card__text">{text}</p>
        {buttonLabel && (
          <a href={buttonHref} className="text-card__btn">
            {buttonLabel}
          </a>
        )}
      </div>
    </div>
  );
}
