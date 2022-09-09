import React from "react";
import { useGlobalContext } from "../context/context";

const Checkbox = ({ label, value, name }) => {
  const { handleCheckbox } = useGlobalContext();
  return (
    <div className={containerStyles}>
      <input
        type="checkbox"
        name={name}
        onChange={handleCheckbox}
        value={value}
        className={inputStyles}
      />
      <label className={labelStyles}>{label}</label>
    </div>
  );
};

export default Checkbox;

/* ---------styles-------*/

const containerStyles = "flex items-center gap-x-[13px] cursor:pointer";

const inputStyles =
  "bg-DFE3FA dark:bg-141625 cursor-pointer border-7C5DFA text-7C5DFA focus:outline-7C5DFA focus:ring-offset-7C5DFA";

const labelStyles = "text-7E88C3 font-medium dark:text-DFE3FA";
