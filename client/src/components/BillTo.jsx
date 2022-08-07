import React from "react";
import { Input } from "../components";
import { useGlobalContext } from "../context/context";

const inputfields = [
  {
    id: 1,
    name: "name",
    type: "text",
    required: true,
    label: "Client’s Name",
  },
  {
    id: 2,
    name: "email",
    type: "text",
    required: true,
    label: "Client’s Email",
  },
  {
    id: 3,
    name: "street",
    type: "text",
    required: true,
    label: "Street Address",
  },
  {
    id: 4,
    name: "city",
    type: "text",
    required: true,
    label: "City",
  },
  {
    id: 5,
    name: "postCode",
    type: "text",
    required: true,
    label: "Post Code",
  },
  {
    id: 6,
    name: "country",
    type: "text",
    required: true,
    label: "Country",
  },
];

const BillTo = () => {
  const { client, handleChange } = useGlobalContext();

  return (
    <section className="mt-10">
      <h4 className="text-7C5DFA text-body-1 font-bold mb-6 ">Bill to</h4>
      <div className="bill-to-input-container grid grid-cols-3 grid-rows-4 gap-6">
        {inputfields.map((field) => {
          return (
            <Input
              key={field.id}
              {...field}
              value={client[field.name]}
              handleChange={(e) => handleChange(e, "client")}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BillTo;
