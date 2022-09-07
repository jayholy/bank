import React from 'react'
import styles, {layout} from '../style'
import { card  } from '../assets'
import Button from './Button';

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          {" "}
          Find a better card deal <br className="hidden sm:block" /> in few easy
          steps.
        </h2>
        <p className={`max-w-[470px] mt-5 ${styles.paragraph} `}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem ea maiores velit, eveniet modi beatae illum repellat
          laboriosam adipisci voluptates. Nihil illo voluptatum possimus ipsa.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} className="w-[100%] h-[100%]" alt="" />
      </div>
    </section>
  );
}

export default CardDeal