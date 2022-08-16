import React from "react";
import { LoadingPost } from "../components";
import { useGlobalContext } from "../context/context";

const SaveAndSend = () => {
  const { handleSaveAndSend, loadingPost } = useGlobalContext();

  return (
    <button onClick={handleSaveAndSend} type="submit" className={buttonStyles}>
      {loadingPost ? <LoadingPost /> : "Save & send"}
    </button>
  );
};

export default SaveAndSend;

/* ------styles-----*/

const buttonStyles =
  "w-112 h-48 bg-7C5DFA rounded-3xl text-body-1 text-FFFF font-bold flex flex-col items-center justify-center";
