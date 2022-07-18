import axios from 'axios';
const API_URL = 'https://invoicesv1.herokuapp.com/';

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
