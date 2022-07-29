import React from 'react';

const BillTo = () => {
  return (
    <div className="mt-10">
      <h4 className="text-7C5DFA text-body-1 font-bold mb-10">Bill to</h4>
      <form action="" className="mt-6">
        <div className="flex flex-col mb-6">
          <label
            htmlFor="clientName"
            className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
          >
            Client's Name
          </label>
          <input
            type="text"
            name="clientName"
            required
            id="clientName"
            className="border border-DFE3FA dark:border-gray-700 py-4 px-3 shadow-sm rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
          />
        </div>

        <div className="flex flex-col mb-6">
          <label
            htmlFor="clientEmail"
            className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
          >
            Client's Email
          </label>
          <input
            type="text"
            name="clientName"
            required
            id="clientName"
            className="border border-DFE3FA dark:border-gray-700 py-4 px-3 shadow-sm rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
          />
        </div>

        <div className="flex flex-col mb-6">
          <label
            htmlFor="StreetAddress"
            className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
          >
            Street Address
          </label>
          <input
            type="text"
            name="StreetAddress"
            required
            id="StreetAddress"
            className="border border-DFE3FA dark:border-gray-700 py-4 px-3 shadow-sm rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
          />
        </div>

        <div className="flex gap-x-6 border border-7C5DFA mb-6">
          <div className="flex flex-col">
            <label
              htmlFor="city"
              className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
            >
              City
            </label>
            <input
              type="text"
              name="city"
              required
              id="city"
              className="border border-DFE3FA dark:border-gray-700 py-4 px-3 shadow-sm rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="postCode"
              className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
            >
              Post Code
            </label>
            <input
              type="text"
              name="postCode"
              required
              id="postCode"
              className="border border-DFE3FA dark:border-gray-700 py-4 px-3 shadow-sm rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
            />
          </div>
        </div>

        <div className="flex flex-col mb-6">
          <label
            htmlFor="country"
            className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
          >
            Country
          </label>
          <input
            type="text"
            name="country"
            required
            id="country"
            className="border border-DFE3FA dark:border-gray-700 py-4 px-3 shadow-sm rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
          />
        </div>
      </form>
    </div>
  );
};

export default BillTo;
