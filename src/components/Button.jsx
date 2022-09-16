import React from "react";

const Button = ({ styles, setIsModal }) => (



  <button
    type="button"
    onClick={() => setIsModal(true)}
    className={`
    sm:py-4
    sm:px-6
    xy:py-3
    xy:px-4
    xy:mt-3
    xy:mb-5
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
