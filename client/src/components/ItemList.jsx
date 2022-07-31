import React from 'react';

const ItemList = ({
  name,
  price,
  total,
  quantity,
  updateFormData,
  formdata,
}) => {
  console.log(name, price);
  return (
    <div className="mt-6 tablet:flex tablet:gap-x-4">
      <div className="flex flex-col mb-6 w-[327px] tablet:w-[214px]">
        <label
          htmlFor="itemName"
          className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
        >
          Item Name
        </label>
        <input
          value={name}
          onChange={(e) =>
            updateFormData((prevState) => ({
              ...prevState,
              items: [
                {
                  ...formdata.items[0],
                  name: e.target.value,
                },
              ],
            }))
          }
          type="text"
          name="itemName"
          required
          id="itemName"
          className="border border-7E88C3 dark:border-252945 py-4 px-3  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
        />
      </div>
      <div className="flex gap-x-4 mb-6">
        <div className="flex flex-col w-16 tablet:w-[46px]">
          <label
            htmlFor="quantity"
            className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
          >
            Qty.
          </label>
          <input
            type="number"
            name="quantity"
            required
            id="quantity"
            className="border border-7E88C3 dark:border-252945 flex justify center px-3 py-4  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
          />
        </div>

        <div className="flex flex-col w-100">
          <label
            htmlFor="price"
            className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
          >
            Price
          </label>
          <input
            type="number"
            name="price"
            required
            id="price"
            className="border border-7E88C3 dark:border-252945 px-3 py-4  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="total"
            className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
          >
            Total
          </label>

          <div className=" w-24 h-full border border-33D69F px-3 py-4  text-body-1 text-0C0E16 font-bold dark:text-FFFF">
            {}
          </div>
        </div>

        <div className="flex">
          <svg
            className="mt-10"
            width="13"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
              fill="#888EB0"
              fillRule="nonzero"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
