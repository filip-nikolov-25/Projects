import { useRef } from "react";
import AppContainer from "../../base/AppContainer/AppContainer";
import AppSection from "../../base/AppSection/AppSection";

import "./DiscussionSection.css";
import AppButton from "../../base/AppButton/AppButton";

const cards: { badge: string; title: string; description: string }[] = [
  {
    badge: "spaces-badge.svg",
    title: "spaces with zero tolerance",
    description:
      "by eliminating wasteful gaps and empty areas, this approach fosters a productive environment where every inch is utilized effectively, leading to streamlined processes and enhanced collaboration.",
  },
  {
    badge: "feminist-badge.svg",
    title: "feminist",
    description:
      "feminist ideals emphasize the importance of dismantling patriarchal systems, promoting inclusivity, and advocating for the rights of marginalized groups, regardless of gender.",
  },
  {
    badge: "non-binary-badge.svg",
    title: "non-binary open to differences",
    description:
      "being open to differences is a core value within non-binary communities, where individuals are encouraged to express their gender in ways that feel authentic and true to themselves, unrestricted by societal norms.",
  },
  {
    badge: "unseen-badge.svg",
    title: "unseen voices",
    description:
      "Listening to and uplifting these voices is crucial for creating a more equitable and empathetic society that honors the richness of human diversity and the complexity of lived experiences.",
  },
  {
    badge: "feminist-badge.svg",
    title: "feminist",
    description:
      "feminist ideals emphasize the importance of dismantling patriarchal systems, promoting inclusivity, and advocating for the rights of marginalized groups, regardless of gender.",
  },
  {
    badge: "unseen-badge.svg",
    title: "unseen voices",
    description:
      "Listening to and uplifting these voices is crucial for creating a more equitable and empathetic society that honors the richness of human diversity and the complexity of lived experiences.",
  },
  {
    badge: "feminist-badge.svg",
    title: "feminist",
    description:
      "feminist ideals emphasize the importance of dismantling patriarchal systems, promoting inclusivity, and advocating for the rights of marginalized groups, regardless of gender.",
  },
];

const DiscussionSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = container.children[0].clientWidth;
      const scrollAmount = cardWidth * 2; // Scroll by the width of 2 cards

      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <AppContainer>
        <AppSection>
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h2 className="mb-0 text-white">discussions</h2>
            <div className="button-container">
              <img
                src="/images/landing-page/discussions-section/left-arrow.svg"
                alt=""
                className="carousel-button"
                onClick={() => handleScroll("left")}
              />

              <img
                src="/images/landing-page/discussions-section/right-arrow.svg"
                alt=""
                className="carousel-button ms-4"
                onClick={() => handleScroll("right")}
              />
            </div>
          </div>
          <div className="carousel-wrapper ">
            <div className="carousel-container gap-4 pt-3" ref={scrollRef}>
              {cards.map((card, index) => (
                <div key={index} className="custom-card pb-4">
                  <div className="pt-5 px-3 title-container text-center position-relative">
                    <h6 className="fs-5 px-5">{card.title}</h6>
                    <img
                      src={`/images/landing-page/discussions-section/${card.badge}`}
                      alt=""
                      className="position-absolute "
                    />
                  </div>
                  <div className="card-inner px-3">
                    <p>{card.description}</p>
                    <AppButton
                      borderRadius="50px"
                      width="150px"
                      height="40px"
                    >
                      More
                    </AppButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AppSection>
      </AppContainer>
    </div>
  );
};

export default DiscussionSection;
