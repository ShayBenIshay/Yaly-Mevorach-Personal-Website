import Image from "next/image";
import "./Studies.css";

const degrees = [
  {
    degree: "BSc in Marine Biology",
    institution: "Ben-Gurion University of the Negev",
    years: "2015–2018",
  },
  {
    degree: "Marine Mammal Summer Course",
    institution: "Dalhousie University",
    years: "2018",
  },
  {
    degree: "MSc in Marine Biology",
    institution: "University of Haifa",
    years: "2019–2021",
    note: "Magna Cum Laude, Dean's Excellence Award. Thesis: Population Dynamics of Common and Bottlenose Dolphins along the Israeli Coast",
  },
  {
    degree: "Bioacoustic and Communication Summer Course",
    institution: "University of southern Denmark",
    years: "2024",
  },
  {
    degree: "PhD Candidate",
    institution: "University of Haifa",
    years: "Present",
    note: "investigating the impact of social structures on sperm whale communication under Project CETI",
  },
];

const dalhousieQuote = `One of my first exciting experiences as a marine biologist was being selected for a full scholarship to the Marine Mammal course at Dalhousie University in Halifax, Canada. This renowned two-week course is led by one of the most established marine mammal science labs in the world, headed by Prof. Hal Whitehead. After completing the course, I decided to change my plans and forgo traveling to western Canada so I could stay and volunteer in the lab, contributing to data processing for the Dominica Sperm Whale Project. That decision turned out to be one of the best I've ever made - it eventually led me to pursue my PhD with this incredible project.`;

export default function Studies() {
  return (
    <section className="studies" id="studies">
      <div className="studies__inner">
        <div className="studies__text-col">
          <h2 className="studies__heading">Studies &amp; Qualifications</h2>
          <ul className="studies__list">
            {degrees.map((item, i) => (
              <li key={i} className="studies__item">
                <div className="studies__item-dot" />
                <div className="studies__item-body">
                  <span className="studies__item-degree">{item.degree}</span>
                  <span className="studies__item-institution">
                    {item.institution}
                    <span className="studies__item-years"> · {item.years}</span>
                  </span>
                  {item.note && (
                    <span className="studies__item-note">{item.note}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <blockquote className="studies__quote">{dalhousieQuote}</blockquote>
        </div>

        <div className="studies__image-col">
          <div className="studies__image-frame">
            <Image
              src="/images/graduation-image.png"
              alt="Yaly Mevorach at graduation"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
