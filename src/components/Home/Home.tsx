import React, { useContext } from "react";
import "../../styles/home-styles/home.css";
import homeLogo from "../../assets/image/color_logo.png";
import Type from "./Type";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";

function Home() {
  const { mobile } = useContext(DataContext);

  return (
    <section id="home" className="home-container">
      <div className="home-zone">
        <div className="home-zone-left">
          <h1 className="heading">
            Hoşgeldin!{" "}
            <span className="wave" role="img">
              👋🏻
            </span>
          </h1>

          <h1 className="heading-name">
            BİZ GTU
            <strong className="heading-name-main">
              {" "}
              BİLGİSAYAR TOPLULUĞUYUZ
            </strong>
          </h1>
          <Type />
          {mobile && (
            <Link
              to={"/geekday"}
              className="navbar-special"
              style={{
                alignSelf: "flex-start",
                marginTop: 12,
                paddingLeft: 28,
                paddingRight: 28,
                paddingTop: 16,
                paddingBottom: 16,
              }}
            >
              GeekDay 2025!
            </Link>
          )}
        </div>
        <div className="home-image-box">
          <img src={homeLogo} alt="home" className="home-image" />
        </div>
      </div>
    </section>
  );
}

export default Home;
