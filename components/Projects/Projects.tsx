import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll/AnimateOnScroll";
import "./Projects.css";

const projects = [
  {
    years: "2017 – Present",
    title: "The Israeli Dolphin Project",
    description:
      "Long-running research on dolphin populations along the Israeli coastline, tracking abundance, distribution, and social structure across multiple species in the Eastern Mediterranean.",
  },
  {
    years: "2017 – 2022",
    title: "TursioMed & InterMed",
    description:
      "Collaborative research projects with WWF Italy–Switzerland — a pan-Mediterranean network of dolphin scientists working together to share data and knowledge on dolphin populations across the Mediterranean Sea.",
  },
  {
    years: "June 2018",
    title: "ACCOBAMS Survey Initiative",
    description:
      "Participated in the ACCOBAMS Survey Initiative in the Mediterranean Sea, contributing to one of the most comprehensive assessments of cetacean populations across the basin.",
  },
  {
    years: "2019 – 2021",
    title: '"Shark in the Stream" Community Project',
    description:
      "Each winter, warm water discharged from the power station in Hadera draws dozens of dusky and sandbar sharks close to shore. To protect these species and manage human interaction, I co-led this project alongside local organizations and the municipality.",
  },
  {
    years: "2022 – 2027",
    title: "Field Biologist, Project CETI",
    description:
      "Cetacean Translation Initiative — applying advanced machine learning and gentle robotics to decode sperm whale communication. As field biologist, I work directly with sperm whale units in the Eastern Caribbean.",
  },
  {
    years: "2023 – 2026",
    title: "Well-being in Academia",
    description:
      "As student representative in the European Cetacean Society (2022–2024), I initiated a workshop series helping students improve their well-being throughout their academic journeys.",
  },
  {
    years: "2023 – 2027",
    title: "The Israeli Deep Diving Cetacean Project",
    description:
      "Co-initiated with Dr. Aviad Scheinin and funded by the Ministry of Energy, this is the first project of its kind to study the abundance and distribution of deep-diving cetaceans in Israel's economic waters — a meaningful first step toward my dream of working with sperm whales and bioacoustics in the Mediterranean.",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      {/* Full-bleed whale banner */}
      <div className="projects__banner">
        <Image
          src="/images/bg-jumping-whale.png"
          alt="Whale breaching the ocean surface"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 55%" }}
          priority={false}
        />
        <div className="projects__banner-overlay" />
        <AnimateOnScroll className="projects__banner-text" animClass="anim-fade-up">
          <h2 className="projects__banner-heading">Projects</h2>
          <p className="projects__banner-sub">
            Field research, conservation, and collaboration across the Mediterranean and beyond
          </p>
        </AnimateOnScroll>
      </div>

      {/* Content area */}
      <div className="projects__body">
        <div className="projects__inner">
          {/* Timeline */}
          <AnimateOnScroll
            className="projects__timeline-col"
            animClass="anim-fade-left"
          >
            <ul className="projects__list">
              {projects.map((p, i) => (
                <li key={i} className="projects__item">
                  <div className="projects__item-dot" />
                  <div className="projects__item-body">
                    <span className="projects__item-years">{p.years}</span>
                    <span className="projects__item-title">{p.title}</span>
                    <p className="projects__item-desc">{p.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>

          {/* Sticky photo mosaic */}
          <AnimateOnScroll
            className="projects__images-col"
            animClass="anim-fade-right"
            delay={150}
          >
            <div className="projects__image-stack">
              <div className="projects__image-frame projects__image-frame--top">
                <Image
                  src="/images/project-image-1.png"
                  alt="Yaly Mevorach doing passive acoustic monitoring from a boat"
                  fill
                  sizes="(max-width: 900px) 100vw, 38vw"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              <div className="projects__image-frame projects__image-frame--bottom">
                <Image
                  src="/images/project-image-2.png"
                  alt="Yaly Mevorach in the field with acoustic monitoring equipment"
                  fill
                  sizes="(max-width: 900px) 100vw, 38vw"
                  style={{ objectFit: "cover", objectPosition: "center 30%" }}
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
