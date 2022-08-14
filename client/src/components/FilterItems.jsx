import React from "react";
import { ArrowUp, ArrowDown, Checkbox } from "../components";
import { useModalContext } from "../context/modalcontext";

const FilterItems = () => {
  const { filter, openFilter } = useModalContext();
  return (
    <div className="mr-[18px] tablet:mr-10 desktop:mr-24 relative">
      <div onClick={openFilter} className={filterStyles}>
        <span className="tablet:hidden">Filter</span>
        <span className="hidden tablet:block">Filter by status</span>
        <div>{filter ? <ArrowUp /> : <ArrowDown />}</div>
      </div>
      {filter && (
        <div className={containerStyles}>
          <div className={listStyles}>
            {checkboxes.map((checkbox) => {
              return <Checkbox key={checkbox.id} {...checkbox} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterItems;

// data------*/

const checkboxes = [
  {
    id: 1,
    label: "Draft",
    value: "draft",
    name: "draft",
  },
  {
    id: 2,
    label: "Pending",
    value: "pending",
    name: "pending",
  },
  {
    id: 3,
    label: "Paid",
    value: "paid",
    name: "paid",
  },
];
// styles------*/

const filterStyles =
  "inline-flex gap-x-2 w-full items-center text-body-1 text-0C0E16 dark:text-FFFF cursor-pointer";
const containerStyles =
  "absolute z-20 -left-10 mt-4 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-opacity-5 focus:outline-none";

const listStyles =
  "flex flex-col gap-y-4  w-48 h-32 p-6 bg-white shadow rounded bg-FFFF dark:bg-252945 text-body-1 text-0C0E16 dark:text-FFFF";
