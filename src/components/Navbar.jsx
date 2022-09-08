import React  from 'react'
import {close , menu ,logo} from '../assets'
import { useState } from 'react'
import {navLinks} from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="">
      <nav className="w-full   flex justify-between items-center navbar py-6">
        <img
          src={logo}
          alt="hoobank"
          className="w-[124px] cursor-pointer h-[32px]"
        />
        <ul className="hidden list-none sm:flex justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal hover:text-[#78E3EA]  hover:scale-[1.7] ease-in-ease-out duration-300 text-[16px] text-white ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden justify-end flex flex-1 items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] object-contain h-[28px]"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={` ${
              toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-4 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className=" list-none flex flex-col justify-center items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  onClick={() => setToggle((prev) => !prev)}
                  key={nav.id}
                  className={`font-poppins font-normal text-[16px] text-white ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-10"
                  }`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar