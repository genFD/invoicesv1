import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/context';

const Edit = () => {
  const { id } = useParams();
  const { openEditInvoice } = useGlobalContext();

  return (
    <>
      <button
        onClick={openEditInvoice}
        className="hidden w-73 h-48 bg-F9FAFE rounded-3xl tablet:grid place-content-center text-heading-4 text-7E88C3 font-bold"
      >
        Edit
      </button>
      <Link to={`/editinvoice/${id}`}>
        <button className="grid w-73 h-48 bg-F9FAFE rounded-3xl tablet:hidden place-content-center text-heading-4 text-7E88C3 font-bold">
          Edit
        </button>
      </Link>
    </>
  );
};

export default Edit;
