import React from 'react';
import { Navbar, GoBack, Form, NewTitle } from '../components';

function NewInvoice() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <GoBack />
        <NewTitle />
        <Form />
      </div>
    </>
  );
}

export default NewInvoice;
