import React from "react";
import { Header, Cards, NewInvoice } from "../components";
import { useModalContext } from "../context/modalcontext";

const Content = () => {
  const { newInvoiceForm } = useModalContext();
  return (
    <section className="desktop:my-0 desktop:mx-auto">
      <Header />
      {newInvoiceForm && <NewInvoice />}
      <Cards />
    </section>
  );
};

export default Content;
