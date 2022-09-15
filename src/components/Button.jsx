import React from "react";

const Button = ({ styles, setIsModal }) => (



  <button
    type="button"
    onClick={() => setIsModal(true)}
    className={`
    sm:py-4
    sm:px-6
    xx:py-3
    xx:px-4
    xx:mt-3
    xx:mb-5
    font-poppins
    font-medium
    text-[18px]
    text-primary
    bg-blue-gradient
    rounded-[10px]
    cursor-pointer	
    outline-none
    ${styles
      }`}>
    Заказать
  </button>
);

export default Button;
