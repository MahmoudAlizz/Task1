import React from "react";
import Image from "../../assets/Images/cards.png";
import { TbMessageLanguage } from "react-icons/tb";
import { FaGraduationCap } from "react-icons/fa";
import { RxReader } from "react-icons/rx";
import { HiOutlineInformationCircle } from "react-icons/hi";
import Style from "./item.module.css";
import { Fragment } from "react";

interface Props {
  lang: string[];
  learn: string[];
  read: string[];
  about: string;
}
const item = ({ lang, learn, read, about }: Props) => {
  return (
    <div className="col-2 p-0 m-2">
      <div className="card">
        <img src={Image} alt="" className="card-img-top w-50 m-auto" />
        <div className="card-body py-0 px-2">
          <small className="px-2 mb-0">E-Learning for kids</small>
          <div className="d-flex   justify-content-around my-2">
            <div className="dropdown">
              <a
                href="#"
                className={`p-1 ${[Style.bg1, Style["border-r-4"]].join(" ")}`}
                data-toggle="dropdown"
              >
                <TbMessageLanguage size={20} color="white" />
              </a>
              <ul className="dropdown-menu">
                {lang.map((item, index) => {
                  if (index == lang.length - 1) {
                    return (
                      <li key={index} className="dropdown-item">
                        {item}
                      </li>
                    );
                  }
                  return (
                    <Fragment key={index}>
                      <li className="dropdown-item">{item}</li>
                      <div className="dropdown-divider"></div>
                    </Fragment>
                  );
                })}
              </ul>
            </div>
            <div className="dropdown">
              <a
                href="#"
                className={`p-1 ${[Style.bg2, Style["border-r-4"]].join(" ")}`}
                data-toggle="dropdown"
              >
                <FaGraduationCap size={20} color="white" />
              </a>
              <ul className="dropdown-menu">
                {learn.map((item, index) => {
                  if (index == learn.length - 1) {
                    return (
                      <li key={index} className="dropdown-item">
                        {item}
                      </li>
                    );
                  }
                  return (
                    <Fragment key={index}>
                      <li className="dropdown-item">{item}</li>
                      <div className="dropdown-divider"></div>
                    </Fragment>
                  );
                })}
              </ul>
            </div>
            <div className="dropdown">
              <a
                href="#"
                className={`p-1 ${[Style.bg3, Style["border-r-4"]].join(" ")}`}
                data-toggle="dropdown"
              >
                <RxReader size={20} color="white" />
              </a>
              <ul className="dropdown-menu">
                {read.map((item, index) => {
                  if (index == read.length - 1) {
                    return (
                      <li key={index} className="dropdown-item">
                        {item}
                      </li>
                    );
                  }
                  return (
                    <Fragment key={index}>
                      <li className="dropdown-item">{item}</li>
                      <div className="dropdown-divider"></div>
                    </Fragment>
                  );
                })}
              </ul>
            </div>
            <div className="dropdown">
              <a
                href="#"
                className={`p-1 ${[Style.bg4, Style["border-r-4"]].join(" ")}`}
                data-toggle="dropdown"
              >
                <HiOutlineInformationCircle size={20} color="white" />
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-item">{about}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-footer py-0">
          <small className="">Elementery math for kg - grad 6</small>
        </div>
      </div>
    </div>
  );
};

export default item;
