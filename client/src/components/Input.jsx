import React, { useState } from "react";

const Input = (props) => {
  const { label, handleChange, pattern, errorMessage, name, ...inputProps } =
    props;

  // const [focus, setFocus] = useState(false);

  return (
    <div className={`text-141625 flex flex-col ${name}`}>
      <label className={labelStyles}>{label}</label>
      <input
        className="main-input"
        onChange={handleChange}
        // onBlur={() => setFocus(true)}
        // focus={focus.toString()}
        name={name}
        {...inputProps}
      />
      {/* <span className="text-EC5757 text-body-2 errMessage">{errorMessage}</span> */}
    </div>
  );
};

export default Input;

/*------------styles-----*/
const labelStyles =
  "text-body-1 pb-2 font-bold flex items-center justify-between text-7E88C3 dark:text-888EB0";
