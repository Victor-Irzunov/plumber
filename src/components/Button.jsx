import React from "react";

const Button = ({ styles, setIsModal }) => (

  <button
    type="button"
    onClick={() => setIsModal(true)}
    className={`
    sm:py-1.5
    sm:px-4
    xz:py-0.5
    xz:px-1
    xz:my-2
    sd:my-4
    font-poppins
    font-medium
    sd:text-base
    xz:text-xs
    text-primary
    bg-blue-gradient
    sd:rounded-md
    xz:rounded-sm
    cursor-pointer	
    outline-none
    ${styles
      }`}>
    Заказать
  </button>
);

export default Button;
