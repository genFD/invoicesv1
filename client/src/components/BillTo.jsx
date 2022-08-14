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
  },
  {
    id: 2,
    name: "city",
    type: "text",
    required: true,
    label: "City",
  },
  {
    id: 3,
    name: "postCode",
    type: "text",
    required: true,
    label: "Post Code",
  },
  {
    id: 4,
    name: "country",
    type: "text",
    required: true,
    label: "Country",
  },
];

/* ---------styles-------*/
const h4Styles = "text-7C5DFA text-body-1 font-bold mb-6 ";
const containerStyles =
  "bill-to-input-container grid grid-cols-3 grid-rows-4 gap-6";
