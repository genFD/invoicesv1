import React, {
  useState,
  useContext,
  useEffect,
  createContext,
  useCallback,
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
  // const paymentDue = `${format(
  //   addDays(
  //     `"${form.invoiceInfo.createdAt}"`,
  //     getNum(form.invoiceInfo.paymentTerms)
  //   )
  // )}`;

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

  const handleSaveAndSend = async (e) => {
    e.preventDefault();
    const who = {
      clientName: form.client.name,
      clientEmail: form.client.email,
    };
    const where = {
      street: form.client.street,
      city: form.client.city,
      country: form.client.country,
      postCode: form.client.postCode,
    };
    const { paymentTerms, createdAt, description } = form.invoiceInfo;

    const data = {
      createdAt,
      description,
      paymentTerms: getNum(paymentTerms),
      // paymentDue,
      ...who,

      senderAddress: {
        ...form.sender,
      },
      clientAddress: {
        ...where,
      },
      items: [...items],
      total: totalItems,
      status: "pending",
    };

    console.log(data);

    // await axios.post("/api/feedbacks", data);
  };

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
        populate,
        populateClientInfo,
        form,
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
