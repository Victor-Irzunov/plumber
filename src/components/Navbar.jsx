import { useState } from "react";

import { close, logo, menu, phone, clock, } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false)
  const [isToggle, setIsToggle] = useState(false)


  return (
    <nav className="w-[100%] flex py-3 justify-between items-center navbar">
      <a href={`#home`}><img src={logo} alt="Логотип компании" title="Логотип компании" className="w-[60px]" /></a>


      <a href="tel:+375290000000"
        className="sm:block sd:hidden xm:mr-6 ml-5"
      ><img src={phone}
        alt="телефон"
        title="иконка телефона"
        className="w-8"
        /></a>
      <a href="tel:+375290000000"
        className="text-white sm:hidden sd:block xx:hidden sd:mr-0 ml-2 mr-5"
      >
        +375 29 000 00 00
      </a>


      <div className="relative xx:ml-8">
        <ul className={`
          border-solid 
          border-2
          border-cyan-400 
          rounded-xl
          p-3
          text-white
          absolute
          top-10
          z-50
          bg-black-gradient-2
          w-max
          ${isToggle ? 'block' : 'hidden'}
          sidebar
          `}
        >
          <li>пн: 8:00-20:00</li>
          <li>вт: 8:00-20:00</li>
          <li>ср: 8:00-20:00</li>
          <li>чт: 8:00-20:00</li>
          <li>пт: 8:00-20:00</li>
          <li>сб: 8:00-20:00</li>
          <li className="text-red-500">вс: выходной</li>
        </ul>
        <img
          src={clock}
          alt="режим работы"
          title="режим работы"
          className="sm:block sd:hidden w-8"
          onClick={() => setIsToggle(i => !i)}
        />

      </div>
      <div className="sm:hidden sd:block xx:hidden sd:ml-0 ml-3">
        <span className="text-white text-xs uppercase mr-1">
          пн-cб
        </span>
        <span className="text-white">
          8:00-20:00
        </span>
      </div>




      <ul className="list-none sm:flex hidden justify-end items-center">{/* flex-1 */}
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer 
            text-[16px]
            ${active === nav.title ? "text-white" : "text-dimWhite"} 
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${!toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;
