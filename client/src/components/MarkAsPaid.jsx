import React from "react";
import { LoadingPost } from "../components";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { notify } from "../utils/utils";

const MarkAsPaid = ({ status }) => {
  const { handleMarkAsPaid, loadingPaid } = useGlobalContext();
  const { id } = useParams();

  return (
    status !== "paid" && (
      <button
        onClick={() => {
          handleMarkAsPaid(id);
        }}
        className={buttonStyles}
      >
        {loadingPaid ? <LoadingPost /> : "Mark as paid"}
      </button>
    )
  );
};

export default MarkAsPaid;

/* ------Styles ------ */
const buttonStyles =
  "w-149 h-48 bg-7C5DFA  hover:bg-9277FF dark:hover:bg-9277FF disabled:dark:bg-7E88C3  rounded-3xl flex flex-col items-center justify-center text-heading-4 text-FFFF font-bold duration-300 transition-all";
