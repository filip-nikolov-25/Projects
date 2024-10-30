import React from "react";
import "./Accordion.css";
import AppContainer from "../AppContainer/AppContainer";
import AppSection from "../AppSection/AppSection";
import HeroSection from "../../whyourpage-isblack/HeroSection/HeroSection";

const Accordion = () => {
  return (
    <AppContainer>
      <AppSection>
        <HeroSection heading="Frequently Asked Questions" paragraph="" />
        <div className="accordion accordion-flush d-flex flex-column gap-4" id="accordionFlushExample">
          <div className="accordion-item transparent-custom">
            <h2 className="accordion-header transparent-custom">
              <button
                className="accordion-button collapsed border-radius-custom border-custom"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                1. What is Larger.world's unlearning platform?
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body accordion-body-custom">
                larger.world hosts worlds of unique and unseen content, around the topics of diversity, inclusion, equity, sustainability, and
                regeneration. we invite you on a journey of unlearning, through rainforests of content, office chaos and more.
              </div>
            </div>
          </div>
          <div className="accordion-item transparent-custom">
            <h2 className="accordion-header transparent-custom">
              <button
                className="accordion-button collapsed border-radius-custom border-custom"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                2. How can I benefit from using Larger.world's unlearning platform?
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body accordion-body-custom">
                by engaging with larger.world's unlearning platform, you can expand your perspectives, develop a growth mindset, and enhance your
                decision-making ability. the platform offers tools, resources, and a supportive community to facilitate you unlearning journey.
              </div>
            </div>
          </div>
          <div className="accordion-item transparent-custom">
            <h2 className="accordion-header transparent-custom">
              <button
                className="accordion-button collapsed border-radius-custom border-custom"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                3. What sets Larger.world's unlearning platform apart from others?
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body accordion-body-custom">
                larger.worlds unlearning platform stands out for its user-friendly interface, diverse range of content, personalized learning
                recommendations, and interactive features like workshops and peer-to-peer discussions. it focuses on creating a holistic unlearning
                experience.
              </div>
            </div>
          </div>
          <div className="accordion-item transparent-custom">
            <h2 className="accordion-header transparent-custom">
              <button
                className="accordion-button collapsed border-radius-custom border-custom"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                4. Are there any success stories from users of Larger.world's unlearning platform?
              </button>
            </h2>
            <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body accordion-body-custom">
                many users of larger.world's unlearning platform have reported significant personal and professional growth outcomes, such as increased creativity, improved problem-solving skills, enhanced adaptability, and a more open mindset towards change and innovation. 
              </div>
            </div>
          </div>
          <div className="accordion-item transparent-custom">
            <h2 className="accordion-header transparent-custom">
              <button
                className="accordion-button collapsed border-radius-custom border-custom"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                5. How can I get started with Larger.world's unlearning platform?
              </button>
            </h2>
            <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body accordion-body-custom">
                to begin your unlearning journey with larger.world's platform, create an account, explore the available resources and courses, participate in discussions and workshops, set goals for yourself, and commit to regular self-reflection and practice. embrace the rpocess of unlearning with an open mind and willingness to grow.
              </div>
            </div>
          </div>
        </div>
      </AppSection>
    </AppContainer>
  );
};

export default Accordion;
