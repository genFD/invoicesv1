import { useCallback, useEffect, useState } from "react";

import { httpGetInvoices } from "../api/requests";

function useInvoices() {
  const [invoices, updateInvoices] = useState([]);

  const getInvoices = useCallback(async () => {
    const fetchedInvoices = await httpGetInvoices();
    updateInvoices(fetchedInvoices);
  }, []);

  useEffect(() => {
    getInvoices();
  }, [getInvoices]);

  return invoices;
}

export default useInvoices;
