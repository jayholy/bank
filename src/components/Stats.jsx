import React from 'react'
import styles from '../style'
import { stats } from '../constants'

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex flex-row mb-6 sm:mb-20 flex-wrap`}
    >
      {stats.map((stat) => (
        <div key={stat.id} className="">
          <h4 className="text-white font-poppins font-semibold xs:leading-[53px] leading-[43px] text-[30px] xs:text-[40px]">
            {stat.value}
          </h4>
          <p>{stat.title}</p>
        </div>
      ))}
    </section>
  );
}

export default Stats