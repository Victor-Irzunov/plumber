import styles from "../style";
import { logo } from "../assets";
import { socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} py-3 flex-col`} id="contact">
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="hoobank"
          className="w-[300px] h-[82.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          Опытные мастера сделает всё качественно, аккуратно и недорого.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row text-white text-center justify-between flex-wrap md:mt-0 mt-10">
        <div className="flex-[1]">
          <h4 className="text-[22px]">Наши контакты</h4>
          <div className='mt-2'>
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
        </div>

        <div className="flex-[1] ">
          <h4 className="sd:text-base xz:text-sm text-white/70 mb-2">Наши реквизиты</h4>
          <p className={`text-gray-400 text-sm`}>
            ООО «Услуга Плюс»<br />
            УНП 391846576<br />
            Зарегистрировано Администрацией Октябрьского района г. Витебска 20.10.2023<br />
            Юридический адрес: 210026, г. Витебск, ул. Гагарина 4а<br />
            р/с: BY16 BPSB 3012 3375 4601 9933 0000 Банк ОАО «Сбер Банк» г. Витебск, ул. Ленина 26 БИГ:BPSBBY2X
          </p>
        </div>
      </div>
    </div>

    <div className="
    w-full 
    flex
    justify-between
    items-center 
    md:flex-row
    flex-col 
    sm:pt-4 
    xx:pt-1 
    border-t-[1px]
    border-t-[#3F3E45]
    ">
      <p className="
      font-poppins
      font-normal
      text-center
      sm:text-[14px]
      xy:text-[10px]
      leading-[27px]
      text-white
      opacity-30
      hover:opacity-90
      ">
        Copyright Ⓒ 2023. Created & Designed By <a href="https://vi-tech.by" className="text-gradient" target="_blank">VI:TECH</a>. &nbsp; Все права защищены. Информация на сайте не является публичной офертой.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            title={social.id}
            className={`w-[21px] h-[21px] mx-5 object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
