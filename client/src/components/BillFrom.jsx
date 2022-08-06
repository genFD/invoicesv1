import React, { useState } from "react";
import { Input } from "../components";

import { useGlobalContext } from "../context/context";
import { addDays } from "../utils/utils";

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
  // const { sender, updateSender } = useGlobalContext();
  const { sender, updateSender } = useGlobalContext();
  // const [test, setTest] = useState({
  //   date: "",
  //   country: "",
  // });
  // const testdue = addDays(test.date, 1);

  // console.log(sender);
  const handleChange = (e) => {
    // updateSender({ ...sender, [e.target.name]: e.target.value });
    // updateSender({ ...sender, [e.target.name]: e.target.value });
    updateSender({ ...sender, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h4 className="text-7C5DFA text-body-1 font-bold mb-6">Bill from</h4>
      <div className="bill-from-input-container grid grid-cols-3 grid-rows-2 gap-6">
        {/* <input
          className="text-0C0E16"
          type="text"
          name="street"
          value={sender.street}
          onChange={handleChange}
        />
        <input
          className="text-0C0E16"
          type="text"
          name="city"
          value={sender.city}
          onChange={handleChange}
        /> */}
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
    </div>
  );
};

export default BillFrom;
