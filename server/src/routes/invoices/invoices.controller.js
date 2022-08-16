const db = require("../../services/node.postgres");

// Create invoice
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
const editInvoice = async (req, res) => {
  const query = {
    text: "UPDATE invoices set content = $1 where invoices.id = $2 ",
    values: [req.body, req.params.id],
  };
  console.log(req.body);
  try {
    const { rows } = await db.query(query);
    return res.status(200).json(rows);
  } catch (err) {
    console.log(err.stack);
  }
};
//delete/ invoice

const deleteInvoice = async (req, res) => {
  const { id } = req.params;
  const query = {
    text: "DELETE FROM invoices WHERE id = ($1)",
    values: [id],
  };
  await db.query(query);
  res.status(200).send({ result: `invoice deleted with ID: ${id}` });
};

// sort by status
const filterInvoices = async (req, res) => {
  const { paid, pending, draft } = req.query;
  const valuePaid = `"${paid}"`;
  const valuePending = `"${pending}"`;
  const valueDraft = `"${draft}"`;
  const query = {
    text: "select * from invoices where content['status'] = $1 or content['status'] = $2 or content['status'] = $3 ;",
    values: [valuePaid, valuePending, valueDraft],
  };

  try {
    const { rows } = await db.query(query);
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
  }
};

//Mark As Paid

const markAsPaid = async (req, res) => {
  const { id } = req.params;
  const paid = '"paid"';
  const query = {
    text: "update invoices set content['status'] = $1 where invoices.id = $2 ",
    values: [paid, id],
  };
  console.log(query);
  try {
    await db.query(query);
    res.status(200).send({ result: `invoice with ID: ${id} updated ` });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllInvoices,
  getInvoiceById,
  deleteInvoice,
  editInvoice,
  createInvoice,
  filterInvoices,
  markAsPaid,
};
