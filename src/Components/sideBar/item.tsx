import React from "react";
import { ReactNode } from "react";
import Style from "./sideBar.module.css";

interface Props {
  title: string;
  icon: ReactNode;
}
const item = ({ title, icon }: Props) => {
  return (
    <div key={Math.random()} className="d-flex my-1 mx-auto w-75">
      <i className={`p-1 ${Style.icon}`}>{icon}</i>
      <p className={`align-self-center ml-3 mb-0  ${Style.title1}`}>{title}</p>
    </div>
  );
};

export default item;
