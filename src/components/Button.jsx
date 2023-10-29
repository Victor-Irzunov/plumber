import React from "react";

const Button = ({ styles, setIsModal, table }) => (

  <button
    type="button"
    onClick={() => setIsModal(true)}
    className={`
    ${table ?
      'xz:text-xs sm:px-4 sm:py-1.5 xz:py-0.5 xz:px-1 xz:my-2 sd:my-4 sd:text-base'
      : 'text-lg px-4 py-2 my-4'
    }
    font-poppins
    font-medium
    text-primary
    bg-blue-gradient
    sd:rounded-md
    xz:rounded-sm
    cursor-pointer	
    outline-none
    ${styles}
    `}>
    Заказать
  </button>
);

export default Button;
