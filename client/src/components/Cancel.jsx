import React from 'react';
import { useGlobalContext } from '../context/context';

const Cancel = () => {
  const { closeModal } = useGlobalContext();
  return (
    <button
      onClick={closeModal}
      className="w-96 h-48 bg-F9FAFE dark:bg-252945 rounded-3xl grid place-content-center text-body-1 text-7E88C3 font-bold"
    >
      Cancel
    </button>
  );
};

export default Cancel;
