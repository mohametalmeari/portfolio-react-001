import productDesignImg from '../../../assets/skills/product-design.svg';
import artDirectionImg from '../../../assets/skills/art-direction.svg';
import visualDesignImg from '../../../assets/skills/visual-design.svg';
import { createSlice } from '@reduxjs/toolkit';

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
};
const workSlice = createSlice({
  name: "work",
  initialState,
});

export default workSlice.reducer;