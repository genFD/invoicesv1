import React from 'react';
import { Navbar, GoBack, Form, NewTitle } from '../components';

function NewInvoice() {
  return (
    <>
      <Navbar />
      <div className="border-7C5DFA border flex flex-col">
        <GoBack />
        <NewTitle />
        <Form />
      </div>
    </>
  );
}

export default NewInvoice;
