import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const Cancel = () => {
  const { closeEditInvoice } = useGlobalContext();
  return (
    <button
      onClick={closeEditInvoice}
      className="w-96 h-48 bg-F9FAFE dark:bg-252945 rounded-3xl grid place-content-center text-body-1 text-7E88C3 font-bold"
    >
      Cancel
    </button>
  );
};

export default Cancel;
