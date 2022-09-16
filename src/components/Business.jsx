import React, { useState } from "react"
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import Modal from "./Modal";

const FeatureCard = ({ icon, title, content, index, price }) => {
  const [isModal, setIsModal] = useState(false)
  return (

    <div
      className={`
    group
    w-[90%] 
    flex 
    sm:flex-row 
    py-2 
    sd:px-4
    xx:px-0
    xy:flex-col
    items-center 
    rounded-[20px] 
    ${index !== features.length - 1 ? "mb-1" : "mb-0"} 
    feature-card
    mt-1
    `}
    >
      {isModal &&
        <Modal title={title} setIsModal={setIsModal} />
      }

      <div className="
      w-full 
      flex
      sm:text-left	
      xy:text-center
      sm:flex-row
      xy:flex-col
      justify-between
      items-center
      sm:mr-10
      xx:mr-0"
      >
        <h4 className="
        font-poppins font-semibold
        basis-1/3 text-white
        text-[20px]
        leading-[23.4px] mb-1
        ">
          {title}
        </h4>
        <p className="
        font-poppins
        basis-1/2
        ss:basis-1/1
        font-normal
        text-white
        opacity-25
        group-hover:opacity-70
        text-[13px]
        leading-[24px]
        p-4"
        >
          {content}
        </p>
        <p className="font-poppins
          basis-1/8 font-normal
          text-center text-white
          text-[22px] leading-[24px]
          ">
          {price} руб.
        </p>
      </div>
      <Button styles={``} setIsModal={setIsModal} />
    </div>
  )
}

const Business = () => (
  <section id="service" className={`${layout.section}`}>



    <div className={layout.sectionInfo2}>
      <h2 className={styles.heading2}>
        Стоимость услуги сантехника в Минске
      </h2>
      {/* // <br className="sm:block hidden" /> */}
      <p className={`${styles.paragraph} w-full mt-5`}>
        Консультация по телефону БЕСПЛАТНО. Чтобы быстро устранить проблему и узнать более точную сумму, Вам необходимо как можно подробнее описать случившуеся поломку. Стоимость услуг сантехника зависит от объема и сложности работ. Мы предлагаем гибкую систему скидок для клиентов с крупными заказами. Обращаем Ваше внимание, что цена может незначительно измениться если появятся непредусмотренные сложности в процессе выполнения работ.
      </p>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>


  </section>
);

export default Business;
