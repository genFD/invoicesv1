import React from "react";
import { Cancel, SaveChanges } from "../components";

const EditFormFooter = () => {
  return (
    <footer className={footerStyles}>
      <Cancel />
      <SaveChanges />
    </footer>
  );
};

export default EditFormFooter;

/* ------styles -----*/

const footerStyles =
  "bg-141625 mt-8 flex justify-end p-6 gap-2 w-full rounded-tr-[20px] rounded-br-[20px]";
