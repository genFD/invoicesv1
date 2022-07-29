import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { httpGetInvoice } from '../api/requests';

function useInvoice() {
  const [invoice, updateInvoice] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const getInvoice = useCallback(async (id) => {
    setLoading(true);
    const fetchedInvoice = await httpGetInvoice(id);
    if (fetchedInvoice) {
      const { content } = fetchedInvoice[0];
      updateInvoice(content);
    } else {
      updateInvoice([]);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getInvoice(id);
  }, [getInvoice, id]);

  return { invoice, loading };
}

export default useInvoice;
