const express = require("express");
const routes = require("./router");
require('dotenv').config()

const app = express();

app.use("/api", routes);
const server = process.env.SERVER_PORT || 8000;
app.listen(server, () => {
  console.log(`you are in port ${server}`);
});
