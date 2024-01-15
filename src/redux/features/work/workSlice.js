import { createSlice } from "@reduxjs/toolkit";

import productDesignImg from "../../../assets/skills/product-design.svg";
import artDirectionImg from "../../../assets/skills/art-direction.svg";
import visualDesignImg from "../../../assets/skills/visual-design.svg";

import freeBirdImg from "../../../assets/works/free-bird.svg";
import purpleHazeImg from "../../../assets/works/purple-haze.svg";
import youReallyGotMeImg from "../../../assets/works/you-really-got-me.svg";
import americanGirlImg from "../../../assets/works/american-girl.svg";
import wholeLottaLoveImg from "../../../assets/works/whole-lotta-love.svg";
import underPressureImg from "../../../assets/works/under-pressure.svg";


const initialState = {
  skills: [
    {
      title: "Product design",
      text: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      img: productDesignImg,
    },
    {
      title: "Art direction",
      text: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      img: artDirectionImg,
    },
    {
      title: "Visual design",
      text: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      img: visualDesignImg,
    },
  ],
  works: [
    {
      title: "Free Bird",
      text: "Lynyrd Skynyrd",
      img: freeBirdImg,
    },
    {
      title: "Purple Haze",
      text: "Jimi Hendrix",
      img: purpleHazeImg,
    },
    {
      title: "You Really Got Me",
      text: "The Kinks",
      img: youReallyGotMeImg,
    },
    {
      title: "American Girl",
      text: "Tom Petty",
      img: americanGirlImg,
    },
    {
      title: "Whole Lotta Love",
      text: "Led Zeppelin",
      img: wholeLottaLoveImg,
    },
    {
      title: "Under Pressure ",
      text: "Queen",
      img: underPressureImg,
    },
  ],
};
const workSlice = createSlice({
  name: "work",
  initialState,
});

export default workSlice.reducer;
