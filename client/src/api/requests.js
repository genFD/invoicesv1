import axios from 'axios';
// const API_URL = 'https://invoicev1.herokuapp.com/v1/invoices';
//dev
const API_URL = 'http://localhost:8000/v1/invoices';
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
export { httpGetInvoices, httpGetInvoice };
