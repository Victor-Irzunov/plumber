import React, { useState } from "react"
import styles from "../style";
import Button from "./Button";
import Modal from "./Modal";

const CTA = () => {

  const [isModal, setIsModal] = useState(false)


  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      {isModal &&
        <Modal
          title={"Заказать услугу сантехника"}
          setIsModal={setIsModal}
        />}
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Хотите попробовать наш сервис прямо сейчас!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Нажимайте кнопку Заказать и в ближайшее время с Вами свяжится наш специалист.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button setIsModal={setIsModal} />
      </div>
    </section>
  );
}

export default CTA;
