import axios from 'axios';
const API_URL = 'https://invoicev1.herokuapp.com/v1/invoices';
// const API_URL = 'http://localhost:8000/v1/invoices';
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
export { httpGetInvoices };
