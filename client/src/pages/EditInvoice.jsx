import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Navbar,
  GoBack,
  EditTitle,
  Loading,
  NoResults,
  EditFormSmall,
} from "../components";
import { useGlobalContext } from "../context/context";

function EditInvoice() {
  const { invoice, loadingCard, getInvoice } = useGlobalContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const editReroute = () => {
    if (window.innerWidth >= 768) {
      navigate("/");
    }
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      editReroute();
    });
    return () =>
      window.removeEventListener("resize", () => {
        editReroute();
      });
  }, []);

  useEffect(() => {
    getInvoice(id);
  }, []);

  if (loadingCard) {
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
        <EditTitle invoiceId={invoice[0].id} />
        <EditFormSmall invoice={invoice} />
      </div>
    </>
  );
}

export default EditInvoice;
