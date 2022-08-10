// <div className="mr-[18px] tablet:mr-10 desktop:mr-24">
//   <Menu as="div" className="relative inline-block text-left">
//     <div>
//       <Menu.Button
//         onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
//         className="inline-flex w-full justify-center items-center text-body-1 text-0C0E16 dark:text-FFFF cursor-pointer"
//       >
//         <span className="tablet:hidden">Filter</span>
//         <span className="hidden tablet:block">Filter by status</span>
//         {isFilterMenuOpen ? (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 ml-2"
//             viewBox="0 0 20 20"
//             fill="#7C5DFA"
//           >
//             <path
//               fillRule="evenodd"
//               d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
//               clipRule="evenodd"
//             />
//           </svg>
//         ) : (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 ml-2"
//             viewBox="0 0 20 20"
//             fill="#7C5DFA"
//           >
//             <path
//               fillRule="evenodd"
//               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//               clipRule="evenodd"
//             />
//           </svg>
//         )}
//       </Menu.Button>
//     </div>
//     <Transition
//       as={Fragment}
//       enter="transition ease-out duration-100"
//       enterFrom="transform opacity-0 scale-95"
//       enterTo="transform opacity-100 scale-100"
//       leave="transition ease-in duration-75"
//       leaveFrom="transform opacity-100 scale-100"
//       leaveTo="transform opacity-0 scale-95"
//     >
//       <Menu.Items className="absolute z-20 -left-10 mt-2 w-48 h-32 origin-top-right divide-y divide-gray-100 rounded-md bg-FFFF shadow-lg ring-opacity-5 focus:outline-none">
//         <div className="px-1 py-1 ">
//           <form action="">
//             <input type="checkbox" name="Draft" id="" />
//             <input type="checkbox" name="Pending" id="" />
//             <input type="checkbox" name="Paid" id="" />
//           </form>
//           {/* <Menu.Item>
//             {({ active }) => (
//               <input
//                 className={`${
//                   active ? 'bg-violet-500 text-white' : 'text-gray-900'
//                 } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
//               >
//                 {active ? (
//                   <h2 className="mr-2 h-5 w-5" aria-hidden="true">
//                     active
//                   </h2>
//                 ) : (
//                   <h3 className="mr-2 h-5 w-5" aria-hidden="true">
//                     inactive
//                   </h3>
//                 )}
//                 Edit
//               </input>
//             )}
//           </Menu.Item> */}
//         </div>
//       </Menu.Items>
//     </Transition>
//   </Menu>
// </div>
<div className="pl-4 flex items-center">
  <div className="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
    <input
      type="checkbox"
      className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
    />
    <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
      <svg
        className="icon icon-tabler icon-tabler-check"
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={12}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M5 12l5 5l10 -10" />
      </svg>
    </div>
  </div>
  <p className="text-sm leading-normal ml-2 text-gray-800">Facebook</p>
</div>;

{
  /* <form
                  action=""
                  noValidate
                  onSubmit={handleSubmit}
                  className="tablet:w-[504px]"
                >
                  <h4 className="text-7C5DFA text-body-1 font-bold mb-6 ">
                    Bill from
                  </h4>
                  <div className="flex flex-col mb-6">
                    <label
                      htmlFor="StreetAddress"
                      className={`text-body-1 pb-2 font-bold flex items-center justify-between
                      ${
                        error.clientAddress.street &&
                        !formInput.clientAddress.street
                          ? 'errorLabel'
                          : 'text-7E88C3 dark:text-888EB0'
                      }
                      `}
                    >
                      Street Address
                      {error.clientAddress.street && (
                        <Error
                          street={formInput.clientAddress.street}
                          errorStreet={error.clientAddress.street}
                          error={error.error}
                        />
                      )}
                    </label>
                    <input
                      type="text"
                      name="StreetAddress"
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
                      required
                      id="StreetAddress"
                      className={` py-4 px-3 rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none dark:bg-252945  focus:border-9277FF caret-9277FF
                      ${
                        error.clientAddress.street &&
                        !formInput.clientAddress.street
                          ? 'error'
                          : 'border border-7E88C3 dark:border-252945'
                      }
                      `}
                    />
                  </div>

                  <div className="flex gap-x-6 mb-6">
                    <div className="flex flex-col w-[152px] ">
                      <label
                        htmlFor="city"
                        className={`text-body-1 pb-2 font-bold flex items-center justify-between
                      ${
                        error.clientAddress.city &&
                        !formInput.clientAddress.city
                          ? 'errorLabel'
                          : 'text-7E88C3 dark:text-888EB0'
                      }
                      `}
                      >
                        City
                        {error.clientAddress.street && (
                          <Error
                            city={formInput.clientAddress.city}
                            errorCity={error.clientAddress.city}
                          />
                        )}
                      </label>
                      <input
                        type="text"
                        name="city"
                        onChange={(e) =>
                          updateFormInput((prev) => ({
                            ...prev,
                            clientAddress: {
                              ...prev.clientAddress,
                              city: e.target.value,
                            },
                          }))
                        }
                        required
                        id="city"
                        className={`py-4 px-3 rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none dark:bg-252945  focus:border-9277FF caret-9277FF
                      ${
                        error.clientAddress.city &&
                        !formInput.clientAddress.city
                          ? 'error'
                          : 'border border-7E88C3 dark:border-252945'
                      }
                      `}
                      />
                    </div>

                    <div className="flex flex-col w-[152px]">
                      <label
                        htmlFor="postCode"
                        className={`text-body-1 pb-2 font-bold flex items-center justify-between
                      ${
                        error.clientAddress.postCode &&
                        !formInput.clientAddress.postCode
                          ? 'errorLabel'
                          : 'text-7E88C3 dark:text-888EB0'
                      }
                      `}
                      >
                        Post Code
                        {error.clientAddress.street && (
                          <Error
                            city={formInput.clientAddress.city}
                            errorCity={error.clientAddress.city}
                          />
                        )}
                      </label>
                      <input
                        type="text"
                        name="postCode"
                        onChange={(e) =>
                          updateFormInput((prev) => ({
                            ...prev,
                            clientAddress: {
                              ...prev.clientAddress,
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
                          updateFormInput((prev) => ({
                            ...prev,
                            clientAddress: {
                              ...prev.clientAddress,
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
                      name="clientName"
                      value={formInput.clientEmail}
                      onChange={(e) =>
                        updateFormInput((prev) => ({
                          ...prev,
                          clientEmail: e.target.value,
                        }))
                      }
                      required
                      id="clientName"
                      placeholder="e.g. email@example.com"
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
                      value={formInput.description}
                      onChange={(e) =>
                        updateFormInput((prev) => ({
                          ...prev,
                          description: e.target.value,
                        }))
                      }
                      required
                      id="projectDescription"
                      placeholder="e.g. Graphic Design Service"
                      className="border border-7E88C3 dark:border-252945 py-4 px-3  rounded text-body-1 text-0C0E16 font-bold dark:text-FFFF focus:outline-none bg-transparent dark:bg-252945  focus:border-9277FF caret-9277FF"
                    />
                  </div>
                  <h4 className="text-777F98 text-heading-7 font-bold mt-6">
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

                        <input
                          value={formInput.items[0].total}
                          onChange={(e) =>
                            updateFormInput((prevState) => ({
                              ...prevState,
                              items: [
                                {
                                  ...prevState.items[0],
                                  total: e.target.value,
                                },
                              ],
                            }))
                          }
                          type="number"
                          className=" w-24 h-full dark:bg-252945   border bg border-33D69F px-3 py-4  text-body-1 text-0C0E16 font-bold dark:text-FFFF"
                        />
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
                  <footer className="tablet:mt-12 flex items-center gap-x-2 h-91 tablet:h-fit tablet:pb-8 box-shadow-footer-invoice justify-center tablet:justify-start tablet:gap-x-32 w-full">
                    <div>
                      <div
                        onClick={closeNewInvoice}
                        className="w-84 h-48 bg-F9FAFE dark:bg-252945  rounded-3xl grid place-content-center text-body-1 text-7E88C3 font-bold cursor-pointer"
                      >
                        Discard
                      </div>
                    </div>
                    <div className="flex gap-x-2">
                      <button className="w-117 h-48 bg-373B53 rounded-3xl grid place-content-center text-body-1 text-DFE3FA font-bold">
                        Save As Draft
                      </button>
                      <button
                        type="submit"
                        className={`w-112 h-48 rounded-3xl grid place-content-center text-body-1 text-FFFF font-bold
                        
                        ${
                          !formInput.clientAddress.street &&
                          error.clientAddress.street
                            ? 'border border-EC5757 bg-EC5757 ring ring-FFFF '
                            : 'bg-7C5DFA'
                        }
                        `}
                      >
                        {!formInput.clientAddress.street &&
                        error.clientAddress.street ? (
                          <span className="flex gap-1 items-center">
                            Error
                            <svg
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              fill="#FFFF"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M11 7h2v7h-2zm0 8h2v2h-2z" />
                              <path d="m21.707 7.293-5-5A.996.996 0 0 0 16 2H8a.996.996 0 0 0-.707.293l-5 5A.996.996 0 0 0 2 8v8c0 .266.105.52.293.707l5 5A.996.996 0 0 0 8 22h8c.266 0 .52-.105.707-.293l5-5A.996.996 0 0 0 22 16V8a.996.996 0 0 0-.293-.707zM20 15.586 15.586 20H8.414L4 15.586V8.414L8.414 4h7.172L20 8.414v7.172z" />
                            </svg>
                          </span>
                        ) : (
                          'Save & send'
                        )}
                      </button>
                    </div>
                  </footer>
                </form> */
}
