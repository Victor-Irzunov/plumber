import React, { useState } from "react"
import { mask } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import Modal from "./Modal";

const CardDeal = () => {

  const [isModal, setIsModal] = useState(false)

  return (
    <section className={layout.section2}>
      {isModal &&
        <Modal
          title={"Заказать работу в маске и бахилах"}
          setIsModal={setIsModal}
        />}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Ваша безопасность.
        </h2>
        <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
          По Вашему желанию специалист будет работать в маске и бахилах.
        </p>

        <Button styles={`mt-10`} setIsModal={setIsModal} />
      </div>

      <div className={`flex-1 ${layout.sectionImg}`}>
        <img src={mask} alt="billing" className="w-[80%]" />
      </div>
    </section>
  )
}

export default CardDeal;
