import React from "react";
import { Link, useParams } from "react-router-dom";
import { useModalContext } from "../context/modalcontext";

const EditButton = () => {
  const { id } = useParams();
  const { open } = useModalContext();

  return (
    <>
      <button
        onClick={() => open("editInvoiceForm")}
        className={buttonStylesLarge}
      >
        Edit
      </button>
      <Link to={`/editinvoice/${id}`}>
        <button className={buttonStylesSmall}>Edit</button>
      </Link>
    </>
  );
};

export default EditButton;

/* ------styles -----*/

const buttonStylesSmall =
  "grid w-73 h-48 bg-F9FAFE dark:bg-252945 rounded-3xl tablet:hidden place-content-center text-heading-4 text-7E88C3 font-bold";

const buttonStylesLarge =
  "hidden w-73 h-48 hover:bg-DFE3FA hover:dark:bg-F8F8FB bg-F9FAFE dark:bg-252945 rounded-3xl tablet:grid place-content-center text-heading-4 text-7E88C3 font-bold transition duration-300";
