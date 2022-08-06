import React from "react";
import { Input, Trash, AddItem } from "../components";

import { useGlobalContext } from "../context/context";

const inputfields = [
  {
    id: 1,
    name: "itemName",
    type: "text",
    required: true,
    label: "Item Name",
  },
  {
    id: 2,
    name: "quantity",
    type: "number",
    required: true,
    label: "Qty.",
  },
  {
    id: 3,
    name: "price",
    type: "number",
    required: true,
    label: "Price",
  },
  {
    id: 4,
    name: "total",
    type: "number",
    required: true,
    label: "Total",
  },
];
const ItemsList = () => {
  const { items, updateItems } = useGlobalContext();
  const handleChange = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    // updateItems([...items, { [e.target.name]: e.target.value }]);
  };
  return (
    <div className="flex flex-col">
      <div className="mt-6 tablet:flex tablet:flex-col tablet:gap-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className={`${item.name} tablet:flex tablet:gap-x-4`}
          >
            {inputfields.map((field) => (
              <Input
                key={field.id}
                {...field}
                value={item[field.name]}
                handleChange={handleChange}
              />
            ))}
            <Trash id={item.id} />
          </div>
        ))}
        <AddItem />
      </div>
    </div>
  );
};

export default ItemsList;
