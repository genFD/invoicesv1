import { useCallback, useEffect, useState } from 'react';

import { httpGetInvoices } from '../api/requests';

function useInvoices() {
  const [invoices, updateInvoices] = useState([]);
  const [loading, setLoading] = useState(false);

  const getInvoices = useCallback(async () => {
    setLoading(true);
    const fetchedInvoices = await httpGetInvoices();
    if (fetchedInvoices) {
      updateInvoices(fetchedInvoices);
    } else {
      updateInvoices([]);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getInvoices();
  }, [getInvoices]);

  return { invoices, loading };
}

export default useInvoices;
