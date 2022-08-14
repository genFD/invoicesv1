import React from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { useModalContext } from "../context/modalcontext";
import { notify } from "../utils/utils";
import LoadingPost from "./LoadingPost";

const SaveChanges = () => {
  const { handleSaveChanges, setLoadingUpdate, loadingUpdate, getInvoice } =
    useGlobalContext();
  const { close } = useModalContext();
  const { id } = useParams();
  const update = (e) => {
    e.preventDefault();
    setLoadingUpdate(true);
    handleSaveChanges(id);
    setTimeout(() => {
      setLoadingUpdate(false);
      close("editInvoiceForm");
      getInvoice(id);
      notify("Invoice updated");
    }, 3000);
  };
  return (
    <button onClick={update} type="submit" className={buttonStyles}>
      {loadingUpdate ? <LoadingPost /> : "Save Changes"}
    </button>
  );
};

export default SaveChanges;

/* ------Styles-----*/

const buttonStyles =
  "w-138 cursor-pointer h-48 bg-7C5DFA rounded-3xl text-body-1 text-FFFF font-bold flex flex-col items-center justify-center";
