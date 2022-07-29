import { Dialog, Transition, Listbox } from '@headlessui/react';
import React, { useRef, Fragment, useState } from 'react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { useGlobalContext } from '../context/context';
import { ItemList, AddItem, FooterEditInvoice } from '../components';
const paymentTerms = ['Net 1 Day', 'Net 7 Days', 'Net 14 Days', 'Net 30 Days'];

const EditInvoice = () => {
  const [selected, setSelected] = useState(paymentTerms[0]);

  const { isEditInvoiceOpen, closeEditInvoice } = useGlobalContext();
  const backdrop = useRef(null);
  return (
    <Transition appear show={isEditInvoiceOpen} as="div">
      <Dialog
        initialFocus={backdrop}
        as="div"
        className="relative z-10"
        onClose={closeEditInvoice}
      >
        <Transition.Child
          as="div"
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            onClick={closeEditInvoice}
            className="fixed desktop:z-10 inset-0 top-[72px] desktop:top-0 desktop:left-[calc(103px+715px)] bg-7C5DFA bg-opacity-50 dark:bg-0C0E16 dark:bg-opacity-70 "
          />
        </Transition.Child>

        <div className="fixed inset-0 top-[72px] desktop:top-0 desktop:left-[103px] overflow-y-auto ref={backdrop}">
          <div className=" bg-FFFF dark:bg-141625  min-h-screen tablet:w-[616px] desktop:w-[719px] tablet:rounded-tr-20px tablet:rounded-br-20px items-center justify-center ">
            <Transition.Child
              as="div"
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
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
                  <h4 className="text-7C5DFA text-body-1 font-bold mb-6 ">
                    Bill from
                  </h4>
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
                                          selected
                                            ? 'font-medium'
                                            : 'font-normal'
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
                      required
                      id="projectDescription"
                      className="border border-7E88C3 dark:border-252945 py-4 px-3  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
                    />
                  </div>
                  <h4 className="text-777F98 text-heading-7 font-bold mt-6">
                    Item List
                  </h4>
                  <ItemList />
                  <AddItem />
                  <FooterEditInvoice />
                </form>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EditInvoice;
