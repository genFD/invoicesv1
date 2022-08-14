import React from "react";
import { Input } from "../components";
import { useGlobalContext } from "../context/context";

const EditBillFrom = () => {
  const { senderAddress, handleChange } = useGlobalContext();
  console.log(senderAddress);

  return (
    <div>
      <h4 className="text-7C5DFA text-body-1 font-bold mb-6">Bill from</h4>
      <div className={inputContainerStyles}>
        {inputfields.map((field) => {
          return (
            <Input
              key={field.id}
              {...field}
              value={senderAddress[field.name]}
              handleChange={(e) => handleChange(e, "senderAddress")}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EditBillFrom;

/* ------data -----*/

const inputfields = [
  {
    id: 1,
    name: "street",
    type: "text",
    required: true,
    label: "Street Address",
    // errorMessage: "can't be empty",
  },
  {
    id: 2,
    name: "city",
    type: "text",
    required: true,
    label: "City",
    // errorMessage: "can't be empty",
  },
  {
    id: 3,
    name: "postCode",
    type: "text",
    required: true,
    label: "Post Code",
    // errorMessage: "can't be empty",
  },
  {
    id: 4,
    name: "country",
    type: "text",
    required: true,
    label: "Country",
    // errorMessage: "can't be empty",
  },
];

/* ------styles -----*/

const inputContainerStyles =
  "bill-from-input-container grid grid-cols-3 grid-rows-2 gap-6";
