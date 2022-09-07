import React from "react";
import styles, { layout } from "../style";
import { apple, bill, google } from "../assets";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="" className="w-[100%] relative z-[5] h-[100%] " />
        <div className="white__gradient absolute rounded-full -left-1/2 top-0   z-[3] w-[50%] h-[50%]" />
        <div className="pink__gradient absolute  -left-1/2 bottom-0 z-0 w-[50%] h-[50%]" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily Control Your <br className="hidden sm:block" /> Billing &
          invoicing.
        </h2>
        <p className={`max-w-[470px] mt-5 ${styles.paragraph} `}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime sint
          velit debitis, culpa, fuga aut illo enim nobis quo eius voluptate
          repellendus in vitae sunt, nulla molestiae? Atque.
        </p>
        <div className="sm:mt-10 flex gap-4 ml-6 text-center     flex-row mt-6 flex-wrap">
          <a href="https://twitter.com/90es_k " target="_blank">
            <img src={apple} alt="" />
          </a>
          <a href="https://twitter.com/90es_k " target="_blank">
            <img src={google} alt="" />
          </a>

          
        </div>
      </div>
    </section>
  );
};

export default Billing;
