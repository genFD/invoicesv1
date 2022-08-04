import React from "react";
import { Input } from "../components";
import { useGlobalContext } from "../context/context";

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

const BillFrom = () => {
  const { sender, updateSender } = useGlobalContext();

  const handleChange = (e) => {
    updateSender({ ...sender, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <h4 className="text-7C5DFA text-body-1 font-bold mb-6">Bill from</h4>
      <div className="bill-from-input-container grid grid-cols-3 grid-rows-2 gap-6">
        {inputfields.map((field) => {
          return (
            <Input
              key={field.id}
              {...field}
              value={sender[field.name]}
              handleChange={handleChange}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BillFrom;
