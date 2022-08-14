import React from "react";
import { LoadingPost } from "../components";
import { useGlobalContext } from "../context/context";
import { notify } from "../utils/utils";

const SaveAndSend = () => {
  const { setLoadingPost, handleSaveAndSend, loadingPost } = useGlobalContext();
  const save = (e) => {
    e.preventDefault();
    setLoadingPost(true);
    handleSaveAndSend();
    setTimeout(() => {
      setLoadingPost(false);
      notify("Invoice created");
    }, 5000);
  };
  return (
    <button onClick={save} type="submit" className={buttonStyles}>
      {loadingPost ? <LoadingPost /> : "Save & send"}
    </button>
  );
};

export default SaveAndSend;

/* ------styles-----*/

const buttonStyles =
  "w-112 h-48 bg-7C5DFA rounded-3xl text-body-1 text-FFFF font-bold flex flex-col items-center justify-center";
