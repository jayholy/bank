import React from 'react'
import { clients } from '../constants'
import styles from '../style'

const Client = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`flex-wrap w-full ${styles.flexCenter} `}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
          >
            <img
              src={client.logo}
              className="w-[100px] sm:w-[192px] object-contain shadow-2xl border-none cursor-pointer  hover hover:shadow-cyan-500/50 transition-all duration-400 ease-in-out hover:scale-125"
              alt=""
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Client