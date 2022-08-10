import React from "react";
import { Input, Trash, AddItem } from "../components";

import { useGlobalContext } from "../context/context";
import { convNum } from "../utils/utils";

const inputfields = [
  {
    id: 1,
    name: "name",
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
  const handleChange = (index) => (e) => {
    const newItems = items.map((item, i) => {
      if (index === i) {
        return { ...item, [e.target.name]: e.target.value };
      } else {
        return item;
      }
    });
    updateItems(newItems);
  };

  return (
    <div className="flex flex-col">
      <div className="mt-6 tablet:flex tablet:flex-col tablet:gap-y-4">
        {items.map((item, i) => {
          return (
            <div key={i} className={`${item.name} tablet:flex tablet:gap-x-4`}>
              {inputfields.map((field) => {
                return (
                  <Input
                    key={field.id}
                    {...field}
                    value={item[field.name]}
                    handleChange={handleChange(i)}
                  />
                );
              })}

              <Trash id={item.id} />
            </div>
          );
        })}
        <AddItem />
      </div>
    </div>
  );
};

export default ItemsList;
