import React, { useState, useEffect } from "react"
import { useInView } from 'react-intersection-observer';
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import Modal from "./Modal";

const FeatureCard = ({ title, children }) => {
  const [isModal, setIsModal] = useState(false);

  return (
    <div className="text-white mt-8 sd:text-base xz:text-xs w-full bg-white/5 pt-5 sd:px-2 xz:px-0 sd:pb-3 xz:pb-0">
      <table className="border-separate border border-slate-500 w-full">
        <caption class="caption-top sd:text-4xl xz:text-xl mb-4">
          {title}
        </caption>
        <thead className="bg-white/5">
          <tr>
            <th className="border border-slate-600 sd:px-2 xz:px-1">Наименование</th>
            <th className="border border-slate-600 sd:px-2 xz:px-1">инфо</th>
            <th className="border border-slate-600 sd:px-4 xz:px-2">Цена</th>
            <th className="border border-slate-600 sd:px-2 xz:px-1">Заказ</th>
          </tr>
        </thead>
        <tbody>
          {children.map((el) => (
            <tr key={el.id} className="">
              <td className="border border-slate-700 sd:px-2 xz:px-1">{el.title}</td>
              <td className="border border-slate-700 sd:px-2 xz:px-1 text-center">{el.content}</td>
              <td className="border border-slate-700 sd:px-2 xz:px-1 text-center">от {el.price} руб.</td>
              <td className="border border-slate-700 sd:px-2 xz:px-1 text-center">
                <Button styles={""} setIsModal={setIsModal} table={true} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModal && <Modal title={title} setIsModal={setIsModal} />}
    </div>
  );
};




const Business = ({ setIsInView }) => {
  const { ref, inView, entry } = useInView({
    initialInView: true,
    threshold: 0,
    rootMargin: "-100px 0px 0px 0px",
    // triggerOnce: true,
  });

  useEffect(() => {
    setIsInView(inView)
  }, [inView])

  return (
    <section id="service" ref={ref} className={`${layout.section}`}>
      <div className={layout.sectionInfo2}>
        <h2 className={`sd:text-4xl xz:text-2xl uppercase text-white`}>
          Стоимость услуг мастера
        </h2>
        <p className={`font-poppins font-normal text-white w-full mt-5`}>
          Консультация по телефону БЕСПЛАТНО. Чтобы быстро устранить проблему и узнать более точную сумму, Вам необходимо как можно подробнее описать случившуеся поломку. Стоимость услуг зависит от объема и сложности работ. Мы предлагаем гибкую систему скидок для клиентов с крупными заказами. Обращаем Ваше внимание, что цена может незначительно измениться если появятся непредусмотренные сложности в процессе выполнения работ.
        </p>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}
export default Business;
