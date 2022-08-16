import axios from "axios";
import React, {
  useState,
  useContext,
  useEffect,
  createContext,
  useCallback,
} from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

import {
  API_URL,
  httpCreateInvoice,
  httpDeleteInvoice,
  httpEditInvoice,
  httpFilterInvoice,
  httpFilterInvoices,
  httpGetInvoice,
  httpGetInvoices,
  httpMarkAsPaid,
} from "../api/requests";

import { formData, itemsData, loadingState } from "../data/data";
import {
  addDays,
  format,
  getId,
  convNum,
  getNum,
  notify,
} from "../utils/utils";
import { useModalContext } from "./modalcontext";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  /* Filter/invoices state */
  const [checked, setChecked] = useState({
    paid: false,
    pending: false,
    draft: false,
  });

  const [invoices, updateInvoices] = useState([]);
  const [invoice, updateInvoice] = useState({});
  const [loading, setLoading] = useState(loadingState);
  const [query, updateQuery] = useState({
    paid: "",
    pending: "",
    draft: "",
  });

  const getInvoices = useCallback(async () => {
    setLoading({ ...loading, loadingCards: true });
    const fetchedInvoices =
      !query.paid && !query.pending && !query.draft
        ? await httpGetInvoices()
        : await httpFilterInvoices(query);
    if (fetchedInvoices) {
      updateInvoices(fetchedInvoices);
    } else {
      updateInvoices([]);
    }
    setLoading({ ...loading, loadingCards: false });
  }, [query]);

  useEffect(() => {
    getInvoices();
  }, [getInvoices, query]);

  const getInvoice = useCallback(async (id) => {
    setLoading({ ...loading, loadingCard: true });
    const fetchedInvoice = await httpGetInvoice(id);
    if (fetchedInvoice) {
      updateInvoice(fetchedInvoice);
    } else {
      updateInvoice({});
    }
    setLoading({ ...loading, loadingCard: false });
  }, []);

  /* Form State Variables */
  const [form, updateForm] = useState(formData);
  const [items, updateItems] = useState(itemsData);

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

  const populateForm = (invoice) => {
    updateForm({
      // ...form,
      clientAddress: {
        ...invoice[0].content.clientAddress,
      },
      clientInfo: {
        email: invoice[0].content.clientEmail,
        name: invoice[0].content.clientName,
      },
      senderAddress: {
        ...invoice[0].content.senderAddress,
      },
      invoiceInfo: {
        createdAt: invoice[0].content.createdAt,
        description: invoice[0].content.description,
        paymentTerms: invoice[0].content.paymentTerms,
      },
      status: invoice[0].content.status,
    });
  };
  const populateItems = (invoice) => {
    invoice[0].content.items.map((item) => {
      return {
        ...item,
        id: getId(),
      };
    });
    updateItems([...invoice[0].content.items]);
  };

  const handleDelete = useCallback(async (id) => {
    await httpDeleteInvoice(id);
  }, []);

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
        total: convNum(item.total),
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
    setLoading({ ...loading, loadingPost: true });
    httpCreateInvoice(data);
    setTimeout(() => {
      setLoading({ ...loading, loadingPost: false });
      resetForm();
      resetItems();
      notify("Invoice created!");
    }, 5000);
  };

  const handleSaveAsDraft = async (e) => {
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
        total: convNum(item.total),
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
      status: "draft",
      senderAddress: {
        ...form.senderAddress,
      },
      clientAddress: {
        ...form.clientAddress,
      },
      items: [...newItems],
      total: totalItems,
    };
    setLoading({ ...loading, loadingDraft: true });
    httpCreateInvoice(data);
    setTimeout(() => {
      setLoading({ ...loading, loadingDraft: false });
      resetForm();
      resetItems();
      notify("Save as draft!");
    }, 5000);
  };

  const handleSaveChanges = async (id) => {
    const { paymentTerms, createdAt, description } = form.invoiceInfo;
    let term =
      typeof paymentTerms === "number" ? paymentTerms : getNum(paymentTerms);

    const paymentDue = `${format(addDays(`"${createdAt}"`, term))}`;

    const newItems = items.map((item) => {
      return {
        ...item,
        quantity: convNum(item.quantity),
        price: convNum(item.price),
        total: convNum(item.total),
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
    setLoading({ ...loading, loadingUpdate: true });
    httpEditInvoice(id, data);
    setTimeout(() => {
      setLoading({ ...loading, loadingUpdate: false });
      getInvoice(id);
      notify("Invoice updated");
    }, 5000);
  };

  const handleMarkAsPaid = (id) => {
    setLoading({ ...loading, loadingPaid: true });
    httpMarkAsPaid(id);

    setTimeout(() => {
      setLoading({ ...loading, loadingPaid: false });
      getInvoice(id);
      notify("status paid!");
    }, 5000);
  };

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      updateQuery({ ...query, [e.target.name]: e.target.value });
    } else {
      updateQuery({ ...query, [e.target.name]: "" });
    }
  };

  const addItem = (e) => {
    e.preventDefault();
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

  return (
    <AppContext.Provider
      value={{
        ...loading,
        invoices,
        invoice,
        updateInvoice,
        handleMarkAsPaid,
        populateForm,
        handleCheckbox,
        getInvoices,
        getInvoice,
        query,
        loading,
        // loadingPost,
        // loadingUpdate,
        // loadingPaid,
        // loadingDraft,
        // setLoadingUpdate,
        // setLoadingPost,
        // populate,
        populateItems,
        resetForm,
        handleDelete,
        updateQuery,
        resetItems,
        checked,
        // populateClientInfo,
        handleSaveChanges,
        form,
        handleSaveAsDraft,
        updateForm,
        handleChange,
        handleSaveAndSend,
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
