import React from "react";
import { Input, ClientInfo } from "../components";
import { useGlobalContext } from "../context/context";

const BillTo = () => {
  const { clientAddress, handleChange } = useGlobalContext();

  return (
    <section className="mt-10">
      <h4 className={h4Styles}>Bill to</h4>
      <div className={containerStyles}>
        <ClientInfo />
        {inputfields.map((field) => {
          return (
            <Input
              key={field.id}
              {...field}
              value={clientAddress[field.name]}
              handleChange={(e) => handleChange(e, "clientAddress")}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BillTo;

/* ---------data-------*/
const inputfields = [
  {
    id: 1,
    name: "street",
    type: "text",
    required: true,
    label: "Street Address",
    errorMessage: "can't be empty",
  },
  {
    id: 2,
    name: "city",
    type: "text",
    required: true,
    label: "City",
    errorMessage: "can't be empty",
  },
  {
    id: 3,
    name: "postCode",
    type: "text",
    required: true,
    label: "Post Code",
    errorMessage: "can't be empty",
  },
  {
    id: 4,
    name: "country",
    type: "text",
    required: true,
    label: "Country",
    errorMessage: "can't be empty",
  },
];

/* ---------styles-------*/
const h4Styles = "text-7C5DFA text-body-1 font-bold mb-6 ";
const containerStyles =
  "bill-to-input-container grid grid-rows-5 grid-cols-2 tablet:grid-cols-3 tablet:grid-rows-4 gap-6";
