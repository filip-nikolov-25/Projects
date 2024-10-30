import { useState } from "react";
import { Link } from "react-router-dom";
import AppContainer from "./base/AppContainer/AppContainer";

const NavBar = () => {
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  return (
    <nav className="navbar sticky-top d-flex align-items-center justify-content-between text-white">
      <AppContainer disablePadding={true}>
        <div
          className="logo"
          onMouseOver={(e) => {
            setIsLogoHovered(true);
          }}
          onMouseOut={(e) => {
            setIsLogoHovered(false);
          }}
        >
          <Link to="/">
            <img
              src="../../public/logo.png"
              alt=""
              className={`${
                !isLogoHovered ? "transition-rotate" : ""
              } transition1S`}
            />
            <div
              className={`${
                isLogoHovered ? "text-darker" : ""
              } transition05S text-white`}
            >
              larger.world
            </div>
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/how-it-works">how it works</Link>
          </li>
          <li>
            <Link to="/membership">membership</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
        <div className="nav-search-profile">
          <a
            href="https://www.linkedin.com/company/larger-world/?originalSubdomain=at"
            target="blank"
          >
            <img src="../../public/Linkedin icon.png" alt="" />
          </a>
          <Link to={"/explore"}>
            <img src="../../public/Search icon.png" alt="" />
          </Link>
          <img src="../../public/user.png" alt="" />
        </div>
      </AppContainer>
    </nav>
  );
};

export default NavBar;
