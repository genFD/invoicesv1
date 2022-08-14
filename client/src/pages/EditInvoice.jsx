import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  GoBack,
  Form,
  EditForm,
  EditTitle,
  Loading,
  NoResults,
  EditFormMobile,
} from "../components";
import useInvoice from "../hooks/useInvoice";

function EditInvoice() {
  const { invoice, loading } = useInvoice();
  const { invoiceId } = invoice;
  const editReroute = () => {
    if (window.innerWidth >= 768) {
      navigate("/");
    }
  };
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("resize", () => {
      editReroute();
    });
    return () =>
      window.removeEventListener("resize", () => {
        editReroute();
      });
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (Object.keys(invoice).length < 1) {
    return <NoResults />;
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <GoBack />
        <EditTitle invoiceId={invoiceId} />
        {/* <EditFormMobile invoice={invoice} /> */}
      </div>
    </>
  );
}

export default EditInvoice;
