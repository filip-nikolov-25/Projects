import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
// COMPONENT STYLES
import "./components/NavBar.css";
import "./components/ExploreWorlds.css";
import "./components/Footer.css";
import "./components/OurTeam.css";
import "./components/WaysToExplore.css";
import "./components/ThemeButton.css";
import "./components/SingleDiscussion.css";
// PAGES STYLES
import "./pages/AboutPage/AboutPage.css";
import "./pages/CoCreators/CoCreators.css";
import "./components/Contact/Contact.css";
import "./pages/ContentPage/ContentPage.css";
import "./pages/Explore/Explore.css";
import "./pages/HowItWork/HowItWork.css";
import "./pages/LandingPage/LandingPage.css";
import "./pages/Membership/Membership.css";
import "./pages/PlanetEarth/PlanetEarth.css";
import "./pages/TopicsPage/TopicsPage.css";
import "./pages/WhyOurPageIsBlack/WhyOurPageIsBlack.css";

import LandingPage from "./pages/LandingPage/LandingPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Contact from "./components/Contact/Contact";
import Explore from "./pages/Explore/Explore";
import HowItWork from "./pages/HowItWork/HowItWork";
import Membership from "./pages/Membership/Membership";
import PlanetEarth from "./pages/PlanetEarth/PlanetEarth";
import WhyOurPageIsBlack from "./pages/WhyOurPageIsBlack/WhyOurPageIsBlack";
import CoCreators from "./pages/CoCreators/CoCreators";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import VIdeoPage from "./pages/VideoPage/VIdeoPage";
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import Podcast from "./pages/Podcast/Podcast";
import ContactPage from "./pages/ContactPage/ContactPage";
import ScrollToTop from "./components/ScrollToTop";

const AppContent = () => {
  const location = useLocation();
  const hideNavFooter =
    location.pathname === "/planet-earth" ||
    location.pathname === "/co-creators";

  return (
    <>
      <ScrollToTop />
      {!hideNavFooter && <NavBar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/how-it-works" element={<HowItWork />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/why-our-page-is-black" element={<WhyOurPageIsBlack />} />
        <Route path="/co-creators" element={<CoCreators />} />
        <Route path="/planet-earth" element={<PlanetEarth />} />
        <Route path="/videos/:id" element={<VIdeoPage />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/podcast/:id" element={<Podcast />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {!hideNavFooter && (
        <div className="footer-holder">
          <Footer /> <div className="static-part">copyright © larger.world</div>
        </div>
      )}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
