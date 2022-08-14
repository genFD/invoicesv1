import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { AddItem, Divider, AddItemButton } from "../components";
import { terms, formData } from "../data/data";
import { Discard, SaveAsDraft, SaveAndSend } from "../components";

const Form = () => {
  const [selected, setSelected] = useState(terms[0]);
  const [formInput, updateFormInput] = useState(formData);

  return (
    <div className="mt-6">
      <form action="" className="w-full flex flex-col items-center">
        <div className="w-327">
          <h4 className="text-7C5DFA text-body-1 font-bold mb-6 ">Bill from</h4>
          <div className="flex flex-col mb-6">
            <label
              htmlFor="StreetAddress"
              className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
            >
              Street Address
            </label>
            <input
              type="text"
              value={formInput.clientAddress.street}
              onChange={(e) =>
                updateFormInput((prev) => ({
                  ...prev,
                  clientAddress: {
                    ...prev.clientAddress,
                    street: e.target.value,
                  },
                }))
              }
              name="StreetAddress"
              required
              id="StreetAddress"
              className="border border-7E88C3 dark:border-252945 py-4 px-3 rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none dark:bg-252945  focus:border-9277FF caret-9277FF"
            />
          </div>

          <div className="flex gap-x-3 mb-6">
            <div className="flex flex-col w-[152px]">
              <label
                htmlFor="city"
                className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
              >
                City
              </label>
              <input
                type="text"
                value={formInput.clientAddress.city}
                onChange={(e) =>
                  updateFormInput((prev) => ({
                    ...prev,
                    clientAddress: {
                      ...prev.clientAddress,
                      city: e.target.value,
                    },
                  }))
                }
                name="city"
                required
                id="city"
                className="border border-7E88C3 dark:border-252945 px-3 py-4  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
              />
            </div>

            <div className="flex flex-col w-[152px]">
              <label
                htmlFor="postCode"
                className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
              >
                Post Code
              </label>
              <input
                type="text"
                value={formInput.clientAddress.postCode}
                onChange={(e) =>
                  updateFormInput((prev) => ({
                    ...prev,
                    clientAddress: {
                      ...prev.clientAddress,
                      postCode: e.target.value,
                    },
                  }))
                }
                name="postCode"
                required
                id="postCode"
                className="border border-7E88C3 dark:border-252945 px-3 py-4 rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none  dark:bg-252945  focus:border-9277FF caret-9277FF"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="country"
              className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
            >
              Country
            </label>
            <input
              type="text"
              value={formInput.clientAddress.country}
              onChange={(e) =>
                updateFormInput((prev) => ({
                  ...prev,
                  clientAddress: {
                    ...prev.clientAddress,
                    country: e.target.value,
                  },
                }))
              }
              name="country"
              required
              id="country"
              className="border border-7E88C3 dark:border-252945 py-4 px-3  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
            />
          </div>

          <div className="mt-10">
            <h4 className="text-7C5DFA text-body-1 font-bold mb-6">Bill to</h4>
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
                value={formInput.clientName}
                onChange={(e) =>
                  updateFormInput((prev) => ({
                    ...prev,
                    clientName: e.target.value,
                  }))
                }
                required
                id="clientName"
                className="border border-7E88C3 dark:border-252945 py-4 px-3  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
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
                name="clientEmail"
                value={formInput.clientEmail}
                onChange={(e) =>
                  updateFormInput((prev) => ({
                    ...prev,
                    clientEmail: e.target.value,
                  }))
                }
                required
                id="clientEmail"
                className="border border-7E88C3 dark:border-252945 py-4 px-3  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
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
                value={formInput.senderAddress.street}
                onChange={(e) =>
                  updateFormInput((prev) => ({
                    ...prev,
                    senderAddress: {
                      ...prev.senderAddress,
                      street: e.target.value,
                    },
                  }))
                }
                required
                id="StreetAddress"
                className="border border-7E88C3 dark:border-252945 py-4 px-3  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
              />
            </div>

            <div className="flex gap-x-3 mb-6 ">
              <div className="flex flex-col w-[152px]">
                <label
                  htmlFor="city"
                  className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formInput.senderAddress.city}
                  onChange={(e) =>
                    updateFormInput((prev) => ({
                      ...prev,
                      senderAddress: {
                        ...prev.senderAddress,
                        city: e.target.value,
                      },
                    }))
                  }
                  required
                  id="city"
                  className="border border-7E88C3 dark:border-252945 px-3 py-4  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
                />
              </div>

              <div className="flex flex-col w-[152px]">
                <label
                  htmlFor="postCode"
                  className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
                >
                  Post Code
                </label>
                <input
                  type="text"
                  name="postCode"
                  value={formInput.senderAddress.postCode}
                  onChange={(e) =>
                    updateFormInput((prev) => ({
                      ...prev,
                      senderAddress: {
                        ...prev.senderAddress,
                        postCode: e.target.value,
                      },
                    }))
                  }
                  required
                  id="postCode"
                  className="border border-7E88C3 dark:border-252945 px-3 py-4  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
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
                value={formInput.senderAddress.country}
                onChange={(e) =>
                  updateFormInput((prev) => ({
                    ...prev,
                    senderAddress: {
                      ...prev.senderAddress,
                      country: e.target.value,
                    },
                  }))
                }
                required
                id="country"
                className="border border-7E88C3 dark:border-252945 py-4 px-3  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
              />
            </div>
          </div>

          <div className="mt-10">
            <div className="flex flex-col mb-6">
              <label
                htmlFor="InvoiceDate"
                className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
              >
                Invoice Date
              </label>
              <input
                type="date"
                name="InvoiceDate"
                value={formInput.createdAt}
                onChange={(e) =>
                  updateFormInput((prev) => ({
                    ...prev,
                    createdAt: e.target.value,
                  }))
                }
                required
                id="InvoiceDate"
                className="border shadow-md border-7E88C3 dark:border-252945 py-4 px-3  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF"
              />
            </div>

            <div className="flex flex-col mb-6">
              <label
                htmlFor="paymentTerms"
                className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2  font-bold text-gray-800 dark:text-gray-100 mb-1"
              >
                Payment Terms
              </label>
              <Listbox
                value={selected}
                onChange={setSelected}
                onBlur={() =>
                  updateFormInput((prev) => ({
                    ...prev,
                    paymentTerms: selected,
                  }))
                }
              >
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-FFFF dark:bg-252945 text-0C0E16 dark:text-FFFF py-4 px-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-9277FF focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-7C5DFA text-body-1">
                    <span className="block truncate">{selected}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <SelectorIcon
                        className="h-5 w-5 text-7C5DFA"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-FFFF text-0C0E16 dark:text-FFFF  dark:bg-252945 py-1 text-body-1 shadow-lg ring-1 ring-252945 ring-opacity-5 focus:outline-none">
                      {terms.map((term, i) => (
                        <Listbox.Option
                          key={i}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-7C5DFA text-FFFF"
                                : "text-0C0E16 dark:text-FFFF"
                            }`
                          }
                          value={term}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {term}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>

            <div className="flex flex-col mb-6">
              <label
                htmlFor="projectDescription"
                className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
              >
                Project Description
              </label>
              <input
                type="text"
                name="projectDescription"
                value={formInput.description}
                onChange={(e) =>
                  updateFormInput((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                required
                id="projectDescription"
                className="border border-7E88C3 dark:border-252945 py-4 px-3  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
              />
            </div>
          </div>
          <h4 className="text-777F98 text-heading-7 font-bold mt-16">
            Item List
          </h4>
          <div className="mt-6 tablet:flex tablet:gap-x-4">
            <div className="flex flex-col mb-6 w-[327px] tablet:w-[214px]">
              <label
                htmlFor="itemName"
                className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
              >
                Item Name
              </label>
              <input
                value={formInput.items[0].name}
                onChange={(e) =>
                  updateFormInput((prev) => ({
                    ...prev,
                    items: [
                      {
                        ...prev.items[0],
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
                  value={formInput.items[0].quantity}
                  onChange={(e) =>
                    updateFormInput((prev) => ({
                      ...prev,
                      items: [
                        {
                          ...prev.items[0],
                          quantity: e.target.value,
                        },
                      ],
                    }))
                  }
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
                  value={formInput.items[0].price}
                  onChange={(e) =>
                    updateFormInput((prev) => ({
                      ...prev,
                      items: [
                        {
                          ...prev.items[0],
                          price: e.target.value,
                        },
                      ],
                    }))
                  }
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
                  {formInput.items[0].price * formInput.items[0].quantity}
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
          <AddItemButton />
        </div>
        <Divider />

        <footer className="tablet:mt-12 flex items-center gap-x-2 h-91 tablet:h-fit tablet:pb-8 box-shadow-footer-invoice justify-center tablet:justify-start tablet:gap-x-32 w-full">
          <div>
            <Discard />
          </div>
          <div className="flex gap-x-2">
            <SaveAsDraft />
            <SaveAndSend />
          </div>
        </footer>
      </form>
    </div>
  );
};

export default Form;
