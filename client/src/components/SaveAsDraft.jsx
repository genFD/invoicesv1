import React from "react";
import { useGlobalContext } from "../context/context";
import { LoadingPost } from "../components";
const SaveAsDraft = () => {
  const { loadingDraft, handleSaveAsDraft } = useGlobalContext();

  return (
    <button onClick={handleSaveAsDraft} className={buttonStyles}>
      {loadingDraft ? <LoadingPost /> : " Save As Draft"}
    </button>
  );
};

export default SaveAsDraft;

/* ------styles-----*/
const buttonStyles =
  "w-117 h-48 bg-373B53 rounded-3xl flex flex-col items-center justify-center text-body-1 text-DFE3FA font-bold";
