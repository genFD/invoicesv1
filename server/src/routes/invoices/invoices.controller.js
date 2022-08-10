const db = require("../../services/node.postgres");

const createInvoice = async (req, res) => {
  const query = {
    text: "INSERT INTO invoices (content) VALUES($1) RETURNING *",
    values: [req.body],
  };
  try {
    const { rows } = await db.query(query);
    return res.status(201).json(rows);
  } catch (err) {
    console.log(err.stack);
  }
};

//read invoices
const getAllInvoices = async (req, res) => {
  const { rows } = await db.query("SELECT * FROM invoices");
  console.log(`${rows.length} invoices found!!!`);
  return res.status(200).json(rows);
};

//read invoice by id
const getInvoiceById = async (req, res) => {
  const { id } = req.params;
  const query = {
    text: "SELECT * FROM invoices WHERE id = $1",
    values: [id],
  };
  const { rows } = await db.query(query);
  res.status(200).json(rows);
};

//edit/update invoice
const editInvoices = async () => {
  const query = {
    text: "UPDATE invoices set content['$1'] = '$2' where content['clientName'] = '$3' ",
    // values: [`%${company}%`, `%${position}%`"${street}", `%${expertise}%`],
  };
  try {
    const { rows } = await db.query(query);
    // return res.status(201).json(rows);
  } catch (err) {
    console.log(err.stack);
  }
};

//delete invoice
const deleteInvoices = async () => {
  // DELETE FROM invoices WHERE id ='IV2hu3TpWMhQh'
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
