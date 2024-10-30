import { useState } from "react";
import SearchSection from "../../components/explore-page/SearchSection/SearchSection";
import ExploreCardSection from "../../components/explore-page/SearchSection/ExploreCardSection";
import ConnectLargerWorld from "../../components/landing-page/ConnectLargerWorld/ConnectLargerWorld";
import Accordion from "../../components/base/Accordion/Accordion";
export interface DemoData {
  img: string;
  title: string;
  header: string;
  time: string;
  description: string;
  buttonText: string;
  type: string;
  category?: string;
  link: string;
}

const Explore = () => {
  const demoData: DemoData[] = [
    {
      img: "../../../public/images/landing-page/democard-imgs/demoCard.svg",
      title: "Rita Isiba",
      header: "Intersectionalism",
      time: "2 hours ago",
      description: "This is a short description of the first card.",
      buttonText: "watch here",
      type: "all",
      category: "planet-earth",
      link: "/videos/2",
    },
    {
      img: "../../../public/images/landing-page/democard-imgs/demoCardMicro.svg",
      title: "Larger.world team",
      header: "future of work: there has to be another way",
      time: "1 day ago",
      description: "This is a short description of the second card.",
      buttonText: "read here",
      type: "article",
      category: "co-creators",
      link: "/article",
    },
    {
      img: "../../../public/images/landing-page/democard-imgs/demoCard.svg",
      title: "Tumi Sineke",
      header: "how do business tackle diversity & inclusion?",
      time: "3 days ago",
      description: "This is a short description of the third card.",
      buttonText: "listen here",
      type: "document",
      category: "planet-earth",
      link: "/video/12",
    },
    {
      img: "../../../public/images/landing-page/democard-imgs/demoCard.svg",
      title: "Rita Isiba",
      header: "pour equality: women redefining industries",
      time: "4 days ago",
      description: "This is a short description of the fourth card.",
      buttonText: "read here",
      type: "event",
      category: "co-creators",
      link: "/article",
    },
    {
      img: "../../../public/images/landing-page/democard-imgs/demoCard.svg",
      title: "Rita Isiba",
      header: "Intersectionalism",
      time: "5 days ago",
      description: "This is a short description of the fifth card.",
      buttonText: "listen here",
      type: "video",
      category: "planet-earth",
      link: "/podcast/2",
    },
  ];

  const [clickedTerm, setClickedTerm] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = () => {
    const filteredData = demoData.filter(
      (card) =>
        (clickedTerm === "all" || card.type === clickedTerm) &&
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (category === "" || card.category === category)
    );
    return filteredData;
  };

  const filteredData = handleSearch();

  return (
    <div>
      <SearchSection
        setClickedTerm={setClickedTerm}
        setSearchTerm={setSearchTerm}
        setCategory={setCategory}
        onSearch={handleSearch}
      />
      <ExploreCardSection data={filteredData} />
      <ConnectLargerWorld />
      <Accordion />
    </div>
  );
};

export default Explore;
