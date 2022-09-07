import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, index, content, title }) => (
  <div
    className={`flex flex-row rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card p-6`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}
    >
      <img src={icon} className="w-[50%]  object-contain h-[50%]" alt="" />
    </div>
    <div
      className="flex flex-1  flex-col ml-3
    "
    >
      <h4 className="font-poppins font-semibold text-white text-[18px] mb-1 leading-[23px]">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[14px] mb-1 leading-[14px]">
        {content}
      </p>
    </div>
  </div>
);

const Bussiness = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do need the business, <br className="sm:block hidden" /> we'll
          handle the kudi.
        </h2>
        <p className={`max-w-[470px] mt-5 ${styles.paragraph} `}>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam illo
          eveniet expedita aliquam quod unde architecto quasi, perspiciatis
          quibusdam aut labore, voluptatum ipsam nemo obcaecati molestiae
          molestias aperiam at non?
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg}  flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Bussiness;
