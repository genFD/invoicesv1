import axios from "axios";
import React, { useState, useContext, useEffect, createContext } from "react";
import { API_URL } from "../api/requests";

import { formData, itemsData } from "../data/data";
import { addDays, format, getId, convNum, getNum } from "../utils/utils";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  /* Modal and Drawer */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewInvoiceOpen, setIsNewInvoiceOpen] = useState(false);
  const [isList, setIsList] = useState(false);
  const [isEditInvoiceOpen, setIsEditInvoiceOpen] = useState(false);

  /* Form State Variables */
  const [form, updateForm] = useState(formData);
  const [items, updateItems] = useState(itemsData);

  /*  */

  const resetForm = () => {
    updateForm(formData);
  };
  const resetItems = () => {
    updateItems(itemsData);
  };

  const totalItems = items.reduce((total, item) => {
    total += convNum(item.total);
    return total;
  }, 0);

  const handleChange = (e, key) => {
    updateForm({
      ...form,
      [key]: { ...form[key], [e.target.name]: e.target.value },
    });
  };

  const populateClientInfo = (invoice) => {
    updateForm({
      ...form,
      clientInfo: {
        name: invoice[0].content.clientName,
        email: invoice[0].content.clientEmail,
      },
    });
  };

  const populate = (invoice, formkey, invoiceKey) => {
    updateForm({ ...form, [formkey]: invoice[0].content[invoiceKey] });
  };
  const handleSaveAsDraft = async (e) => {
    e.preventDefault();

    const { paymentTerms, createdAt, description } = form.invoiceInfo;
    let term =
      typeof paymentTerms === "number" ? paymentTerms : getNum(paymentTerms);
    const paymentDue = `${format(addDays(`"${createdAt}"`, term))}`;
    const { email, name } = form.clientInfo;
    const data = {
      createdAt,
      paymentDue,
      description,
      paymentTerms: term,
      clientName: name,
      clientEmail: email,
      status: "draft",
      senderAddress: {
        ...form.senderAddress,
      },
      clientAddress: {
        ...form.clientAddress,
      },
      items: [...items],
      total: totalItems,
    };

    console.log(data);
    await axios.post("/api/feedbacks", data);
    resetItems();
    resetForm();
  };

  const handleSaveAndSend = async (e) => {
    e.preventDefault();
    const { paymentTerms, createdAt, description } = form.invoiceInfo;
    let term =
      typeof paymentTerms === "number" ? paymentTerms : getNum(paymentTerms);

    const paymentDue = `${format(addDays(`"${createdAt}"`, term))}`;

    const newItems = items.map((item) => {
      return {
        ...item,
        quantity: convNum(item.quantity),
        price: convNum(item.price),
        total: convNum(item.price),
      };
    });

    const { email, name } = form.clientInfo;
    const data = {
      createdAt,
      paymentDue,
      description,
      paymentTerms: term,
      clientName: name,
      clientEmail: email,
      status: form.status,
      senderAddress: {
        ...form.senderAddress,
      },
      clientAddress: {
        ...form.clientAddress,
      },
      items: [...newItems],
      total: totalItems,
    };

    // console.log(data);

    await axios.post(API_URL, data);
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    const { paymentTerms, createdAt, description } = form.invoiceInfo;
    const { email, name } = form.clientInfo;
    let term =
      typeof paymentTerms === "number" ? paymentTerms : getNum(paymentTerms);
    const paymentDue = `${format(addDays(`"${createdAt}"`, term))}`;

    const data = {
      createdAt,
      paymentDue,
      description,
      paymentTerms: term,
      clientName: name,
      clientEmail: email,
      status: form.status,
      senderAddress: {
        ...form.senderAddress,
      },
      clientAddress: {
        ...form.clientAddress,
      },
      items: [...items],
      total: totalItems,
    };
    console.log(data);
  };

  const handleDeleteInvoice = async () => {
    // await axios.delete(`/api/feedbacks/${id}`);
  };

  const addItem = () => {
    updateItems([
      ...items,
      {
        id: getId(),
        name: "",
        quantity: 0,
        price: 0,
        total: 0,
      },
    ]);
  };

  const deleteItem = (id) => {
    const newListItems = items.filter((i) => i.id !== id);
    updateItems(newListItems);
  };

  // console.log(typeof items[0].price);
  // console.log(typeof items[0].quantity);
  // console.log(typeof items[0].total);
  // console.log(typeof paymentTerms);

  function closeModal() {
    setIsModalOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }
  function closeNewInvoice(e) {
    e.preventDefault();
    setIsNewInvoiceOpen(false);
  }
  function openNewInvoice() {
    setIsNewInvoiceOpen(true);
  }
  function openEditInvoice() {
    setIsEditInvoiceOpen(true);
  }
  function closeEditInvoice(e) {
    e.preventDefault();
    setIsEditInvoiceOpen(false);
  }
  const sideFixer = () => {
    if (window.innerWidth <= 768) {
      closeNewInvoice();
      closeEditInvoice();
    }
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      sideFixer();
    });
    return () =>
      window.removeEventListener("resize", () => {
        sideFixer();
      });
  }, []);

  return (
    <AppContext.Provider
      value={{
        populate,
        resetForm,
        resetItems,
        populateClientInfo,
        handleSaveChanges,
        form,
        handleSaveAsDraft,
        updateForm,
        handleChange,
        handleSaveAndSend,
        isModalOpen,
        setIsModalOpen,
        closeModal,
        openModal,
        closeNewInvoice,
        openNewInvoice,
        isNewInvoiceOpen,
        openEditInvoice,
        closeEditInvoice,
        isEditInvoiceOpen,
        isList,
        setIsList,
        ...form,
        items,
        updateItems,
        addItem,
        deleteItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
