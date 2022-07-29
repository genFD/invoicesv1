import React from 'react';
import { useGlobalContext } from '../context/context';

const Delete = () => {
  const { openModal } = useGlobalContext();

  return (
    <button
      onClick={openModal}
      className="w-89 h-48 bg-EC5757 rounded-3xl grid place-content-center text-heading-4 text-FFFF font-bold"
    >
      Delete
    </button>
  );
};

export default Delete;
