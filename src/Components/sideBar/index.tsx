import React from "react";
import Item from "./item";
import { BiCut } from "react-icons/bi";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { MdOutlineAutoStories } from "react-icons/md";
import { FaCalculator } from "react-icons/fa";
import { MdOutlineScience } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import { BiCodeBlock } from "react-icons/bi";
import Image from "../../assets/Images/p1.png";
const sideBar = () => {
  return (
    <div className=" mt-3 text-center">
      <Item
        icon={[<BiCut size="35" color="white" />]}
        title="Software Program"
      />
      <Item
        icon={[<TbDeviceGamepad2 size="35" color="white" />]}
        title="Games"
      />
      <Item
        icon={[<MdOutlineAutoStories size="35" color="white" />]}
        title="Stories"
      />
      <Item icon={[<FaCalculator size="35" color="white" />]} title="Maths" />
      <Item
        icon={[<MdOutlineScience size="35" color="white" />]}
        title="Science"
      />
      <Item
        icon={[<GiMaterialsScience size="35" color="white" />]}
        title="Cross-Curricular"
      />
      <Item
        icon={[<BiCodeBlock size="35" color="white" />]}
        title="Tech & Coding"
      />
      <img src={Image} alt="" />
    </div>
  );
};

export default sideBar;
