import React from "react";
import headerImg from "../assets/header-img.svg";

const Work = () => {
  return (
    <div className="work">
      <header className="work__header">
        <h1 className="work__header-title">Visual Designer</h1>
        <h2 className="work__header-niche">Branding | Image making</h2>
        <p className="work__header-text">
          This is a template Figma file, turned into code using Anima. Learn
          more at AnimaApp.com
        </p>
        <img className="work__header-img" src={headerImg} alt="Home Image" />
      </header>
    </div>
  );
};

export default Work;
