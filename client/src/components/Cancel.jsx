import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useModalContext } from "../context/modalcontext";

const Cancel = () => {
  const { close } = useModalContext();
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        close("editInvoiceForm");
        navigate(`/detail/${id}`);
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
