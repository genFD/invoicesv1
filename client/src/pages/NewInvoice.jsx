import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, GoBack, Form, NewTitle } from "../components";

function NewInvoice() {
  const navigate = useNavigate();

  const newInvoiceReroute = () => {
    if (window.innerWidth >= 768) {
      navigate("/");
    }
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      newInvoiceReroute();
    });
    return () =>
      window.removeEventListener("resize", () => {
        newInvoiceReroute();
      });
  }, []);

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
