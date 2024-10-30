import ContactCard from "@/components/base/ContactCard";
import {
  EventCarouselType,
  StaticContentConferencePageHeroSectionType,
} from "@/types/typesNew";
import Image from "next/image";

interface Props {
  staticContent: StaticContentConferencePageHeroSectionType;
  event: EventCarouselType | undefined;
}
const HeroSection = ({ event, staticContent }: Props) => {
  const contact = {
    blog: "Blog",
    contact: "Follow us on our social media",
    from: "By",
  };

  return (
    <div className="relative">
      <div className="relative w-full h-[90vh] z-10">
        {" "}
        {/* Use h-screen for full viewport height */}
        <Image
          className="absolute heroSectionImg w-[98%] h-full left-1/2 transform -translate-x-1/2"
          src="/conferencePageImgs/conferencePageHeroImg.png"
          alt="HeroImage"
          width={1366}
          height={911}
        />
        <h3 className="text-2xl font-bold absolute top-[32%] left-24 z-20 text-white">
          {staticContent.blog}
        </h3>
        <h1 className="text-6xl font-extrabold top-[40%] left-24 absolute text-white w-[50%] z-20">
          {event?.blogName}
        </h1>
        <h2 className="text-xl font-semibold absolute top-[57%] left-24 z-20 text-white">
          <span>{event?.date}</span>
        </h2>
        <div className="absolute bottom-0 left-[70%] w-[30%] z-20">
          <ContactCard contact={staticContent.contact} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
