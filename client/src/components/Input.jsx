import React from "react";

const Input = (props) => {
  const { label, handleChange, pattern, name, ...inputProps } = props;

  return (
    <div className={`text-141625 flex flex-col ${name}`}>
      <label className={labelStyles}>{label}</label>
      <input
        className="main-input"
        onChange={handleChange}
        name={name}
        {...inputProps}
      />
    </div>
  );
};

export default Input;

/*------------styles-----*/
const labelStyles =
  "text-body-1 pb-2 font-bold flex items-center justify-between text-7E88C3 dark:text-888EB0";
