const express = require("express");
const app = express();
const port = 8080;

// Define route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});