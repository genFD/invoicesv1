import React from 'react';

const AddItem = () => {
  return (
    <button className="mt-12 flex justify-center gap-x-1 items-center w-full text-7E88C3 text-body-1 text-center rounded-3xl h-12 bg-F9FAFE dark:bg-252945">
      <svg
        className="fill-7C5DFA  dark:fill-888EB0"
        width="11"
        height="11"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
          fillRule="nonzero"
        />
      </svg>
      Add New Item
    </button>
  );
};

export default AddItem;
