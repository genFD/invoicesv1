const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const db = new Pool({
  connectionString: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false, // don't check for SSL cert
  },
});
const loadInvoices = async () => {
  const { rows } = await db.query('SELECT * FROM invoices');
  console.log(`${rows.length} invoices found!!!`);
  return rows;
};
module.exports = {
  db,
  loadInvoices,
};
