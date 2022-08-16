import React from "react";
import { Input, Trash, AddItemButton } from "../components";
import { useGlobalContext } from "../context/context";

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
      <h3 className="text-777F98 text-heading-7">Item List</h3>
      <div className="tablet:flex tablet:flex-col tablet:gap-y-4">
        {items.map((item, i) => {
          return (
            <div
              key={i}
              className={`${item.name} ${inputContainerStyles} mt-3`}
            >
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
        <AddItemButton />
      </div>
    </div>
  );
};

export default ItemsList;

/* ------data -----*/

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
const inputContainerStyles =
  "grid grid-rows-2 grid-cols-4 itemsList-input-container gap-y-4 gap-x-4 w-327 tablet:w-full tablet:flex tablet:gap-y-0";
