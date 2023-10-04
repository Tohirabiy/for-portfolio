import React from "react";
import Git from "../../assets/icons/git.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Figma from "../../assets/icons/figma.svg";
import Location from "../../assets/icons/location.svg";
import Dot from "../../assets/icons/dot.svg";
import Me from "../../assets/images/me.jpg";
import "./style.scss";

const index = () => {
  return (
    <section
      id="hero_it"
      className="hero  pt-[106px] px-[32px] pb-[96px] {` dark:bg-black dark:text-white`}"
    >
      <div className="container ">
        <div className="herod flex justify-between">
          <div className="lefto">
            <div className="top">
              <h2 className="mb-[8px] colri  dark:text-white  leadingd text-[62px]">
                Hi, I’m Tohirjon 👋
              </h2>
              <p className="dsd leading-6 font-normal  ">
                I'm a front-end developer with a focus on creating exceptional
                digital experiences that are fast, accessible, visually
                appealing, and responsive. I love it because it represents
                something new.
              </p>
            </div>
            <div className="middle mt-[48px]  {` dark:text-white text-black`}">
              <div className="firsrr mb-2 flex gap-x-[8px] text-[#4B5563]">
                <img src={Location} alt="" />
                <p className={` dark:text-white text-black`}>
                  Tashkent, Chilonozor
                </p>
              </div>
              <div className="firsrr flex gap-x-[8px] text-[#4B5563]">
                <img src={Dot} alt="" />
                <p className={` dark:text-white text-black`}>
                  Available for new projects
                </p>
              </div>
            </div>

            <div className="bottom flex gap-x-1 mt-[48px]">
              <a
                className="underline"
                target="_blank"
                href="https://github.com/Tohirabiy"
              >
                <img
                  className="p-[6px]  max-w-xs transition duration-300 ease-in-out hover:scale-110     "
                  src={Git}
                  alt=""
                />
              </a>
              .
              <a href="https://twitter.com" target="_blank">
                <img
                  className="p-[6px]  max-w-xs transition duration-300 ease-in-out hover:scale-110  "
                  src={Twitter}
                  alt=""
                />
              </a>
              <a href="https://www.figma.com" target="_blank">
                <img
                  className="p-[6px]  max-w-xs transition duration-300 ease-in-out hover:scale-110  "
                  src={Figma}
                  alt=""
                />
              </a>
              <a href="https://www.instagram.com/Tohir_axiy_/" target="_blank">
                <i className="bx  max-w-xs transition duration-300 ease-in-out hover:scale-110 iclass text-[31px] dark  bxl-instagram"></i>
              </a>
            </div>
          </div>
          <div className="righto">
            <div class="vv">
              <img className="top-image" src={Me} alt="Base Image" />
              <div className="bottom-image"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
