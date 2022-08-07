import React from "react";
import { Input, Terms } from "../components";
import { useGlobalContext } from "../context/context";
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
  },
];
const InvoiceInfo = () => {
  const { invoiceInfo, handleChange } = useGlobalContext();

  return (
    <section className="mt-10">
      <div className="flex flex-col mb-6">
        <div className="invoice-info-input-container grid grid-cols-4 grid-rows-2 gap-6">
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
