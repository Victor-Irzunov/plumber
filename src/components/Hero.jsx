import React, { useState, useEffect } from "react"
import { useInView } from 'react-intersection-observer';
import styles from "../style";
import { plumber } from "../assets";
import GetStarted from "./GetStarted";
import Modal from "./Modal";


const Hero = ({ setIsInView }) => {
  const [isModal, setIsModal] = useState(false)

  const { ref, inView, entry } = useInView({
    initialInView: true,
    threshold: 0,
    // triggerOnce: true,
  });


  useEffect(() => {
    setIsInView(inView)
  }, [inView])

  return (
    <section id="home" ref={ref} className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      {isModal &&
        <Modal title={"Вызвать мастера"} setIsModal={setIsModal} />
      }
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 sm:py-24 xz:pt-20 xz:pb-5`}>
        <div className="flex flex-row items-center py-[6px] px-4 xy:px-2 bg-discount-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph} xy:text-[15px] xs:text-[18px] ml-2 xy:ml-0`}>
            <span className="text-white">Выезд</span> при выполнении {" "}
            работ <span className="text-white">бесплатный</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Услуга <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Муж на час</span><br />
            с выездом к клиенту.
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted setIsModal={setIsModal} />
          </div>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Выполняем работы по дому или офиссу любой сложности. Делаем чисто и аккуратно. Гарантия на наши работы от 14 календарных дней. Используем только качаственные материалы. Если мы закупаем необходимые материалы, то предостовляем чеки. Наши специалисты готовы предоставить вам бесплатные консультации по всем вопросам.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={plumber} alt="billing" className="w-[80%] relative z-20" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted setIsModal={setIsModal} />
      </div>
    </section>
  );
};

export default Hero;
