const { getAllInvoices } = require('../../services/queries');

async function httpGetAllInvoices(req, res) {
  return res.status(200).json(await getAllInvoices());
}
module.exports = { httpGetAllInvoices };
