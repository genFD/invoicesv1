require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const app = express();
const invoicesRouter = require("./routes/invoices/invoices.routes");
const api = require("./routes/api");

app.use(morgan("combined"));

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "..", "public")));

const PORT = process.env.PORT || 8000;

app.use("/v1", api);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
