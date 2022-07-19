const db = require('./node.postgres');

//create invoice
const createInvoice = async () => {
  // const { rows } = await db.query('SELECT * FROM invoices');
  // console.log(`${rows.length} invoices found!!!`);
  // return rows;
};

//read invoices
const getAllInvoices = async () => {
  const { rows } = await db.query('SELECT * FROM invoices');
  console.log(`${rows.length} invoices found!!!`);
  return rows;
};

//read invoice by id
const getInvoiceById = async () => {
  // const { rows } = await db.query('SELECT * FROM invoices');
  // console.log(`${rows.length} invoices found!!!`);
  // return rows;
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
module.exports = { getAllInvoices };
