import React from "react";
import { Input } from "../components";
import { useGlobalContext } from "../context/context";

const EditClientInfo = () => {
  const { clientInfo, handleChange } = useGlobalContext();

  return (
    <>
      {inputfields.map((field) => {
        return (
          <Input
            key={field.id}
            {...field}
            value={clientInfo[field.name]}
            handleChange={(e) => handleChange(e, "clientInfo")}
          />
        );
      })}
    </>
  );
};

export default EditClientInfo;

/* ------data -----*/

const inputfields = [
  {
    id: 1,
    name: "name",
    type: "text",
    required: true,
    label: "Client’s Name",
    errorMessage: "can't be empty",
  },
  {
    id: 2,
    name: "email",
    type: "text",
    required: true,
    label: "Client’s Email",
    errorMessage: "can't be empty",
  },
];
