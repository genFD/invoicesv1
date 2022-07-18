const http = require('http');
const app = require('./app');
const dotenv = require('dotenv');

dotenv.config();
const server = http.createServer(app);
const { loadInvoices } = require('./db/config');
const PORT = process.env.PORT || 8000;

async function startServer() {
  await loadInvoices();
  server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
}
startServer();
