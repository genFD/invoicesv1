import React, { useState, useContext, useEffect, createContext } from "react";

import { formData } from "../data/data";
import { addDays, format } from "../utils/utils";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  /* Modal and Drawer */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewInvoiceOpen, setIsNewInvoiceOpen] = useState(false);
  const [isList, setIsList] = useState(false);
  const [isEditInvoiceOpen, setIsEditInvoiceOpen] = useState(false);

  /* Form State Variables */
  // const [client, updateClient] = useState(formData.client);
  const [client, updateClient] = useState({
    where: {
      city: "",
      country: "",
      postCode: "",
      street: "",
    },
    who: {
      email: "",
      name: "",
    },
  });
  // const [sender, updateSender] = useState(formData.sender);
  const [sender, updateSender] = useState({
    city: "",
    country: "",
    postCode: "",
    street: "",
  });
  // const [items, updateItems] = useState(formData.items);
  const [items, updateItems] = useState([
    {
      name: "",
      quantity: "",
      price: "",
      total: 100,
    },
    {
      name: "",
      quantity: "",
      price: "",
      total: 200,
    },
    {
      name: "",
      quantity: "",
      price: "",
      total: 300,
    },
  ]);

  // const [invoiceInfo, updateInvoiceInfo] = useState(formData.invoiceInfo);
  const [invoiceInfo, updateInvoiceInfo] = useState({
    createdAt: "",
    description: "",
  });
  // const [paymentTerms, updatePaymentTerms] = useState(formData.paymentTerms);
  const [paymentTerms, updatePaymentTerms] = useState(1);

  // const [total, updateTotal] = useState(formData.total);
  const [total, updateTotal] = useState(556.0);
  const [test, setTest] = useState({
    date: "",
    country: "",
  });

  const paymentDue = `"${format(addDays(`"${test.date}"`, paymentTerms))}"`;
  const totalItems = items.reduce((total, item) => {
    total += item.total;
    return total;
  }, 0);
  // console.log(paymentDue);
  console.log(totalItems);
  console.log([...items]);

  const handleSaveAsDraft = async (e) => {};
  const handleSaveAndSend = async (e) => {
    const data = {
      ...invoiceInfo,
      paymentDue,
      ...client.who,

      senderAddress: {
        ...sender,
      },
      clientAddress: {
        ...client.where,
      },
      items: [...items],
      total: totalItems,
    };

    // await axios.post("/api/feedbacks", data);
    // updateClient(formData.client);
    // updateSender(formData.client);
    // updateInvoiceInfo(formData.invoiceInfo);
    // updateItems(formData.items);
  };

  function closeModal() {
    setIsModalOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }
  function closeNewInvoice() {
    setIsNewInvoiceOpen(false);
  }
  function openNewInvoice() {
    setIsNewInvoiceOpen(true);
  }
  function openEditInvoice() {
    setIsEditInvoiceOpen(true);
  }
  function closeEditInvoice() {
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
        client,
        updateClient,
        sender,
        updateSender,
        // invoiceInfo,
        // updateInvoiceInfo,
        items,
        updateItems,
        test,
        setTest,
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
