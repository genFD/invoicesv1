import React, { useState, Fragment, useEffect } from 'react';
import { Transition, Listbox } from '@headlessui/react';
import { AddItem } from '../components';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { useGlobalContext } from '../context/context';
import { terms, formData } from '../data/data';

const EditForm = ({ invoice }) => {
  const [selected, setSelected] = useState(terms[0]);
  const [formInput, updateFormInput] = useState(formData);
  console.log(formData.emptyFieldErrorMessage);

  const populate = () => {
    updateFormInput({ ...invoice });
  };
  useEffect(() => {
    populate();
  }, []);

  const { closeEditInvoice } = useGlobalContext();

  return (
    <div className="h-full flex flex-col items-center">
      <div className="NewTitle mt-6 tablet:w-[504px] tablet:mt-14 tablet:mb-12 flex items-center justify-between">
        <h2 className="text-0C0E16 dark:text-FFFF text-heading-2">
          Edit Invoice
        </h2>
        <button onClick={closeEditInvoice}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 cursor-pointer"
            viewBox="0 0 20 20"
            fill="#7C5DFA"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <form action="" className="tablet:w-[504px]">
        <h4 className="text-7C5DFA text-body-1 font-bold mb-6 ">Bill from</h4>
        <div className="flex flex-col mb-6">
          <label
            htmlFor="StreetAddress"
            className="text-body-1 border text-7E88C3 dark:text-888EB0 pb-2 font-bold mb-1 flex items-center justify-between"
          >
            Street Address
            <span className="text-body-1 text-EC5757">
              {formData.emptyFieldErrorMessage}
            </span>
          </label>
          <input
            type="text"
            name="StreetAddress"
            value={formInput.clientAddress.street}
            onChange={(e) =>
              updateFormInput((prevState) => ({
                ...prevState,
                clientAddress: {
                  ...prevState.clientAddress,
                  street: e.target.value,
                },
              }))
            }
            required
            id="StreetAddress"
            className="border border-7E88C3 dark:border-252945 py-4 px-3 rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF dark:bg-252945 focus:outline-none focus:border-9277FF dark:focus:border-9277FF caret-9277FF"
          />
        </div>

        <div className="flex gap-x-6 mb-6">
          <div className="flex flex-col w-[152px] ">
            <label
              htmlFor="city"
              className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
            >
              City
            </label>
            <input
              type="text"
              name="city"
              value={formInput.clientAddress.city}
              onChange={(e) =>
                updateFormInput((prevState) => ({
                  ...prevState,
                  clientAddress: {
                    ...prevState.clientAddress,
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
              value={formInput.clientAddress.postCode}
              onChange={(e) =>
                updateFormInput((prevState) => ({
                  ...prevState,
                  clientAddress: {
                    ...prevState.clientAddress,
                    postCode: e.target.value,
                  },
                }))
              }
              required
              id="postCode"
              className="border border-7E88C3 dark:border-252945 px-3 py-4 rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none  dark:bg-252945  focus:border-9277FF caret-9277FF"
            />
          </div>

          <div className="flex flex-col w-[152px]">
            <label
              htmlFor="country"
              className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
            >
              Country
            </label>
            <input
              type="text"
              name="country"
              value={formInput.clientAddress.country}
              onChange={(e) =>
                updateFormInput((prevState) => ({
                  ...prevState,
                  clientAddress: {
                    ...prevState.clientAddress,
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

        <h4 className="text-7C5DFA text-body-1 font-bold mt-12 mb-6 ">
          Bill to
        </h4>
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
              updateFormInput((prevState) => ({
                ...prevState,
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
            name="clientName"
            value={formInput.clientEmail}
            onChange={(e) =>
              updateFormInput((prevState) => ({
                ...prevState,
                clientEmail: e.target.value,
              }))
            }
            required
            id="clientName"
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
              updateFormInput((prevState) => ({
                ...prevState,
                senderAddress: {
                  ...prevState.senderAddress,
                  street: e.target.value,
                },
              }))
            }
            required
            id="StreetAddress"
            className="border border-7E88C3 dark:border-252945 py-4 px-3  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
          />
        </div>

        <div className="flex gap-x-6 mb-6">
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
                updateFormInput((prevState) => ({
                  ...prevState,
                  senderAddress: {
                    ...prevState.senderAddress,
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
                updateFormInput((prevState) => ({
                  ...prevState,
                  senderAddress: {
                    ...prevState.senderAddress,
                    postCode: e.target.value,
                  },
                }))
              }
              required
              id="postCode"
              className="border border-7E88C3 dark:border-252945 px-3 py-4 rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none  dark:bg-252945  focus:border-9277FF caret-9277FF"
            />
          </div>

          <div className="flex flex-col w-[152px]">
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
                updateFormInput((prevState) => ({
                  ...prevState,
                  senderAddress: {
                    ...prevState.senderAddress,
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

        <div className="mt-10 flex justify-between gap-x-6">
          <div className="flex flex-col mb-6 w-[240px]">
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
                updateFormInput((prevState) => ({
                  ...prevState,
                  createdAt: e.target.value,
                }))
              }
              required
              id="InvoiceDate"
              className="border shadow-md border-7E88C3 dark:border-252945 py-4 px-3  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF"
            />
          </div>

          <div className="flex flex-col mb-6 w-[240px]">
            <label
              htmlFor="paymentTerms"
              className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
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
              <div className="relative mt-1 ">
                <Listbox.Button className="relative dark:bg-252945 dark:text-FFFF text-0C0E16  w-full cursor-default rounded-lg py-4 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-7C5DFA focus-visible:ring-2 focus-visible:ring-FFFF focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-7C5DFA text-body-1">
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
                  <Listbox.Options className="absolute bg-FFFF dark:bg-252945 mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-7C5DFA ring-opacity-5 focus:outline-none text-body-1">
                    {terms.map((term, termIdx) => (
                      <Listbox.Option
                        key={termIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? 'bg-9277FF dark:text-FFFF text-0C0E16'
                              : 'dark:text-FFFF text-0C0E16'
                          }`
                        }
                        value={term}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {term}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 dark:text-FFFF text-0C0E16">
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
              updateFormInput((prevState) => ({
                ...prevState,
                description: e.target.value,
              }))
            }
            required
            id="projectDescription"
            className="border border-7E88C3 dark:border-252945 py-4 px-3  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
          />
        </div>
        <h4 className="text-777F98 text-heading-7 font-bold mt-6">Item List</h4>
        <div className="mt-6 tablet:flex tablet:gap-x-4">
          <div className="flex flex-col mb-6 w-[327px] tablet:w-[214px]">
            <label
              htmlFor="itemName"
              className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
            >
              Item Name
            </label>
            <input
              type="text"
              name="itemName"
              value={formInput.items[0].name}
              onChange={(e) =>
                updateFormInput((prevState) => ({
                  ...prevState,
                  items: [
                    {
                      ...prevState.items[0],
                      name: e.target.value,
                    },
                  ],
                }))
              }
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
                  updateFormInput((prevState) => ({
                    ...prevState,
                    items: [
                      {
                        ...prevState.items[0],
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
                  updateFormInput((prevState) => ({
                    ...prevState,
                    items: [
                      {
                        ...prevState.items[0],
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
                {formInput.items[0].total}
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
        <AddItem />
        <footer className=" flex items-center gap-x-2 h-91 box-shadow-footer-invoice justify-center w-full">
          <div
            onClick={closeEditInvoice}
            className="w-96 h-48 bg-F9FAFE dark:bg-252945 rounded-3xl grid place-content-center text-body-1 text-7E88C3 font-bold"
          >
            Cancel
          </div>
          <div className="w-138 h-48 bg-7C5DFA rounded-3xl grid place-content-center text-body-1 text-FFFF font-bold">
            Save Changes
          </div>
        </footer>
      </form>
    </div>
  );
};

export default EditForm;
