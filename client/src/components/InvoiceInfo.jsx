import React from "react";
import { Input, Terms } from "../components";
import { useGlobalContext } from "../context/context";

const InvoiceInfo = () => {
  const { invoiceInfo, handleChange } = useGlobalContext();

  return (
    <section className="mt-10 w-327 tablet:w-full">
      <div className="flex flex-col mb-6">
        <div className={containerStyles}>
          {inputfields.map((field) => {
            return (
              <Input
                key={field.id}
                {...field}
                value={invoiceInfo[field.name]}
                handleChange={(e) => handleChange(e, "invoiceInfo")}
              />
            );
          })}
          <Terms />
        </div>
      </div>
    </section>
  );
};

export default InvoiceInfo;

/* ------data -----*/

const inputfields = [
  {
    id: 1,
    name: "createdAt",
    type: "date",
    required: true,
    label: "Invoice Date",
  },
  {
    id: 2,
    name: "description",
    type: "text",
    required: true,
    label: "Project Description",
    errorMessage: "can't be empty",
  },
];
const containerStyles =
  "invoice-info-input-container grid grid-cols-1 grid-rows-3 tablet:grid-cols-4 tablet:grid-rows-2 gap-6";
