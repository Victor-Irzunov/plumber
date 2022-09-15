import styles from "../style";
import { logo } from "../assets";
import { socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="hoobank"
          className="w-[300px] h-[82.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          Опытный сантехник сделает всё качественно, аккуратно и недорого.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row text-white text-center justify-between flex-wrap md:mt-0 mt-10">
        <div className="flex-[1]">
          <h4 className="text-[22px]">Наши контакты</h4>
          <p className={`${styles.paragraph} text-[16px]`}>
            г. Минск, ул. просп. Независимости 100 помщ. 100<br />
            +375 29 000-00-00
          </p>
        </div>

        <div className="flex-[1]">
          <h4 className="text-[22px]">Наши реквизиты</h4>
          <p className={`${styles.paragraph} text-[16px]`}>
            ИП «ПрофСантех»<br/>
            УНП 193609000<br/>
            Зарегистрировано Минским горисполкомом 19.07.2017г.<br/>
            Юридический адрес: 220040, г. Минск, ул. просп.Независимости 100 помщ.100<br/>
            р/с: BY30 000 000 000 000 0000 в ЗАО «Ваш-Банк»
          </p>
        </div>
      </div>
    </div>

    <div className="
    w-full flex justify-between
    items-center md:flex-row
    flex-col sm:pt-4 xx:pt-1  border-t-[1px]
    border-t-[#3F3E45]">
      <p className="
      font-poppins
      font-normal
      text-center
      sm:text-[14px]
      xx:text-[10px]
      leading-[27px]
      text-white
      opacity-30
      hover:opacity-90
      ">
        Copyright Ⓒ 20..-2022. Created & Designed By <a href="https://vi-tech.by" className="text-gradient" target="_blank">VI:TECH</a>. &nbsp; Все права защищены. Информация на сайте не является публичной офертой.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            title={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
