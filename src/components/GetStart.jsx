import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStart = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[110px] h-[110px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} bg-primary flex-col w-[100%] rounded-full h-[100%]`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins  font-medium text-[15px] leading-[23px] mr-2 ">
            <span className="text-gradient">Get</span>
           
          </p> <img
              src={arrowUp}
              className="w-[19px] h-[19px] object-contain"
              alt=""
            />
        </div>
        <p className="font-poppins  font-medium text-[15px] leading-[23px] ">
          <span className="text-gradient">Started</span>
         
        </p>
      </div>
    </div>
  );
}

export default GetStart