import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { AddItem, Divider, Cancel, SaveChanges } from '../components';
const terms = ['Net 1 Day', 'Net 7 Days', 'Net 14 Days', 'Net 30 Days'];

const EditFormMobile = ({ invoice }) => {
  const [selected, setSelected] = useState(terms[0]);
  const [formdata, updateFormData] = useState({
    clientAddress: {
      city: '',
      country: '',
      postCode: '',
      street: '',
    },
    senderAddress: {
      city: '',
      country: '',
      postCode: '',
      street: '',
    },
    clientEmail: '',
    clientName: '',
    createdAt: '',
    description: '',
    invoiceId: '',
    items: [
      {
        name: '',
        price: '',
        quantity: '',
        total: '',
      },
    ],
    paymentDue: '',
    paymentTerms: '',
    total: '',
  });

  const populate = () => {
    updateFormData({ ...invoice });
  };
  useEffect(() => {
    populate();
  }, []);

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
              value={formdata.clientAddress.street}
              onChange={(e) =>
                updateFormData((prevState) => ({
                  ...prevState,
                  clientAddress: {
                    ...prevState.clientAddress,
                    street: e.target.value,
                  },
                }))
              }
              type="text"
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
                value={formdata.clientAddress.city}
                onChange={(e) =>
                  updateFormData((prevState) => ({
                    ...prevState,
                    clientAddress: {
                      ...prevState.clientAddress,
                      city: e.target.value,
                    },
                  }))
                }
                type="text"
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
                value={formdata.clientAddress.postCode}
                onChange={(e) =>
                  updateFormData((prevState) => ({
                    ...prevState,
                    clientAddress: {
                      ...prevState.clientAddress,
                      postCode: e.target.value,
                    },
                  }))
                }
                type="text"
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
              value={formdata.clientAddress.country}
              onChange={(e) =>
                updateFormData((prevState) => ({
                  ...prevState,
                  clientAddress: {
                    ...prevState.clientAddress,
                    country: e.target.value,
                  },
                }))
              }
              type="text"
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
                value={formdata.clientName}
                onChange={(e) =>
                  updateFormData((prevState) => ({
                    ...prevState,
                    clientName: e.target.value,
                  }))
                }
                type="text"
                name="clientName"
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
                value={formdata.clientEmail}
                onChange={(e) =>
                  updateFormData((prevState) => ({
                    ...prevState,
                    clientEmail: e.target.value,
                  }))
                }
                type="text"
                name="clientEmail"
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
                value={formdata.senderAddress.street}
                onChange={(e) =>
                  updateFormData((prevState) => ({
                    ...prevState,
                    senderAddress: {
                      ...prevState.senderAddress,
                      street: e.target.value,
                    },
                  }))
                }
                name="StreetAddress"
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
                  value={formdata.senderAddress.city}
                  onChange={(e) =>
                    updateFormData((prevState) => ({
                      ...prevState,
                      senderAddress: {
                        ...prevState.senderAddress,
                        city: e.target.value,
                      },
                    }))
                  }
                  type="text"
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
                  value={formdata.senderAddress.postCode}
                  onChange={(e) =>
                    updateFormData((prevState) => ({
                      ...prevState,
                      senderAddress: {
                        ...prevState.senderAddress,
                        postCode: e.target.value,
                      },
                    }))
                  }
                  type="text"
                  name="postCode"
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
                value={formdata.senderAddress.country}
                onChange={(e) =>
                  updateFormData((prevState) => ({
                    ...prevState,
                    senderAddress: {
                      ...prevState.senderAddress,
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
                value={formdata.createdAt}
                onChange={(e) =>
                  updateFormData((prevState) => ({
                    ...prevState,
                    createdAt: e.target.value,
                  }))
                }
                name="InvoiceDate"
                required
                id="InvoiceDate"
                className="border shadow-md border-7E88C3 dark:border-252945 py-4 px-3  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF"
              />
            </div>

            <div className="flex flex-col mb-6">
              <label
                htmlFor="paymentTerms"
                className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
              >
                Payment Terms
              </label>
              <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1 ">
                  <Listbox.Button className="relative bg-FFFF dark:bg-252945 dark:text-FFFF text-0C0E16  w-full cursor-default rounded-lg py-4 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-7C5DFA focus-visible:ring-2 focus-visible:ring-FFFF focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-7C5DFA text-body-1">
                    <span className="block truncate">{selected}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <SelectorIcon
                        className="h-5 w-5 text-gray-400"
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

            <div className="flex flex-col mb-6">
              <label
                htmlFor="projectDescription"
                className="text-body-1 text-7E88C3 dark:text-888EB0 pb-2 text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
              >
                Project Description
              </label>
              <input
                type="text"
                value={formdata.description}
                onChange={(e) =>
                  updateFormData((prevState) => ({
                    ...prevState,
                    description: e.target.value,
                  }))
                }
                name="projectDescription"
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
                value={formdata.items[0].name}
                onChange={(e) =>
                  updateFormData((prevState) => ({
                    ...prevState,
                    items: [
                      {
                        ...prevState.items[0],
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
                  value={formdata.items[0].quantity}
                  onChange={(e) =>
                    updateFormData((prevState) => ({
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
                  value={formdata.items[0].price}
                  onChange={(e) =>
                    updateFormData((prevState) => ({
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
                  {formdata.items[0].total}
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
        </div>
        <Divider />
        <footer className="flex items-center gap-x-2 h-91 box-shadow-footer-invoice justify-end px-6 w-full">
          <Cancel />
          <SaveChanges />
        </footer>
      </form>
    </div>
  );
};

export default EditFormMobile;
