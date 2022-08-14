import React from "react";
import { useGlobalContext } from "../context/context";

const SaveAsDraft = () => {
  const { open } = useGlobalContext();
  return (
    <button
      // onClick={handleSaveAsDraft}
      onClick={(e) => {
        e.preventDefault();
        open("createConfirmation");
      }}
      className={buttonStyles}
    >
      Save As Draft
    </button>
  );
};

export default SaveAsDraft;

/* ------styles-----*/
const buttonStyles =
  "w-117 h-48 bg-373B53 rounded-3xl grid place-content-center text-body-1 text-DFE3FA font-bold";
