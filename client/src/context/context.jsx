import React, {
  useState,
  useContext,
  useEffect,
  createContext,
  useReducer,
} from "react";

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
  const paymentDue = `"${format(
    addDays(`"${form.invoiceInfo.createdAt}"`, form.paymentTerms)
  )}"`;
  const totalItems = items.reduce((total, item) => {
    total += convNum(item.total);
    return total;
  }, 0);

  // const handleSaveAsDraft = async (e) => {
  //   const data = {
  //     ...invoiceInfo,
  //     paymentDue,
  //     ...client.who,

  //     senderAddress: {
  //       // ...sender,
  //     },
  //     clientAddress: {
  //       ...client.where,
  //     },
  //     items: [...items],
  //     total: totalItems,
  //     status: "draft",
  //   };

  //   // await axios.post("/api/feedbacks", data);
  //   // updateClient(formData.client);
  //   // updateSender(formData.client);
  //   // updateInvoiceInfo(formData.invoiceInfo);
  //   // updateItems(formData.items);
  // };

  // const handleSaveAndSend = async (e) => {
  //   const who = {
  //     clientName: client.name,
  //     clientEmail: client.email,
  //   };
  //   const where = {
  //     street: client.street,
  //     city: client.city,
  //     country: client.country,
  //     postCode: client.postCode,
  //   };
  //   const data = {
  //     ...invoiceInfo,
  //     paymentDue,
  //     ...who,

  //     senderAddress: {
  //       // ...sender,
  //     },
  //     clientAddress: {
  //       ...where,
  //     },
  //     items: [...items],
  //     total: totalItems,
  //     status: "pending",
  // paymentTerms: getNum(form.paymentTerms),
  //   };

  //   // await axios.post("/api/feedbacks", data);
  //   // updateClient(formData.client);
  //   // updateSender(formData.client);
  //   // updateInvoiceInfo(formData.invoiceInfo);
  //   // updateItems(formData.items);
  // };
  // const handleChange = (e) => {
  //   dispatch({
  //     type: "HANDLE_INPUT",
  //     field: e.target.name,
  //     payload: e.target.value,
  //   });
  // };
  // const handleEditInvoice = async (e) => {
  //   const data = {
  //     ...invoiceInfo,
  //     paymentDue,
  //     ...client.who,

  //     senderAddress: {
  //       // ...sender,
  //     },
  //     clientAddress: {
  //       ...client.where,
  //     },
  //     items: [...items],
  //     total: totalItems,
  //     status: "draft",
  //   };
  //   // await axios.put(`/api/feedbacks/${id}`, data);
  // };
  // const handleDeleteInvoice = async () => {
  //   // await axios.delete(`/api/feedbacks/${id}`);
  // };

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

  const handleChange = (e, key) => {
    updateForm({
      ...form,
      [key]: { ...form[key], [e.target.name]: e.target.value },
    });
  };

  return (
    <AppContext.Provider
      value={{
        handleChange,
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
        updateForm,
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
