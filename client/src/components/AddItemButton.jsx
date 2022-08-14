import React from "react";
import { PlusIcon } from "../components";
import { useGlobalContext } from "../context/context";

const AddItemButton = () => {
  const { addItem } = useGlobalContext();

  return (
    <button onClick={addItem} className={buttonStyles}>
      <PlusIcon />
      Add New Item
    </button>
  );
};

export default AddItemButton;

/*-------------------Styles----------------*/

const buttonStyles =
  "mt-12 tablet:mt-4 flex justify-center gap-x-1 items-center w-full text-7E88C3 text-body-1 text-center rounded-3xl h-12 bg-F9FAFE dark:bg-252945 cursor-pointer";
