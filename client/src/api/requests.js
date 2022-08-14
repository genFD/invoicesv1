import axios from "axios";
// const API_URL = 'https://invoicev1.herokuapp.com/v1/invoices';
//dev
export const API_URL = "http://localhost:8000/v1/invoices";
//prod
// const API_URL = 'v1/invoices';

// Load invoices
async function httpGetInvoices() {
  try {
    const { data } = await axios.get(`${API_URL}`);
    return data;
  } catch (error) {
    console.log(error);
    return {
      ok: false,
    };
  }
}
// Load invoice
async function httpGetInvoice(id) {
  try {
    const { data } = await axios.get(`${API_URL}/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return {
      ok: false,
    };
  }
}

// Create Invoice
async function httpCreateInvoice(invoice) {
  try {
    return await axios.post(`${API_URL}`, invoice);
  } catch (error) {
    return {
      ok: false,
    };
  }
}
//Edit invoice
async function httpEditInvoice(id, invoice) {
  try {
    return await axios.put(`${API_URL}/${id}`, invoice);
  } catch (error) {
    console.log(error);
    return {
      ok: false,
    };
  }
}

//Delete invoice
async function httpDeleteInvoice(id) {
  try {
    return await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.log(error);
    return {
      ok: false,
    };
  }
}
//filterInvoice
// ${API_URL}/search/contract?${urlQuery}

// http://localhost:8000/v1/invoices/search/status?status=draft

async function httpFilterInvoices(status) {
  try {
    const { data } = await axios.get(
      `${API_URL}/search/status?paid=${status.paid}&pending=${status.pending}&draft=${status.draft}`
    );
    return data;
  } catch (error) {
    console.log(error);
    return {
      ok: false,
    };
  }
}

export {
  httpGetInvoices,
  httpGetInvoice,
  httpDeleteInvoice,
  httpCreateInvoice,
  httpEditInvoice,
  httpFilterInvoices,
};
