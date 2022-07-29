import React from 'react';
import { Navbar, GoBack, Form, EditTitle } from '../components';

function EditInvoice() {
  return (
    <>
      <Navbar />
      <div className="border-7C5DFA border flex flex-col">
        <GoBack />
        <EditTitle />
        <Form />
      </div>
    </>
  );
}

export default EditInvoice;
