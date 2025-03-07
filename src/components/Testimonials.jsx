import { feedback } from "../constants";
import React, {useEffect} from "react"
import { useInView } from 'react-intersection-observer';
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = ({setIsInView}) => {

  const { ref, inView, entry } = useInView({
    initialInView: true,
    threshold : 0,
    // triggerOnce: true,
  });

  useEffect(() => {
    setIsInView(inView)
  },[inView])

  return (
<section id="clients" ref={ref} className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Отзывы <br className="sm:block hidden" />наших клиентов
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px] opacity-50`}>
          Положительный отзыв - это не только наша репутация, а также лучшая благодарность за нашу работу. Довольный клиент может порекомендовать нас как хороших специалистов.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
  )
}
  


export default Testimonials;
