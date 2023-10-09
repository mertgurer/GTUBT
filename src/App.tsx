import React, { useEffect, useState } from "react";
import "./App.css";

import Background from "./components/Base/Background";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Aboutus from "./components/Aboutus/Aboutus";
import Events from "./components/Events/Events";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";

import wave from "./assets/image/wave.svg";
import icon from "./assets/image/white_logo.png";
import logo from "./assets/image/color_logo.png";
import LoadingScreen from "./components/Base/LoadingScreen";
import Recruit from "./components/Recruit/Recruit";

function App() {
  const [ready, setReady] = useState(false);

  return (
    <>
      {ready ? (
        <>
          <LoadingScreen faint={true} />
          <Background />
          <Navbar />
          <Home />
          <Aboutus />
          <div className="transition-image-box">
            <img src={wave} alt="" className="transition-image" />
          </div>
          <Events />
          <Education />
          <Recruit />
          <Contact />
        </>
      ) : (
        <LoadingScreen />
      )}
      <ImagePreloader
        imageUrl={logo}
        onImageLoad={() => {
          setTimeout(() => {
            setReady(true);
          }, 2000);
        }}
      />
      <ImagePreloader
        imageUrl={icon}
        onImageLoad={() => {
          setTimeout(() => {
            setReady(true);
          }, 2000);
        }}
      />
    </>
  );
}

interface ImagePreloaderProps {
  imageUrl: string;
  onImageLoad: () => void;
}

function ImagePreloader({ imageUrl, onImageLoad }: ImagePreloaderProps) {
  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      onImageLoad();
    };
  }, [imageUrl, onImageLoad]);

  return null;
}

export default App;
