import React, {
  useState,
  useContext,
  useEffect,
  createContext,
  useCallback,
} from "react";

import {
  httpCreateInvoice,
  httpDeleteInvoice,
  httpEditInvoice,
  httpFilterInvoices,
  httpGetInvoice,
  httpGetInvoices,
  httpMarkAsPaid,
} from "../api/requests";

import { formData, itemsData, loadingState, checkBoxState } from "../data/data";
import {
  addDays,
  format,
  getId,
  convNum,
  getNum,
  notify,
} from "../utils/utils";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  /* invoices -- checkbox */
  const [invoices, updateInvoices] = useState([]);
  const [invoice, updateInvoice] = useState({});
  const [loading, setLoading] = useState(loadingState);
  const [checked, setChecked] = useState(checkBoxState);
  const [query, updateQuery] = useState({
    paid: "",
    pending: "",
    draft: "",
  });
  const [form, updateForm] = useState(formData);
  const [items, updateItems] = useState(itemsData);

  /* ------*/
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

  /* ------*/
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

  const handleDelete = useCallback(async (id) => {
    await httpDeleteInvoice(id);
  }, []);

  const deleteInvoice = (id) => {
    setLoading({ ...loading, loadingDelete: true });
    handleDelete(id);
    setTimeout(() => {
      getInvoices();
      notify("Invoice deleted");
    }, 3000);
  };

  /* ------Form functions-----*/

  const resetForm = () => {
    updateForm(formData);
  };
  const resetItems = () => {
    updateItems(itemsData);
  };

  /* ------calculate grand total ----*/
  const totalItems = items.reduce((total, item) => {
    total += convNum(item.total);
    return total;
  }, 0);

  /* handle input onChange------*/
  const handleChange = (e, key) => {
    updateForm({
      ...form,
      [key]: { ...form[key], [e.target.name]: e.target.value },
    });
  };
  const handleCheckbox = (e) => {
    if (e.target.checked) {
      updateQuery({ ...query, [e.target.name]: e.target.value });
    } else {
      updateQuery({ ...query, [e.target.name]: "" });
    }
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

  /* handle form submit ------*/
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

  /* handle mark paid ------*/
  const handleMarkAsPaid = (id) => {
    setLoading({ ...loading, loadingPaid: true });
    httpMarkAsPaid(id);

    setTimeout(() => {
      setLoading({ ...loading, loadingPaid: false });
      getInvoice(id);
      notify("status paid!");
    }, 5000);
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
        deleteInvoice,
        populateItems,
        resetForm,
        handleDelete,
        updateQuery,
        resetItems,
        handleSaveChanges,
        // form,
        ...checked,
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
