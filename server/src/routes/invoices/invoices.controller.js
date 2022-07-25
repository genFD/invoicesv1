const db = require('../../services/node.postgres');

//create invoice
const createInvoice = async () => {
  // const { rows } = await db.query('SELECT * FROM invoices');
  // console.log(`${rows.length} invoices found!!!`);
  // return rows;
};

//read invoices
const getAllInvoices = async (req, res) => {
  const { rows } = await db.query('SELECT * FROM invoices');
  console.log(`${rows.length} invoices found!!!`);
  return res.status(200).json(rows);
};

//read invoice by id
const getInvoiceById = async (req, res) => {
  const { id } = req.params;
  const query = {
    text: 'SELECT * FROM invoices WHERE id = $1',
    values: [id],
  };
  const { rows } = await db.query(query);
  res.status(200).json(rows);
};

//edit/update invoice
const editInvoices = async () => {
  // const { rows } = await db.query('SELECT * FROM invoices');
  // console.log(`${rows.length} invoices found!!!`);
  // return rows;
};

//delete invoice
const deleteInvoices = async () => {
  // const { rows } = await db.query('SELECT * FROM invoices');
  // console.log(`${rows.length} invoices found!!!`);
  // return rows;
};
module.exports = {
  getAllInvoices,
  getInvoiceById,
  deleteInvoices,
  editInvoices,
  createInvoice,
};
