import { help } from "../assets";
import React from "react"
import { useInView } from 'react-intersection-observer';
import styles, { layout } from "../style";
import { useEffect } from "react";


const Billing = ({ setIsInView }) => {
  const { ref, inView, entry } = useInView({
    initialInView: true,
  });

  useEffect(() => {
    setIsInView(inView)
  }, [inView])

  return (
    <section id="work" ref={ref} className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={help} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Как мы<br className="sm:block hidden" /> работаем
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Вы звоните нам по телефону и подробно описываете проблему. Мы Вас консультируем, называем время когда сможем быть у Вас, примереное время работы и орентировочную стоимость.
        </p>
      </div>
    </section>
  )
}


export default Billing;
