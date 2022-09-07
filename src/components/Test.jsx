import React from "react";
import styles, { layout } from "../style";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Tets = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} relative flex flex-col ${styles.flexCenter}`}
    >
      <div className="white__gradient absolute rounded-full   bottom-40 z-[0] w-[80%] h-[80%]" />
      <div className="blue__gradient absolute rounded-full   -right-[50%] z-[1] w-[60%] h-[60%]" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 relative mb-6 z-[1]">
        <h1 className={styles.heading2}>
          What people are <br className="sm:block hidden" /> saying about{" "}
          <span className="text-gradient">us</span>{" "}
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`max-w-[470px] mt-5 ${styles.paragraph} `}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae 4
            explicabo fugit excepturi, deleniti suscipit delectus esse
          </p>
        </div>
      </div>
      <div
        className="flex flex-wrap sm:justify-start
       justify-center w-full feedback-container relative z-[1]"
      >
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Tets;
