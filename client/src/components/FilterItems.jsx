import React, { Fragment } from 'react';
import { Transition } from '@headlessui/react';
import { useGlobalContext } from '../context/context';

const FilterItems = () => {
  const { isList, setIsList } = useGlobalContext();

  return (
    <div className="mr-[18px] tablet:mr-10 desktop:mr-24 relative">
      <div
        onClick={() => setIsList(!isList)}
        className="inline-flex gap-x-2 w-full items-center text-body-1 text-0C0E16 dark:text-FFFF cursor-pointer"
      >
        <span className="tablet:hidden">Filter</span>
        <span className="hidden tablet:block">Filter by status</span>
        <div>
          {isList ? (
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="#7C5DFA"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          ) : (
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="#7C5DFA"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
      {isList && (
        <Transition
          as={Fragment}
          show={isList}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className="absolute z-20 -left-10 mt-4 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-opacity-5 focus:outline-none">
            <div className="flex flex-col gap-y-4  w-48 h-32 p-6 bg-white shadow rounded bg-FFFF dark:bg-252945 text-body-1 text-0C0E16 dark:text-FFFF">
              <div className="flex items-center gap-x-[13px] cursor:pointer">
                <div className="rounded-sm dark:bg-1E2139 bg-DFE3FA w-4 h-4 hover:border-2 hover:border-7C5DFA flex flex-shrink-0 justify-center items-center relative">
                  <input
                    type="checkbox"
                    className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
                  />
                  <div className="check-icon hidden rounded-sm ">
                    <svg
                      className="icon icon-tabler icon-tabler-check "
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 24 24"
                      strokeWidth="3.5"
                      stroke="#fff"
                      fill="#7C5DFA"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </div>
                </div>
                <p className="text-7E88C3 font-medium dark:text-DFE3FA">
                  Draft
                </p>
              </div>
              <div className="flex items-center gap-x-[13px]">
                <div className="rounded-sm dark:bg-1E2139 bg-DFE3FA w-4 h-4 hover:border-2 hover:border-7C5DFA flex flex-shrink-0 justify-center items-center relative">
                  <input
                    type="checkbox"
                    className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
                  />
                  <div className="check-icon hidden rounded-sm ">
                    <svg
                      className="icon icon-tabler icon-tabler-check "
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 24 24"
                      strokeWidth="3.5"
                      stroke="#fff"
                      fill="#7C5DFA"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </div>
                </div>
                <p className="text-7E88C3 font-medium dark:text-DFE3FA">
                  Pending
                </p>
              </div>
              <div className="flex items-center gap-x-[13px]">
                <div className="rounded-sm dark:bg-1E2139 bg-DFE3FA w-4 h-4 hover:border-2 hover:border-7C5DFA flex flex-shrink-0 justify-center items-center relative">
                  <input
                    type="checkbox"
                    className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
                  />
                  <div className="check-icon hidden rounded-sm ">
                    <svg
                      className="icon icon-tabler icon-tabler-check "
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 24 24"
                      strokeWidth="3.5"
                      stroke="#fff"
                      fill="#7C5DFA"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </div>
                </div>
                <p className="text-7E88C3 font-medium dark:text-DFE3FA">Paid</p>
              </div>
            </div>
          </div>
        </Transition>
      )}
      <style>
        {` .checkbox:checked + .check-icon {
                display: flex;
                border: 1px solid #7C5DFA;
            }`}
      </style>
    </div>
  );
};

export default FilterItems;
