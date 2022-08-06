import React, { useState } from "react";
import { Error } from "../components";

const Input = (props) => {
  const { label, handleChange, name, ...inputProps } = props;

  return (
    <div className={`text-141625 flex flex-col ${name}`}>
      <label className="text-body-1 pb-2 font-bold flex items-center justify-between text-7E88C3 dark:text-888EB0">
        {label}
      </label>
      <input onChange={handleChange} name={name} {...inputProps} />
    </div>
    // <div className="flex flex-col mb-6">
    //   <label
    //     htmlFor="StreetAddress"
    //     className={`text-body-1 pb-2 font-bold flex items-center justify-between
    //                   ${
    //                     error.clientAddress.street &&
    //                     !formInput.clientAddress.street
    //                       ? 'errorLabel'
    //                       : 'text-7E88C3 dark:text-888EB0'
    //                   }
    //                   `}
    //   >
    //     Street Address
    //     {error.clientAddress.street && (
    //       <Error
    //         street={formInput.clientAddress.street}
    //         errorStreet={error.clientAddress.street}
    //         error={error.error}
    //       />
    //     )}
    //   </label>
    //   <input
    //     type="text"
    //     name="StreetAddress"
    //     value={formInput.clientAddress.street}
    //     onChange={(e) =>
    //       updateFormInput((prev) => ({
    //         ...prev,
    //         clientAddress: {
    //           ...prev.clientAddress,
    //           street: e.target.value,
    //         },
    //       }))
    //     }
    //     required
    //     id="StreetAddress"
    //     className={` py-4 px-3 rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none dark:bg-252945  focus:border-9277FF caret-9277FF
    //                   ${
    //                     error.clientAddress.street &&
    //                     !formInput.clientAddress.street
    //                       ? 'error'
    //                       : 'border border-7E88C3 dark:border-252945'
    //                   }
    //                   `}
    //   />
    // </div>
  );
};

export default Input;
