import React from "react";
import { useModalContext } from "../context/modalcontext";

const Cancel = () => {
  const { close } = useModalContext();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        close("editInvoiceForm");
      }}
      className={buttonStyles}
    >
      Cancel
    </button>
  );
};

export default Cancel;

/* ---------styles-------*/
const buttonStyles =
  "w-96 h-48 bg-F9FAFE dark:bg-252945 rounded-3xl grid place-content-center text-body-1 text-7E88C3 font-bold";
