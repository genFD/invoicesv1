import React, { Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import {
  ItemList,
  AddItem,
  Divider,
  FooterNewInvoice,
  FooterEditInvoice,
} from '../components';

const paymentTerms = ['Net 1 Day', 'Net 7 Days', 'Net 14 Days', 'Net 30 Days'];

const Form = () => {
  const { id } = useParams();
  const [selected, setSelected] = useState(paymentTerms[0]);

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
              name="StreetAddress"
              required
              id="StreetAddress"
              className="border border-7E88C3 dark:border-252945 py-4 px-3 rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none dark:bg-252945  focus:border-9277FF caret-9277FF"
            />
          </div>

          <div className="flex gap-x-3 mb-6">
            <div className="flex flex-col basis-127">
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
                className="border border-7E88C3 dark:border-252945 px-3 py-4  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
              />
            </div>

            <div className="flex flex-col basis-127">
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
                required
                id="StreetAddress"
                className="border border-7E88C3 dark:border-252945 py-4 px-3  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
              />
            </div>

            <div className="flex gap-x-3 mb-6 ">
              <div className="flex flex-col basis-127">
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
                  className="border border-7E88C3 dark:border-252945 px-3 py-4  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
                />
              </div>

              <div className="flex flex-col basis-127">
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
                  <Listbox.Button className="relative dark:bg-252945 dark:text-FFFF text-0C0E16  w-full cursor-default rounded-lg py-4 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-7C5DFA focus-visible:ring-2 focus-visible:ring-FFFF focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-7C5DFA text-body-1">
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
                      {paymentTerms.map((term, termIdx) => (
                        <Listbox.Option
                          key={termIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? 'bg-9277FF dark:text-9277FF text-0C0E16'
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
          <ItemList />
          <AddItem />
        </div>
        <Divider />

        {!id ? <FooterNewInvoice /> : <FooterEditInvoice />}
      </form>
    </div>
  );
};

export default Form;
