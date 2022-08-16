import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { useModalContext } from "../context/modalcontext";

const Discard = () => {
  const { close } = useModalContext();
  const { getInvoices } = useGlobalContext();
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => {
        close("newInvoiceForm");
        getInvoices();
        navigate("/");
      }}
      className={discardButtonStyles}
    >
      Discard
    </button>
  );
};

export default Discard;

/* ------styles -----*/

const discardButtonStyles =
  "w-84 h-48 bg-F9FAFE dark:bg-252945  rounded-3xl grid place-content-center text-body-1 text-7E88C3 font-bold cursor-pointer";
