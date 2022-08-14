import React from "react";
import { useModalContext } from "../context/modalcontext";
import { DeleteModal } from "../components";

const DeleteButton = () => {
  const { open } = useModalContext();
  return (
    <>
      <button onClick={() => open("deleteModal")} className={buttonStyles}>
        Delete
      </button>
      <DeleteModal />
    </>
  );
};

export default DeleteButton;

/* ---------styles-------*/

const buttonStyles =
  "w-89 h-48 bg-EC5757 hover:bg-FF9797 dark:hover:bg-FF9797 rounded-3xl grid place-content-center text-heading-4 text-FFFF font-bold duration-300 transition-all";
