import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section
      className={`${styles.padding}${styles.marginY} bg-black-gradient-2 sm:flex-row flex-col box-shadow rounded-[20px] ${styles.flexCenter}`}
    >
      <div>
        <h2 className={styles.heading2}>
          Let's try <span className="text-gradient">our</span> service now
        </h2>
        <p className={`max-w-[470px] mt-5 ${styles.paragraph} `}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laborum
          natus. Libero nisi dolore fuga quam repudiandae recusandae?
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mb-10`}>
        <Button  />
      </div>
    </section>
  );
}

export default CTA