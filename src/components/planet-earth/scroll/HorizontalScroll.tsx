import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HorizontalScroll.css";
import { Link } from "react-router-dom";
import VideoPopUp, { videoType } from "./VideoPopUp";
const videosArr: videoType[] = [
  {
    desc: "An exploration of gender equality in the modern workplace.",
    img: "../../../../public/images/planet-earth-images/videoImg.png",
    title: "Gender Equality at Work",
  },
  {
    desc: "Understanding the importance of diversity in teams.",
    img: "../../../../public/images/planet-earth-images/videoImg.png",
    title: "The Power of Diverse Teams",
  },
  {
    desc: "A discussion on the impact of feminism in today's society.",
    img: "../../../../public/images/planet-earth-images/videoImg.png",
    title: "Feminism and Social Change",
  },
  {
    desc: "The role of men in supporting gender equality.",
    img: "../../../../public/images/planet-earth-images/videoImg.png",
    title: "Men as Allies in Gender Equality",
  },
  {
    desc: "Celebrating the achievements of women in technology.",
    img: "../../../../public/images/planet-earth-images/videoImg.png",
    title: "Women in Tech: Breaking Barriers",
  },
];

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll: React.FC = () => {
  const [videoToShow, setVideoToShow] = useState(-1);
  const scrollContainer = useRef<HTMLDivElement | null>(null);
  const HandleClose = () => {
    setVideoToShow(-1);
  };

  useEffect(() => {
    const container = scrollContainer.current;
    if (!container) return;

    const sections = container.children.length;
    const sectionWidth = container.children[2].clientWidth;
    const endScroll = sectionWidth * (sections - 1);

    gsap.to(container, {
      xPercent: -100 * (sections - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => `+=${endScroll}`,
        markers: false, // Add markers to help debug
      },
    });

    return () => {
      // Cleanup code if necessary
    };
  }, []);

  return (
    <div>
      <div className="scroll-container" ref={scrollContainer}>
        <div className="scroll-section section-1">
          <div
            className="div-absolute"
            style={{
              top: `27%`,
              left: `1300%`,
              width: `210px`,
              height: `210px`,
            }}
          >
            <img
              src="../../../../public/images/planet-earth-images/but1.png"
              className={`butterfly flutter`}
              style={{
                transform: `rotate(10deg)`,
                width: `210px`,
                height: `210px`,
              }}
              onClick={() => setVideoToShow(0)}
            />
            {videoToShow == 0 && <VideoPopUp array={videosArr} id={0} onClick={HandleClose} />}
          </div>
          <div
            className="div-absolute"
            style={{
              top: `30%`,
              left: `1020%`,
              width: `130px`,
              height: `130px`,
            }}
          >
            <img
              src="../../../../public/images/planet-earth-images/but1.png"
              className={`butterfly float`}
              style={{
                transform: `rotate(-10deg)`,
                width: `130px`,
                height: `130px`,
              }}
              onClick={() => setVideoToShow(1)}
            />
            {videoToShow == 1 && <VideoPopUp array={videosArr} id={1} onClick={HandleClose} />}
          </div>
          <div
            className="div-absolute"
            style={{
              top: `24%`,
              left: `1640%`,
              width: `220px`,
              height: `220px`,
            }}
          >
            <img
              src="../../../../public/images/planet-earth-images/but1.png"
              className={`butterfly wave `}
              style={{
                transform: `rotate(-40deg)`,
                width: `220px`,
                height: `220px`,
              }}
              onClick={() => setVideoToShow(2)}
            />
            {videoToShow == 2 && <VideoPopUp array={videosArr} id={2} onClick={HandleClose} />}
          </div>
          <div
            className="div-absolute"
            style={{
              bottom: `0%`,
              left: `3220%`,
              width: `700px`,
              height: `400px`,
            }}
          >
            <img
              src="../../../../public/images/planet-earth-images/rock.png"
              className={`rock`}
              style={{
                transform: `rotate(deg)`,
                width: `700px`,
                height: `400px`,
              }}
            />
          </div>
          <div
            className="div-absolute"
            style={{
              bottom: `0%`,
              left: `4080%`,
              width: `500px`,
              height: `300px`,
              transform: `rotate(deg)`,
            }}
          >
            <img
              src="../../../../public/images/planet-earth-images/rock.png"
              className={`rock`}
              style={{
                width: `500px`,
                height: `300px`,
              }}
            />
          </div>
          <div
            className="div-absolute"
            style={{
              bottom: `70%`,
              left: `4250%`,
              width: `120px`,
              height: `120px`,
            }}
          >
            <img
              src="../../../../public/images/planet-earth-images/but1.png"
              className={`butterfly flap`}
              style={{
                transform: `rotate(0deg)`,
                width: `120px`,
                height: `120px`,
              }}
              onClick={() => setVideoToShow(3)}
            />
            {videoToShow == 3 && <VideoPopUp array={videosArr} id={3} onClick={HandleClose} />}
          </div>
          <div
            className="div-absolute"
            style={{
              bottom: `30%`,
              left: `3330%`,
              width: `220px`,
              height: `220px`,
            }}
          >
            <img
              src="../../../../public/images/planet-earth-images/but1.png"
              className={`butterfly wave`}
              style={{
                transform: `rotate(10deg)`,
                width: `220px`,
                height: `220px`,
              }}
              onClick={() => setVideoToShow(4)}
            />
            {videoToShow == 4 && <VideoPopUp array={videosArr} id={4} onClick={HandleClose} />}
          </div>

          <img src="../../../../public/images/planet-earth-images/tr1.png" className="tree-1" alt="" />
          <img src="../../../../public/images/planet-earth-images/tr2.png" className="tree-2" alt="" />
          <img src="../../../../public/images/planet-earth-images/tr3.png" className="tree-3" alt="" />
          <img src="../../../../public/images/planet-earth-images/tr4.png" className="tree-4" alt="" />
          <img src="../../../../public/images/planet-earth-images/hedgehog.png" className="hedgehog" alt="" />
          <img src="../../../../public/images/planet-earth-images/table1.svg" alt="" className="table1" />
          <img src="../../../../public/images/planet-earth-images/table2.svg" alt="" className="table2" />
          <img src="../../../../public/images/planet-earth-images/table-missed.svg" alt="" className="table3" />
          <img src="../../../../public/images/planet-earth-images/table3.svg" alt="" className="table4" />
          <img src="../../../../public/images/planet-earth-images/table4.svg" alt="" className="table5" />
          <img src="../../../../public/images/planet-earth-images/table5.svg" alt="" className="table6" />
          <img src="../../../../public/images/planet-earth-images/table6.svg" alt="" className="table7" />
          <Link to={"/"}>
            <img src="../../../../public/images/planet-earth-images/logoWorld.svg" alt="" className="page-logo-world-a" />
          </Link>
          <div className="welcome-to-the-world-a">
            <h1>planet earth</h1>
            <p className="underHeader">
              this virtual rain-forest hosts content around <br /> topics that influence our planet.
            </p>
            <i>lets start exploring</i>
            <p className="scrollInstructions">scroll up & down to navigate through your journey</p>
            <img src="../../../../public/images/planet-earth-images/arrowsScroll.svg" alt="" />
          </div>

          <div className="imgContainer-section1">
            <img src="../../../../public/images/planet-earth-images/1.png" className="homeImg" alt="Home" />
          </div>
        </div>
        <div className="scroll-section section-2">
          <div className="imgContainer-section2">
            <img src="../../../../public/images/planet-earth-images/2.png" className="bg-2" alt="Background 1" />
          </div>
        </div>
        <div className="scroll-section section-3">
          <div className="imgContainer-section3">
            <img src="../../../../public/images/planet-earth-images/3.png" className="bg-3" alt="Background 2" />
          </div>
        </div>
        <div className="scroll-section section-4">
          <div className="imgContainer-section4">
            <img src="../../../../public/images/planet-earth-images/4.png" className="bg-4" alt="Background 3" />
          </div>
        </div>
        <div className="scroll-section section-5">
          <div className="imgContainer-section5">
            <img src="../../../../public/images/planet-earth-images/5.png" className="bg-5" alt="Background 4" />
          </div>
        </div>
        <div className="scroll-section section-6">
          <div className="imgContainer-section6">
            <img src="../../../../public/images/planet-earth-images/6.png" className="bg-6" alt="Background 5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
