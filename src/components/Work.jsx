import React from "react";
import headerImg from "../assets/header-img.svg";
import googleBrandImg from "../assets/brands/google.svg";
import beBrandImg from "../assets/brands/be.svg";
import dribbbleBrandImg from "../assets/brands/dribbble.svg";
import appleBrandImg from "../assets/brands/apple.svg";
import awwwardsBrandImg from "../assets/brands/awwwards.svg";
import Skill from "./Skill";
import { useSelector } from "react-redux";
import LatestWork from "./LatestWork";
import Client from "./Client";

const Work = () => {
  const { skills, works, clients } = useSelector((state) => state.work);
  return (
    <main className="work">
      <header className="work__header">
        <h1 className="work__header-title">Visual Designer</h1>
        <h2 className="work__header-niche">Branding | Image making</h2>
        <p className="work__header-text">
          This is a template Figma file, turned into code using Anima. Learn
          more at AnimaApp.com
        </p>
        <img className="work__header-img" src={headerImg} alt="Home Image" />
      </header>
      <div className="work__brands">
        <div className="work__brands-row">
          <img className="work__brand-img" src={googleBrandImg} alt="Google" />
          <img className="work__brand-img" src={beBrandImg} alt="Be" />
        </div>
        <div className="work__brands-row">
          <img
            className="work__brand-img"
            src={dribbbleBrandImg}
            alt="dribbble"
          />
          <img className="work__brand-img" src={appleBrandImg} alt="Apple" />
        </div>
        <div className="work__brands-row">
          <img
            className="work__brand-img"
            src={awwwardsBrandImg}
            alt="awwwards"
          />
        </div>
      </div>
      <div className="work__skills">
        {skills.map((skill) => (
          <Skill key={skill.title} skill={skill} />
        ))}
      </div>
      <div className="work__latest-works">
        <h3 className="work__latest-works__title">Latest Work</h3>
        <div className="work__latest-works__list">
          {works.map((work) => (
            <LatestWork key={work.title} work={work} />
          ))}
        </div>
      </div>
      <div className="work__clients">
        <h3 className="work__clients__title">Clients</h3>
        <div className="work__clients__list">
          {clients.map((client) => (
            <Client key={client.name} client={client} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Work;
