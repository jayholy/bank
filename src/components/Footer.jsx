import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`md:flex-row ${styles.flexStart} flex-col mb-8 w-full`}>
        <div className="flex flex-1 flex-col justify-start mr-10">
          <img
            src={logo}
            className="h-[76px] w-[260px] object-contain"
            alt=""
          />
          <p className={`${styles.paragraph} text-left mt-4 max-w-[355px]`}>
            {" "}
            Lorem ipsum dolor, a exercitationem ullam ea tempora eligendi.
          </p>
        </div>
        <div
          className="flex-[1.5] flex flex-row justify-center gap-[3rem] flex-wrap md:mt-0
 mt-10 w-full"
        >
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[20px] leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <ul className="mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`text-[16px] ${
                      index !== footerLink.links.length - 1 ? "mr-4" : "mb-0"
                    }  font-poppins font-normal 
     cursor-pointer text-dimWhite hover:text-secondary`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full flex flex-col justify-between items-center pt-6 border-t-[1px] border-t-gradient'>
        <p className="font-poppins font-normal text-center text-[17px] mt-2 leading-[27px] text-dimWhite">
          2022 HoObank ©. All rights reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              className={`${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }  
             object-contain mt-5 text-center w-[21px] h-[21px] cursor-pointer `}
              alt=""
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer