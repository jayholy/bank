import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStart from "./GetStart";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div className={`${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex items-center flex-row px-4 py-[6px] bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt=" discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20% </span> Discount For {""}
            <span className="text-white"> 1 Month</span> Account
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 text-white font-poppins font-semibold ss:text-[72px] ss:leading-[100px] leading-[75px] text-[52px] ">
            The Next <br className="sm:block hidden" /> {"  "}{" "}
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStart />
          </div>
        </div>
        <h1 className="w-full text-white font-poppins font-semibold ss:text-[68px] ss:leading-[100px] leading-[75px] text-[52px] ">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          corporis omnis eaque nemo quos voluptas dolor perspiciatis accusamus,
          ea illum. Suscipit tenetur a sit voluptatum facilis libero alias?
        </p>
      </div>
      <div>
        <img src={robot} className="w-[100%] h-[100%] z-[5] relative" alt="" />
        <div className="pink__gradient absolute  top-0 z-0 w-[40%] h-[35%]" />
        <div className="white__gradient absolute rounded-full left-0  bottom-40 z-[1] w-[80%] h-[80%]" />
        <div className="blue__gradient absolute  right-20 bottom-20 z-0 w-[50%] h-[50%]" />
      </div>
    </section>
  );
};

export default Hero;
