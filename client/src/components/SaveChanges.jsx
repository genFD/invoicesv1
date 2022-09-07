import React from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { useModalContext } from "../context/modalcontext";
import { LoadingPost } from "../components";
import { notify } from "../utils/utils";
const SaveChanges = () => {
  const { handleSaveChanges, loadingUpdate } = useGlobalContext();
  const { close } = useModalContext();
  const { id } = useParams();

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleSaveChanges(id);
        setTimeout(() => {
          close("editInvoiceForm");
          // notify("Invoice updated");
        }, 3000);
      }}
      type="submit"
      className={buttonStyles}
    >
      {loadingUpdate ? <LoadingPost /> : "Save Changes"}
    </button>
  );
};

export default SaveChanges;

/* ------Styles-----*/

const buttonStyles =
  "w-138 cursor-pointer h-48 bg-7C5DFA rounded-3xl text-body-1 text-FFFF font-bold flex flex-col items-center justify-center";
