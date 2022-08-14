import React from "react";
import { useGlobalContext } from "../context/context";
import { terms } from "../data/data";

const Terms = () => {
  const { handleChange } = useGlobalContext();

  return (
    <div className="term">
      <label htmlFor="paymentTerms" className={labelStyles}>
        Payment Terms
      </label>
      <div className="mt-1">
        <select
          name="paymentTerms"
          onChange={(e) => handleChange(e, "invoiceInfo")}
          className={selectedStyles}
        >
          {terms.map((term, i) => {
            return (
              <option value={term} key={i}>
                {term}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Terms;

/* ------styles-----*/

const labelStyles =
  "text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1";
const selectedStyles =
  "w-full py-4 px-3 rounded text-body-1 text-FFFF font-bold dark:text-FFFF focus:outline-none dark:bg-252945 dark:border-252945 focus:border-9277FF caret-9277FF";
