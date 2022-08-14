import { useCallback, useEffect, useState } from "react";

import { httpGetInvoices, httpFilterInvoices } from "../api/requests";

function useInvoices() {
  const [invoices, updateInvoices] = useState([]);
  const [query, updateQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const getInvoices = useCallback(async () => {
    setLoading(true);
    const fetchedInvoices = !query
      ? await httpGetInvoices()
      : await httpFilterInvoices(query);
    // const fetchedInvoices = await httpFilterInvoices(query);
    if (fetchedInvoices) {
      updateInvoices(fetchedInvoices);
    } else {
      updateInvoices([]);
    }
    setLoading(false);
  }, [query]);

  useEffect(() => {
    getInvoices();
  }, [getInvoices, query]);

  return { invoices, loading, updateQuery };
}

export default useInvoices;
