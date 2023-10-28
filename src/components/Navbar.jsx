import { useEffect, useState } from "react";
import { close, logo, menu, phone, clock } from "../assets";
import { navLinks } from "../constants";

const Navbar = ({
  isInViewHero,
  isInViewBusiness,
  isInViewBilling,
  isInViewTestimonials,
}) => {
  const [active, setActive] = useState("Home");
  const [isActive, setIsActive] = useState("home");
  const [toggle, setToggle] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const [isPhoneMenuOpen, setIsPhoneMenuOpen] = useState(false);

  useEffect(() => {
    if (isInViewHero) {
      setIsActive("home");
    } else if (isInViewBusiness) {
      setIsActive("service");
    } else if (isInViewBilling) {
      setIsActive("work");
    } else if (isInViewTestimonials) {
      setIsActive("clients");
    }
  }, [isInViewHero, isInViewBusiness, isInViewBilling, isInViewTestimonials]);

  return (
    <nav className="w-[100%] flex py-3 justify-between items-center navbar">
      <a href={`#home`}>
        <img src={logo} alt="Логотип компании" title="Логотип компании" className="sm:w-[130px] xz:w-[110px]" />
      </a>


      <div className="phone-icon-container relative sm:block sd:hidden">
        <img
          src={phone}
          alt="телефон"
          title="иконка телефона"
          className="w-8 xm:mr-6 ml-5 xz:mr-7"
          onClick={() => setIsPhoneMenuOpen(i => !i)}
        />

        <div className={` border-solid 
          border-2
          border-cyan-400 
          rounded-xl
          p-3
          text-white
          absolute
          top-10
          -left-16
          z-50
          bg-black-gradient-2
          w-max
          sidebar ${isPhoneMenuOpen ? 'block' : 'hidden'}`}
        >
          <a href="tel:+375256009412" className="text-white xz:block sd:hidden mb-4">
            Витебск +375 25 600-94-12
          </a>
          <a href="tel:+375256009413" className="text-white xz:block sd:hidden mb-4">
            Гомель{' '}{' '} +375 25 600-94-13
          </a>
          <a href="tel:+375256009416" className="text-white xz:block sd:hidden">
            Могилев +375 25 600-94-16
          </a>
        </div>
      </div>


      <div className='sd:flex justify-between xz:hidden'>
        <a href="tel:+375256009412" className="text-white mr-3 text-center">
          <span className="text-gradient block">Витебск</span> +375 25 600-94-12
        </a>
        <a href="tel:+375256009413" className="text-white mx-3 text-center">
        <span className="text-gradient block">Гомель</span>{' '}{' '} +375 25 600-94-13
        </a>
        <a href="tel:+375256009416" className="text-white text-center ml-3">
        <span className="text-gradient block">Могилев</span> +375 25 600-94-16
        </a>
      </div>



      <div className="relative xx:ml-8">
        <ul
          className={`
          border-solid 
          border-2
          border-cyan-400 
          rounded-xl
          p-3
          text-white
          absolute
          top-10
          -left-16
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
        <img src={clock} alt="режим работы" title="режим работы" className="sm:block sd:hidden w-8" onClick={() => setIsToggle(i => !i)} />
      </div>

      <ul className="list-none sm:flex hidden justify-end items-center">{/* flex-1 */}
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${isActive === nav.id ? "text-white" : "text-dimWhite"} ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
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
        <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"} ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
