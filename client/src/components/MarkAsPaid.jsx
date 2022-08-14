import React from "react";

const MarkAsPaid = ({ status }) => {
  return (
    status !== "paid" && (
      <button onClick={() => console.log(status)} className={buttonStyles}>
        Mark as paid
      </button>
    )
  );
};

export default MarkAsPaid;

/* ------Styles ------ */
const buttonStyles =
  "w-149 h-48 bg-7C5DFA  hover:bg-9277FF dark:hover:bg-9277FF disabled:dark:bg-7E88C3  rounded-3xl grid place-content-center text-heading-4 text-FFFF font-bold duration-300 transition-all";
