import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll/AnimateOnScroll";
import "./Publications.css";

type Entry = {
  type: "paper" | "talk" | "report";
  text: string;
  award?: string;
};

type YearGroup = {
  year: string;
  entries: Entry[];
};

const publicationsByYear: YearGroup[] = [
  {
    year: "2019",
    entries: [
      {
        type: "talk",
        text: "Bottlenose dolphins in Israel. World Marine Mammal Conference, Barcelona, Spain.",
      },
    ],
  },
  {
    year: "2022",
    entries: [
      {
        type: "paper",
        text: "Common dolphins (Delphinus delphis) in Israel: Unique dynamics of a critically endangered population. Mevorach, Y., Scheinin, A., Galili, O., Santostasi, N. L. & Tchernov, D. Frontiers in Marine Science, 9, 916950.",
      },
      {
        type: "talk",
        text: "What can be done to save the common dolphin (Delphinus delphis) in Israel? ECS 33rd Annual Conference, Israel.",
        award: "Best Talk Award",
      },
      {
        type: "report",
        text: "Report on the Distribution and Abundance of Marine Mammals along the Israeli Coastline. Submitted to the Israeli Nature and Parks Authority. Mevorach Y., Galili O., Elasar M.R., Scheinin A.",
      },
    ],
  },
  {
    year: "2023",
    entries: [
      {
        type: "paper",
        text: "Two Decades of Coastal Dolphin Population Surveys in Israel, Eastern Mediterranean. Galili, O., Goffman, O., Roditi-Elasar, M., Mevorach, Y., et al. Biology, 12(2), 328.",
      },
      {
        type: "paper",
        text: "Cetaceans in the Mediterranean Sea: Encounter Rate, Dominant Species, and Diversity Hotspots. Gnone, G., Bellingeri, M., Airoldi, S., Gonzalvo, J., David, L., Di-Méglio, N., Cañadas, A.M., Akkaya, A., Awbery, T., Mussi, B., Campana, I., Azzolin, M., Dede, A., Tonay, A.M., Monaco, C., Pellegrino, G., Tepsich, P., Moulins, A., Arcangeli, A. & Labach, H. & 24 others. Diversity, 15(3), 321.",
      },
    ],
  },
  {
    year: "2024",
    entries: [
      {
        type: "talk",
        text: "IPI distribution as a tool for passive acoustic monitoring of well-known sperm whale units. ECS 35th Conference, Italy.",
      },
    ],
  },
  {
    year: "2025",
    entries: [
      {
        type: "paper",
        text: "Investigating the presence of different bottlenose dolphin ecotypes in the Mediterranean Sea. Bellingeri, M., Nebuloni, A., La Manna, G., Akkaya, A., Alessi, J., Arcangeli, A., Ascheri, D., Awbery, T., Azzinari, G., Azzinari, C. & Azzolin, M. Scientific Reports, 15(1), 5526.",
      },
      {
        type: "paper",
        text: "Automatic detection and annotation of eastern Caribbean sperm whale codas. Gubnitsky, G., Mevorach, Y., Gero, S., Gruber, D.F. & Diamant, R. Scientific Reports, 15(1), 12790.",
      },
      {
        type: "paper",
        text: "Bottlenose Dolphins (Tursiops truncatus) Along the Coast of Israel: Abundance and Social Structure. Mevorach, Y., Galili, O., Bigal, E., Goffman, O., Roditi-Elasar, M., Zuriel, Y., Kobo, K., et al. Aquatic Conservation: Marine and Freshwater Ecosystems, 35(8), e70181.",
      },
      {
        type: "paper",
        text: "Source Separation of Sperm Whales' Echolocation Clicks. Gubnitky, G., Mevorach, Y., Tchernov, D. & Diamant, R. IEEE Transactions on Audio, Speech and Language Processing.",
      },
      {
        type: "paper",
        text: "Predicting mesoscale movement of sperm whale units in the Caribbean based on social dynamics. Mevorach, Y., Maalouf, A., Gubnitsky, G., Tønnesen, P., Gruber, D.F., Rus, D., Tchernov, D. & Gero, S. Scientific Reports, 15(1), 39150.",
      },
    ],
  },
  {
    year: "2026",
    entries: [
      {
        type: "paper",
        text: "Description of a collaborative sperm whale birth and shifts in coda vocal styles during key events. Aluma, Y., Baron, Z., Barrett, R., Baumgartner, C., Beguš, G., Bhattacharya, S., Bronstein, M.M., Dahan, S., Davis, O., De Haas, S. & Defoe, J. Scientific Reports, 16(1), 9206.",
      },
      {
        type: "talk",
        text: "Multilayer networks reveal behavior-dependent leadership dynamics in sperm whale units. ECS 37th Conference, Dundee, Scotland.",
      },
    ],
  },
];

const typeLabel: Record<Entry["type"], string> = {
  paper: "Publication",
  talk: "Conference",
  report: "Report",
};

export default function Publications() {
  return (
    <section className="publications" id="publications">
      {/* Photo mosaic header */}
      <div className="publications__images">
        <div className="publications__image-frame publications__image-frame--wide">
          <Image
            src="/images/publications-image-2.png"
            alt="Yaly Mevorach presenting at a public outreach event"
            fill
            sizes="(max-width: 768px) 100vw, 58vw"
            style={{ objectFit: "cover", objectPosition: "center 35%" }}
          />
        </div>
        <div className="publications__image-frame publications__image-frame--portrait">
          <Image
            src="/images/publications-image-1.png"
            alt="Yaly Mevorach giving a talk at a scientific conference"
            fill
            sizes="(max-width: 768px) 100vw, 42vw"
            style={{ objectFit: "cover", objectPosition: "center 20%" }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="publications__content">
        <AnimateOnScroll className="publications__header" animClass="anim-fade-up">
          <h2 className="publications__heading">Publications &amp; Conferences</h2>
        </AnimateOnScroll>

        <div className="publications__years">
          {[...publicationsByYear].reverse().map((group, gi) => (
            <AnimateOnScroll
              key={gi}
              className="publications__year-block"
              animClass="anim-fade-up"
              delay={gi * 80}
            >
              <div className="publications__year-label">{group.year}</div>
              <ul className="publications__entries">
                {group.entries.map((entry, ei) => (
                  <li key={ei} className="publications__entry">
                    <span
                      className={`publications__entry-tag publications__entry-tag--${entry.type}`}
                    >
                      {typeLabel[entry.type]}
                    </span>
                    <p className="publications__entry-text">{entry.text}</p>
                    {entry.award && (
                      <span className="publications__entry-award">
                        ★ {entry.award}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
