import AppContainer from "../../base/AppContainer/AppContainer";
import AppSection from "../../base/AppSection/AppSection";
import Heading2 from "../../base/Heading2/Heading2";
import PrimaryParagraph from "../../base/PrimaryParagraph/PrimaryParagraph";
import "./HowCreateWorlds.css";

const createWorlds: { image: string; description: string }[] = [
  {
    image: "cloud-world.svg",
    description:
      "Our worlds are created based on “responsibility fields,” where pressing and major global issues are occurring and recent efforts haven’t brought the needed change.",
  },
  {
    image: "connection-world.svg",
    description:
      "we (as humans) are currently screwing up big time in these fields – to put it politely, as current efforts are falling short in addressing these crucial areas.",
  },
  {
    image: "timer-world.svg",
    description:
      "Our extensive research uncovers examples that tackle these issues from often unknown perspectives, frequently unnoticed by mass media. This is what you will find on larger.world!",
  },
];

const HowCreateWorlds = () => {
  return (
    <AppContainer>
      <AppSection>
        <Heading2>how we create our worlds</Heading2>
        <div className="row">
          {createWorlds.map((world, i) => (
            <div key={`${i}asw`} className="col-lg-4 text-center world-card mt-4">
              <img
                src={`../../../../public/images/how-it-works/create-worlds/${world.image}`}
                alt=""
              />
              <div className="text-white p-5">
                <PrimaryParagraph>{world.description}</PrimaryParagraph>
              </div>
            </div>
          ))}
        </div>
      </AppSection>
    </AppContainer>
  );
};

export default HowCreateWorlds;
